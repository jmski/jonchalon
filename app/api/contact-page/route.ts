import { sanityClient } from '@/lib/sanityClient';
import { contactPageQuery } from '@/lib/sanityQueries';

export async function GET() {
  try {
    const data = await sanityClient.fetch(contactPageQuery);
    return Response.json(data);
  } catch (error) {
    console.error('Error fetching contact page:', error);
    return Response.json(
      { error: 'Failed to fetch contact page' },
      { status: 500 }
    );
  }
}
