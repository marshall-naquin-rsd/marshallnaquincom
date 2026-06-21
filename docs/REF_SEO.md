# REF: SEO Implementation

<!-- CUSTOMIZE: Replace with your project name throughout this file -->

## Overview

This document covers SEO implementation for Next.js projects. [IF MIGRATING FROM SPA: The primary reason for migrating from React SPA to Next.js was SEO. The React app served an empty `<div id="root">` to search engine crawlers, resulting in zero indexed content.] Next.js Server-Side Rendering (SSR) provides full HTML on first load, solving critical SEO issues.

## Why Next.js for SEO

### The React SPA Problem

**What crawlers saw** (React SPA):

```html
<!DOCTYPE html>
<html>
  <head>
    <title>[Your Site Title]</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="/bundle.js"></script>
  </body>
</html>
```

**Result**: Zero content indexed, no rankings, invisible to Google.

### The Next.js Solution

**What crawlers see now** (Next.js SSR):

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Your Page Title | Your Site Name</title>
    <meta
      name="description"
      content="Your page description for search results..."
    />
    <meta property="og:title" content="Your Page Title | Your Site" />
  </head>
  <body>
    <header>...</header>
    <main>
      <h1>Your Page Heading</h1>
      <p>Your actual page content here...</p>
      <!-- Full page content here -->
    </main>
    <footer>...</footer>
  </body>
</html>
```

**Result**: Full content indexed, proper rankings, visible to all search engines.

## Metadata System

### Page-Level Metadata

**File**: `app/[page]/page.tsx`

Every page exports metadata:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title | Your Site Name",
  description:
    "Your page description that appears in search results. Make it compelling and include relevant keywords.",
  keywords: [
    "your keyword 1",
    "your keyword 2",
    "your location",
    "your topic",
    "your service",
  ],
  openGraph: {
    title: "Page Title | Your Site",
    description: "Your page description for social media sharing",
    url: "https://yourdomain.com/page-path",
    siteName: "Your Site Name",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your site or page description",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Title | Your Site",
    description: "Your page description for Twitter",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};
```

### Root Layout Metadata

**File**: `app/layout.tsx`

<!-- CUSTOMIZE: Update with your domain and branding -->

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://[yourdomain.com]"),
  title: {
    default: "[Your Site Name]",
    template: "%s | [Your Site Name]",
  },
  description: "[Your site description - appears in search results]",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
```

**How template works**:

- Page title: "Your Page Title"
- Rendered as: "Your Page Title | Your Site Name"
- Home page uses `default` instead

## Structured Data (JSON-LD)

### Organization Schema

**File**: `app/layout.tsx` or `components/Layout/StructuredData.tsx`

```typescript
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Your Organization Name",
  url: "https://yourdomain.com",
  logo: "https://yourdomain.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@yourdomain.com",
    contactType: "customer service",
  },
  sameAs: ["https://www.facebook.com/yourpage"],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
