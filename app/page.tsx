"use client";

import { useEffect, useState } from "react";
import {
  Sun,
  Moon,
  Phone,
  MapPin,
  Compass,
  Sparkles,
  GraduationCap,
  MessageCircle,
  Calculator,
  Atom,
  Binary,
  Languages,
} from "lucide-react";

export default function HomePage() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const nextDark = !dark;
    setDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="w-full max-w-2xl mx-auto px-6 pt-8 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium text-stone-600 dark:text-zinc-400">
          <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
          <span>בביתי בגבעתיים | אונליין (אפשרות להגעה לבית התלמיד)</span>
        </div>

        <button
          onClick={toggleTheme}
          aria-label="החלפת ערכת נושא"
          className="p-2.5 rounded-full border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-stone-700 dark:text-zinc-300 hover:bg-stone-100 dark:hover:bg-zinc-800 transition-colors"
        >
          {mounted && dark ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </button>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-2xl mx-auto px-6 py-6 space-y-10">
        {/* Hero Section */}
        <section className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-100/80 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/50">
            <Sparkles className="w-3.5 h-3.5" />
            <span>שיעורים פרטיים לתלמידי בית ספר (יסודי עד תיכון)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-zinc-50 leading-tight">
            עדן חדד - שיעורים פרטיים בגובה העיניים.
          </h1>

          <p className="text-base sm:text-lg text-stone-600 dark:text-zinc-400 leading-relaxed">
            מורה פרטי לחשבון ומתמטיקה, פיזיקה, אנגלית ומדעים. המטרה היא להבין באמת את החומר, להחזיר את הביטחון, וללמד את הילד לחשוב בעצמו במקום לשנן תשובות על אוטומט.
          </p>

          {/* Quick highlights */}
          <div className="flex flex-wrap gap-2 pt-1 text-xs sm:text-sm font-medium text-stone-700 dark:text-zinc-300">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-zinc-800/70 border border-stone-200/80 dark:border-zinc-700/60">
              <Calculator className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> חשבון ומתמטיקה
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-zinc-800/70 border border-stone-200/80 dark:border-zinc-700/60">
              <Atom className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> פיזיקה ומדעים
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-zinc-800/70 border border-stone-200/80 dark:border-zinc-700/60">
              <Languages className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> אנגלית
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-zinc-800/70 border border-stone-200/80 dark:border-zinc-700/60 text-stone-500 dark:text-zinc-400">
              <Binary className="w-3.5 h-3.5 text-stone-400 dark:text-zinc-500" /> גם יסודות תכנות (Python / SQL)
            </span>
          </div>

          <div className="text-xs sm:text-sm text-stone-600 dark:text-zinc-400 pt-1">
            📍 השיעורים מתקיימים <strong>בביתי בגבעתיים או אונליין</strong> (קיימת אפשרות להגעה לבית התלמיד בגבעתיים ורמת גן בתשלום נוסף).
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href="tel:054-9451235"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>054-9451235</span>
            </a>
            <a
              href="https://wa.me/972549451235"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium border border-stone-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-stone-800 dark:text-zinc-200 hover:bg-stone-100 dark:hover:bg-zinc-800/80 transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>הודעה בוואטסאפ</span>
            </a>
          </div>
        </section>

        <hr className="border-stone-200 dark:border-zinc-800/80" />

        {/* The Approach */}
        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-semibold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>איך אני מלמד?</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900/70 border border-stone-200/80 dark:border-zinc-800/80">
              <div className="font-semibold text-stone-900 dark:text-zinc-100 text-sm mb-1">
                לחשוב, לא לשנן
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-zinc-400 leading-normal">
                מבינים את ההיגיון שמאחורי התרגיל, כדי שלא נתקעים ברגע שמשנים מילה במבחן.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900/70 border border-stone-200/80 dark:border-zinc-800/80">
              <div className="font-semibold text-stone-900 dark:text-zinc-100 text-sm mb-1">
                פירוק בעיות מורכבות
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-zinc-400 leading-normal">
                לומדים איך לגשת לשאלה חדשה בצעדים פשוטים, בלי פחד ובלי להישען על ניחושים.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900/70 border border-stone-200/80 dark:border-zinc-800/80">
              <div className="font-semibold text-stone-900 dark:text-zinc-100 text-sm mb-1">
                סבלנות ובגובה העיניים
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-zinc-400 leading-normal">
                בלי לחץ ובלי שיפוטיות. יוצרים מרחב שבו מותר לטעות ולפתח ביטחון עצמי.
              </p>
            </div>
          </div>
        </section>

        {/* About Me */}
        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-semibold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>קצת עליי</span>
          </h2>

          <div className="p-5 rounded-xl bg-white dark:bg-zinc-900/70 border border-stone-200/80 dark:border-zinc-800/80 space-y-2 text-sm sm:text-base text-stone-700 dark:text-zinc-300 leading-relaxed">
            <p>
              מתגורר בגבעתיים, בוגר <strong>הנדסת תעשייה וניהול מאוניברסיטת בן גוריון</strong> ועובד בהייטק.
            </p>
            <p>
              מתוך חיבור אמיתי לחינוך, עבדתי בעבר כגנן ומוביל צהרון, והדרכתי ילדים במסגרות שונות (מוזיאון לונדע, פרויקט פר&quot;ח ומיזמי מדע ורובוטיקה).
            </p>
            <p className="text-stone-600 dark:text-zinc-400 text-xs sm:text-sm pt-1">
              השילוב בין חשיבה אנליטית לבין ניסיון שטח עם ילדים מאפשר לי לפשט חומר מורכב בסבלנות רבה. (בנוסף למקצועות הבסיס, מלמד גם יסודות תכנות בפייתון ו-SQL למי שמעוניין).
            </p>
          </div>
        </section>

        {/* Contact Bar */}
        <section className="p-5 rounded-xl bg-stone-100/90 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="font-semibold text-stone-900 dark:text-zinc-100 text-base">
              מוזמנים ליצור קשר ולהתייעץ
            </div>
            <div className="text-xs sm:text-sm text-stone-600 dark:text-zinc-400">
              זמין לשיחה קצרה או בוואטסאפ לתיאום ולהבנת צורכי התלמיד/ה.
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:054-9451235"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              <span dir="ltr">054-9451235</span>
            </a>
            <a
              href="https://wa.me/972549451235"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium border border-stone-300 dark:border-zinc-800 bg-white dark:bg-zinc-800 text-stone-800 dark:text-zinc-200 hover:bg-stone-50 dark:hover:bg-zinc-700 transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>וואטסאפ</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-2xl mx-auto px-6 py-6 text-xs text-stone-500 dark:text-zinc-500 flex items-center justify-between border-t border-stone-200/60 dark:border-zinc-900">
        <span>© {new Date().getFullYear()} עדן חדד</span>
        <span>בביתי בגבעתיים | אונליין</span>
      </footer>
    </div>
  );
}
