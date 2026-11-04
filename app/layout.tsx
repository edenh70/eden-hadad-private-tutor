import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "עדן חדד - שיעורים פרטיים בגובה העיניים",
  description:
    "שיעורים פרטיים לתלמידי בית ספר בגבעתיים והסביבה. ללמוד לחשוב לבד, להבין לעומק ולא רק לדקלם תשובות. מתמטיקה, מדעים ותכנות (פייתון ו-SQL).",
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
        {children}
      </body>
    </html>
  );
}