```

### VideoObject Schema

<!-- CUSTOMIZE: Replace with your video details -->

**Why It Matters**: Google requires VideoObject schema to index videos in search results. Without it, videos are invisible to Google's video search.

**Required Fields**:

- `name` - Video title (required)
- `description` - Video description (required)
- `thumbnailUrl` - Video thumbnail image URL (required)
- `uploadDate` - ISO 8601 date (required)
- `contentUrl` - Direct video file URL (required)

**File**: `app/page.tsx` (for home page video)

```typescript
const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Your Video Title - Descriptive Title for Search",
  description:
    "Your video description that explains the content and includes relevant keywords. Make it informative and compelling.",
  thumbnailUrl: "https://yourdomain.com/images/video-thumbnail.jpg",
  uploadDate: "2025-01-01T00:00:00Z",
  duration: "PT2M30S", // ISO 8601 duration format (PT2M30S = 2 minutes 30 seconds)
  contentUrl: "https://yourdomain.com/video/your-video.mp4",
  embedUrl: "https://yourdomain.com/",
  publisher: {
    "@type": "Organization",
    name: "Your Organization Name",
    logo: {
      "@type": "ImageObject",
      url: "https://yourdomain.com/images/logo.png",
      width: 600,
      height: 60,
    },
  },
};
```

**How to add to page**:

```tsx
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      {/* Rest of page content */}
    </>
  );
}
```

**Duration Format Examples**:

- `PT1M30S` = 1 minute 30 seconds
- `PT5M` = 5 minutes
- `PT1H30M` = 1 hour 30 minutes

**Best Practices**:

- Use actual video duration (can get from video file metadata)
- Thumbnail should be at least 160x90 pixels (recommended: 1280x720)
- Upload date should be actual publication date
- Keep description under 5000 characters
- Use descriptive, keyword-rich name and description

### Video Metadata Tags

**Add to page metadata** for social sharing and additional SEO signals:

```typescript
export const metadata: Metadata = {
  title: "Your Page Title | Your Site Name",
  description: "Your page description with video content",
  openGraph: {
    title: "Your Page Title | Your Site Name",
    description: "Your page description for social sharing",
    url: "https://yourdomain.com",
    type: "website",
    videos: [
      {
        url: "https://yourdomain.com/video/your-video.mp4",
        width: 1920,
        height: 1080,
        type: "video/mp4",
      },
    ],
  },
  twitter: {
    card: "player",
    title: "Your Page Title | Your Site Name",
    description: "Your page description for Twitter",
    images: ["https://yourdomain.com/images/video-thumbnail.jpg"],
    players: {
      playerUrl: "https://yourdomain.com/",
      streamUrl: "https://yourdomain.com/video/your-video.mp4",
      width: 1920,
      height: 1080,
    },
  },
};
```

**Why This Matters**:

- Open Graph videos show in Facebook/LinkedIn shares
- Twitter player cards enable inline video playback
- Provides additional signals to Google about video content

### Meeting Event Schema

**File**: `app/meetings/page.tsx`

```typescript
const meetingSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Thursday Night GA Meeting",
  description: "Weekly Your Organization support group meeting",
  startDate: "2025-03-20T19:00:00-06:00",
  endDate: "2025-03-20T20:30:00-06:00",
  eventSchedule: {
    "@type": "Schedule",
    repeatFrequency: "P1W",
    byDay: "Thursday",
  },
  location: {
    "@type": "Place",
    name: "Serenity Center",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main St",
      addressLocality: "Your City",
      addressRegion: "LA",
      postalCode: "70801",
      addressCountry: "US",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Your Organization Name",
    url: "https://yourdomain.com",
  },
};
```

### Article Schema

**File**: `app/twelve-steps/page.tsx`

```typescript
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Twelve Steps of Your Organization",
  description: "The twelve steps of recovery from your topic",
  author: {
    "@type": "Organization",
    name: "Your Organization",
  },
  publisher: {
    "@type": "Organization",
    name: "Your Organization Name",
    logo: {
      "@type": "ImageObject",
      url: "https://yourdomain.com/logo.png",
    },
  },
  datePublished: "2025-01-01",
  dateModified: "2025-03-01",
};
```

## Sitemap Generation

### Static Sitemap

**File**: `app/sitemap.ts`

```typescript
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yourdomain.com";

  const publicPages = [
    "",
    "/meetings",
    "/about",
    "/resources",
    "/contact",
    "/twelve-steps",
    "/twelve-traditions",
    "/recovery-program",
    "/faq",
    "/literature",
    "/helping-others",
    "/stories",
    "/disclaimer",
  ];

  return publicPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "daily" : "weekly",
    priority: page === "" ? 1.0 : 0.8,
  }));
}
```

**Access**: `https://yourdomain.com/sitemap.xml`

### Dynamic Sitemap

For pages with dynamic data (events, announcements):

```typescript
import { createClient } from "@/lib/supabase/server";

export default async function sitemap(): MetadataRoute.Sitemap {
  const supabase = await createClient();

  // Fetch dynamic events
  const { data: events } = await supabase
    .from("events")
    .select("id, updated_at")
    .eq("pending_approval", false);

  const eventUrls =
    events?.map((event) => ({
      url: `https://yourdomain.com/events/${event.id}`,
      lastModified: new Date(event.updated_at),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })) || [];

  return [...staticPages, ...eventUrls];
}
```

## Robots.txt

**File**: `app/robots.ts`

```typescript
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin-dashboard/", "/authhome/", "/cart/", "/my-orders/"],
      },
    ],
    sitemap: "https://yourdomain.com/sitemap.xml",
  };
}
```

**Access**: `https://yourdomain.com/robots.txt`

**Output**:

```
User-Agent: *
Allow: /
Disallow: /admin-dashboard/
Disallow: /authhome/
Disallow: /cart/
Disallow: /my-orders/

Sitemap: https://yourdomain.com/sitemap.xml
```

## IndexNow Integration

### IndexNow API

**Purpose**: Instantly notify search engines (Bing, Yandex) when content changes.

**File**: `app/api/indexnow/route.ts`

```typescript
export async function POST(request: Request) {
  const { urls } = await request.json();

  const indexNowPayload = {
    host: "yourdomain.com",
    key: process.env.INDEXNOW_KEY,
    keyLocation: `https://yourdomain.com/${process.env.INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(indexNowPayload),
  });

  return Response.json({ success: response.ok });
}
```

### IndexNow Key File

**File**: `public/[your-key].txt`

```
your-indexnow-key-here
```

**How to get key**:

1. Generate random UUID
2. Create `public/[uuid].txt` with that UUID
3. Add to `.env.local`: `INDEXNOW_KEY=your-uuid`

### Triggering IndexNow

**Manual Submission**:

```bash
npm run indexnow
```

**Script**: `scripts/submit-indexnow.js`

```javascript
const urls = [
  "https://yourdomain.com/",
  "https://yourdomain.com/meetings",
  "https://yourdomain.com/about",
  // ... all public pages
];

