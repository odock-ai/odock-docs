import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';

export const dynamic = 'force-static';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://docs.odock.ai';

function withTrailingSlash(pathname: string) {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

function toAbsoluteUrl(pathname: string) {
  return new URL(withTrailingSlash(pathname), siteUrl).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: toAbsoluteUrl('/'),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...source.getPages().map((page) => ({
      url: toAbsoluteUrl(page.url),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: page.url === '/docs' ? 0.9 : 0.7,
    })),
  ];
}
