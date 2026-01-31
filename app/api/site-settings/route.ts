import { sanityClient } from '@/lib/sanityClient';
import { siteSettingsQuery } from '@/lib/sanityQueries';

export async function GET() {
  try {
    const data = await sanityClient.fetch(siteSettingsQuery);
    return Response.json(data);
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return Response.json(
      { error: 'Failed to fetch site settings' },
      { status: 500 }
    );
  }
}
