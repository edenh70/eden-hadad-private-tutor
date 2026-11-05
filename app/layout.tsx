import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "שיעורים פרטיים בגבעתיים ואונליין | מתמטיקה, פיזיקה ואנגלית - עדן חדד",
  description:
    "שיעורים פרטיים במתמטיקה, פיזיקה, מדעים ואנגלית בגבעתיים, רמת גן ואונליין. 120–150 ₪ לשיעור, שיחת היכרות חינם ובלי מחויבות.",
  openGraph: {
    title: "שיעורים פרטיים שגורמים לילד להבין, לא רק לשנן - עדן חדד",
    description:
      "מתמטיקה, פיזיקה, מדעים ואנגלית. בגבעתיים, רמת גן ואונליין. שיחת היכרות חינם.",
    locale: "he_IL",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "עדן חדד - שיעורים פרטיים",
  telephone: "+972549451235",
  areaServed: ["גבעתיים", "רמת גן"],
  address: { "@type": "PostalAddress", addressLocality: "גבעתיים", addressCountry: "IL" },
  priceRange: "120-150 ILS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${heebo.className} bg-stone-50 text-stone-900 dark:bg-zinc-950 dark:text-zinc-100 antialiased transition-colors duration-200 selection:bg-amber-200 dark:selection:bg-amber-900`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
