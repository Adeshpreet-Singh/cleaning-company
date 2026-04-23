import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProClean Company | Professional Cleaning Services in Dallas, TX",
  description:
    "Top-rated residential and commercial cleaning services in Dallas-Fort Worth. Deep cleaning, move-in/move-out, office cleaning, and regular schedules. Licensed, insured & bonded. Free quotes!",
  keywords: [
    "cleaning services Dallas",
    "house cleaning DFW",
    "commercial cleaning",
    "deep cleaning",
    "move-out cleaning",
    "office cleaning",
    "residential cleaning",
    "maid service",
  ],
  openGraph: {
    title: "ProClean Company | Professional Cleaning Services in Dallas, TX",
    description:
      "Top-rated residential and commercial cleaning services in Dallas-Fort Worth. Licensed, insured & bonded. Free quotes!",
    url: "[WEBSITE]",
    siteName: "ProClean Company",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/photo-1600585152220-90363fe7e115.jpg",
        width: 1200,
        height: 630,
        alt: "ProClean Company - Professional Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProClean Company | Professional Cleaning Services",
    description:
      "Residential & commercial cleaning in Dallas-Fort Worth. Licensed, insured, eco-friendly. Free quotes!",
    images: [
      "/images/photo-1600585152220-90363fe7e115.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "[WEBSITE]",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#008ba3" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CleaningService",
              name: "ProClean Company",
              description:
                "Professional residential and commercial cleaning services in Dallas-Fort Worth.",
              url: "[WEBSITE]",
              telephone: "+1-214-555-2532",
              email: "contact@example.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "456 Clean Street",
                addressLocality: "Dallas",
                addressRegion: "TX",
                postalCode: "75201",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 32.7767,
                longitude: -96.797,
              },
              areaServed: [
                "Dallas",
                "Fort Worth",
                "Plano",
                "Frisco",
                "Irving",
                "Arlington",
                "Richardson",
                "McKinney",
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "15:00",
                },
              ],
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "350",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (typeof window !== 'undefined') {
            const obs = new IntersectionObserver((entries) => {
              entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
            }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
            document.addEventListener('DOMContentLoaded', () => {
              document.querySelectorAll('.reveal,.reveal-left,.reveal-scale').forEach(el => obs.observe(el));
            });
            const mo = new MutationObserver(() => {
              document.querySelectorAll('.reveal:not(.visible),.reveal-left:not(.visible),.reveal-scale:not(.visible)').forEach(el => obs.observe(el));
            });
            mo.observe(document.body, { childList: true, subtree: true });
          }
        `,
          }}
        />
      </body>
    </html>
  );
}