fetch("http://localhost:3000/api/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ urls }),
});
```

**Automatic on Content Change**:

```typescript
// After creating event
await fetch("/api/indexnow", {
  method: "POST",
  body: JSON.stringify({
    urls: [`https://yourdomain.com/events/${eventId}`],
  }),
});
```

## Canonical URLs

**Prevent duplicate content issues**:

```typescript
export const metadata: Metadata = {
  alternates: {
    canonical: "https://yourdomain.com/meetings",
  },
};
```

**Why needed**:

- Prevents `www.yourdomain.com` vs `yourdomain.com` duplicates
- Consolidates ranking signals to one URL
- Prevents query parameter duplicates

## Open Graph & Social Sharing

### Facebook/LinkedIn Sharing

```typescript
openGraph: {
  title: 'Meetings | Your City GA',
  description: 'Find your meetings in Your City',
  url: 'https://yourdomain.com/meetings',
  siteName: 'Your Organization Name',
  images: [
    {
      url: 'https://yourdomain.com/og-meetings.jpg',
      width: 1200,
      height: 630,
      alt: 'GA Meetings in Your City'
    }
  ],
  locale: 'en_US',
  type: 'website'
}
```

### Twitter Cards

```typescript
twitter: {
  card: 'summary_large_image',
  title: 'Meetings | Your City GA',
  description: 'Find your meetings in Your City',
  images: ['https://yourdomain.com/twitter-meetings.jpg'],
  creator: '@yourhandle'
}
```

### Testing Social Cards

**Facebook Debugger**: https://developers.facebook.com/tools/debug/
**Twitter Card Validator**: https://cards-dev.twitter.com/validator
**LinkedIn Inspector**: https://www.linkedin.com/post-inspector/

## Image Optimization for SEO

### Alt Text

**Required for all images**:

```tsx
import Image from "next/image";

<Image
  src="/meetings-hero.jpg"
  width={1200}
  height={600}
  alt="Your Organization meeting room in Your City with supportive members"
  priority
/>;
```

**Alt text best practices**:

- Describe what's in the image
- Include relevant keywords naturally
- Keep under 125 characters
- Don't start with "Image of" or "Picture of"

### File Names

**✅ Good**:

- `ga-meeting-thursday-night.jpg`
- `recovery-resources-baton-rouge.jpg`

**❌ Bad**:

- `IMG_1234.jpg`
- `photo.jpg`

### Image Formats

**Recommendations**:

- Use WebP for photos (better compression)
- Use PNG for logos/graphics with transparency
- Use SVG for icons and simple graphics
- Next.js automatically optimizes via next/image

## Performance & Core Web Vitals

### Why It Matters

Google uses Core Web Vitals as ranking factors:

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Optimization Strategies

**1. Font Loading**:

```typescript
const leagueSpartan = localFont({
  src: "./fonts/LeagueSpartan-VariableFont_wght.ttf",
  display: "swap", // Prevents FOIT (Flash of Invisible Text)
  preload: true,
});
```

**2. Image Priority**:

```tsx
<Image
  src="/hero.jpg"
  priority // Load immediately for above-fold images
  width={1200}
  height={600}
  alt="Hero"
