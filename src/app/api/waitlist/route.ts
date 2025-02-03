// api for kavinai website
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const { name, email, reason } = await request.json();

    // Basic validation
    if (!name || !email || !reason) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();

    // Check if email already exists
    const existingUser = await db.collection('waitlist').findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'This email is already on the waitlist!' },
        { status: 409 } // 409 Conflict status code
      );
    }

    // Insert into waitlist collection if email doesn't exist
    await db.collection('waitlist').insertOne({
      name,
      email,
      reason,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { success: true, message: 'Joined waitlist successfully! 🎉' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
