import { sanityClient } from '@/lib/sanityClient';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, company, collaborationType, message } = body;

    // Validate required fields
    if (!name || !email || !collaborationType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create document in Sanity
    const doc = await sanityClient.create({
      _type: 'inquiry',
      name,
      email,
      company: company || null,
      collaborationType,
      message,
      submittedAt: new Date().toISOString(),
      status: 'New',
    });

    // Send confirmation email (optional - requires email service)
    // For now, we'll just store it in Sanity

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry submitted successfully',
        docId: doc._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}