/>
```

**3. Code Splitting**:

```typescript
const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <Spinner />,
  ssr: false,
});
```

**4. Caching**:

```typescript
// next.config.js
async headers() {
  return [
    {
      source: '/images/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable'
        }
      ]
    }
  ]
}
```

## Local SEO

### Google Business Profile

**Critical for local searches**:

1. Create Google Business Profile
2. Verify physical address (if applicable)
3. Add meeting times and location
4. Upload photos
5. Respond to reviews

### Local Schema Markup

```typescript
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Your Organization Name",
  image: "https://yourdomain.com/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main St",
    addressLocality: "Your City",
    addressRegion: "LA",
    postalCode: "70801",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.4515,
    longitude: -91.1871,
  },
  url: "https://yourdomain.com",
  telephone: "+1-225-XXX-XXXX",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "19:00",
      closes: "20:30",
    },
  ],
};
```

### NAP Consistency

**Name, Address, Phone** must be consistent across:

- Website
- Google Business Profile
- Facebook
- Yelp
- Other directories

## Content SEO

### Heading Hierarchy

**✅ Correct**:

```html
<h1>Your Organization Meetings in Your City</h1>
<h2>Weekly Meeting Schedule</h2>
<h3>Thursday Night Meeting</h3>
<h2>How to Attend</h2>
```

**❌ Wrong**:

```html
<h1>Meetings</h1>
<h3>Thursday Night</h3>
<h2>Schedule</h2>
```

### Keyword Strategy

<!-- CUSTOMIZE: Research and list your target keywords -->

**Primary Keywords**:

- [Your primary keyword]
- [Your secondary keyword]
- [Your industry + location]
- [Your service/product]

**Long-tail Keywords**:

- "[Specific question your audience asks]"
- "[How to + your service]"
- "[Where to find + your service + location]"

### Content Length

**Minimum recommendations**:

- Home page: 500+ words
- About page: 800+ words
- Resources page: 1000+ words
- Blog posts: 1500+ words

## Analytics & Tracking

### Google Search Console

**Setup**:

1. Add property at search.google.com/search-console
2. Verify ownership (add meta tag or upload file)
3. Submit sitemap
4. Monitor performance

**Key Metrics**:

- Impressions
- Clicks
- Average position
- Click-through rate (CTR)

### Google Analytics 4

**Implementation**:

```tsx
// app/layout.tsx
import Script from 'next/script'

<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## Common SEO Issues

### 1. Missing Meta Descriptions

**Symptom**: Google shows random text in search results
**Fix**: Add description to all page metadata

### 2. Duplicate Content

**Symptom**: Multiple URLs with same content
**Causes**:

- www vs non-www
- HTTP vs HTTPS
- Trailing slashes
  **Fix**: Use canonical URLs

### 3. Slow Page Speed

**Symptom**: Poor Core Web Vitals scores
**Causes**:

- Unoptimized images
- No font preloading
- Large JavaScript bundles
  **Fix**: Follow performance optimization patterns

### 4. Not Mobile-Friendly

**Symptom**: Poor mobile usability in Search Console
**Fix**: Use responsive design with Tailwind breakpoints

### 5. Broken Links

**Symptom**: 404 errors in Search Console
**Fix**: Regular audits, fix or redirect broken URLs

### 6. Video Not Indexed

**Symptom**: Video not appearing in Google Search Console or video search results
**Causes**:

- Missing VideoObject structured data
- No thumbnail image
- Video file not accessible to crawlers
- Missing metadata tags

**Fix**:

1. Add VideoObject schema with all required fields (name, description, thumbnailUrl, uploadDate, contentUrl)
2. Create a thumbnail image (minimum 160x90px, recommended 1280x720px)
3. Add Open Graph video tags to metadata
4. Verify video file is publicly accessible (not behind auth)
5. Submit page to Google Search Console for re-indexing
6. Use Google's Rich Results Test tool to validate VideoObject schema

**Validation**:

<!-- CUSTOMIZE: Replace domain in curl command -->

```bash
# Test structured data
curl https://[yourdomain.com] | grep -A 20 "VideoObject"

# Verify in browser
# View source (Ctrl+U) and search for "VideoObject"
```

**Google Tools**:

- Rich Results Test: <https://search.google.com/test/rich-results>
- Video Indexing Report: Google Search Console → Enhancements → Video Pages

## SEO Checklist

**Per-Page Checklist**:

- [ ] Unique title (50-60 characters)
- [ ] Unique description (150-160 characters)
- [ ] H1 tag with primary keyword
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Alt text on all images
- [ ] Internal links to related pages
- [ ] Mobile responsive
- [ ] Fast load time (< 3 seconds)
- [ ] HTTPS enabled
- [ ] Canonical URL set

**Site-Wide Checklist**:

- [ ] Sitemap.xml submitted to Search Console
- [ ] Robots.txt configured
- [ ] Google Analytics installed
- [ ] Search Console verified
- [ ] Structured data implemented
- [ ] Open Graph tags on all pages
- [ ] Twitter cards configured
- [ ] Favicon and app icons
- [ ] 404 page designed
- [ ] IndexNow integration

## Quick Reference

**Key Files**:

- Metadata: `app/[page]/page.tsx`
- Sitemap: `app/sitemap.ts`
- Robots: `app/robots.ts`
- Structured data: `components/Layout/StructuredData.tsx`
- IndexNow: `app/api/indexnow/route.ts`

**Key Commands**:

- `npm run build` - Test SSR output
- `npm run indexnow` - Submit to search engines
- View source - Verify full HTML rendered

**Testing Tools**:

- Google Search Console
- PageSpeed Insights
- Lighthouse (Chrome DevTools)
- Facebook Debugger
- Twitter Card Validator

**Target Scores**:

- PageSpeed: >90
- Accessibility: >95
- SEO: 100
- LCP: <2.5s
- FID: <100ms
- CLS: <0.1
