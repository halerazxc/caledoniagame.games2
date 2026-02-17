import { NextResponse } from 'next/server';

const subscribers = new Set<string>();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    const normalised = email.trim().toLowerCase();

    if (subscribers.has(normalised)) {
      return NextResponse.json({ message: 'This email is already subscribed. Check your inbox for our latest updates!' });
    }

    subscribers.add(normalised);

    console.log('[Newsletter Signup]', {
      timestamp: new Date().toISOString(),
      email: normalised,
      totalSubscribers: subscribers.size,
    });

    return NextResponse.json({
      message: 'Welcome aboard! Check your inbox to confirm your subscription. You must be 18+ to receive our newsletters.',
    });
  } catch {
    return NextResponse.json({ error: 'Invalid request format.' }, { status: 400 });
  }
}
