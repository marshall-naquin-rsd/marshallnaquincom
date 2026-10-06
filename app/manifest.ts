import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Marshall R. Naquin',
    short_name: 'Marshall',
    description:
      'Physician in recovery from gambling addiction. Talks for treatment programs, 12 step groups, and the staff and clinicians who work with them.',
    start_url: '/',
    scope: '/',
    display: 'browser',
    theme_color: '#faf6ee',
    background_color: '#faf6ee',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
