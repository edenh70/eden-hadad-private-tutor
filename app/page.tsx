"use client";

import { useEffect, useState } from "react";
import {
  Sun,
  Moon,
  Phone,
  Mail,
  MapPin,
  Code2,
  Compass,
  HeartHandshake,
  Sparkles,
  GraduationCap,
  MessageCircle,
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
      <header className="w-full max-w-3xl mx-auto px-6 pt-8 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium text-stone-600 dark:text-zinc-400">
          <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
          <span>גבעתיים והסביבה | אונליין</span>
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
      <main className="w-full max-w-3xl mx-auto px-6 py-8 space-y-12">
        {/* Hero Section */}
        <section className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-amber-100/80 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/50">
            <Sparkles className="w-3.5 h-3.5" />
            <span>שיעורים פרטיים לתלמידי בית ספר</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-zinc-50 leading-tight">
            עדן חדד - שיעורים פרטיים בגובה העיניים.
          </h1>

          <p className="text-lg sm:text-xl text-stone-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
            למידה רגועה, ברורה ובלי לחץ – כדי להבין באמת, לקבל ביטחון ולהתחבר
            לסקרנות הטבעית.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href="tel:054-9451235"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>054-9451235</span>
            </a>
            <a
              href="https://wa.me/972549451235"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium border border-stone-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-stone-800 dark:text-zinc-200 hover:bg-stone-100 dark:hover:bg-zinc-800/80 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>הודעה בוואטסאפ</span>
            </a>
            <a
              href="mailto:edenhadad70@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium border border-stone-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-stone-800 dark:text-zinc-200 hover:bg-stone-100 dark:hover:bg-zinc-800/80 transition-colors"
            >
              <Mail className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>edenhadad70@gmail.com</span>
            </a>
          </div>
        </section>

        <hr className="border-stone-200 dark:border-zinc-800/80" />

        {/* About Me Section */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-stone-900 dark:text-zinc-100 flex items-center gap-2.5">
            <GraduationCap className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>קצת עליי</span>
          </h2>

          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-stone-200/80 dark:border-zinc-800/80 space-y-4 text-base sm:text-lg text-stone-700 dark:text-zinc-300 leading-relaxed">
            <p>
              מתגורר בגבעתיים, בוגר{" "}
              <strong className="font-semibold text-stone-900 dark:text-zinc-100">
                הנדסת תעשייה וניהול מאוניברסיטת בן גוריון
              </strong>
              . איש דאטה לשעבר (מונטרה, שופרסל) שבחר לעבור לחינוך מתוך תשוקה
              אמיתית לתחום.
            </p>
            <p>
              כיום אני גנן, מוביל צהרון ומורה פרטי לתכנות (
              <strong className="font-semibold text-stone-900 dark:text-zinc-100">
                פייתון ו-SQL
              </strong>
              ). אני מגיע עם רקע עשיר בהדרכת ילדים, כולל{" "}
              <strong className="font-semibold text-stone-900 dark:text-zinc-100">
                מוזיאון לונדע
              </strong>
              ,{" "}
              <strong className="font-semibold text-stone-900 dark:text-zinc-100">
                פרויקט פר&quot;ח
              </strong>{" "}
              ויוזמות מדע ורובוטיקה.
            </p>
            <p>
              במקביל, אני מפתח את אפליקציית{" "}
              <strong className="font-semibold text-stone-900 dark:text-zinc-100">
                &apos;חינוך לסקרנות&apos;
              </strong>{" "}
              ומרצה על חלל ותודעה.
            </p>
          </div>
        </section>

        {/* My Approach Section */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-stone-900 dark:text-zinc-100 flex items-center gap-2.5">
            <HeartHandshake className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>הגישה שלי</span>
          </h2>

          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-stone-200/80 dark:border-zinc-800/80 space-y-4 text-base sm:text-lg text-stone-700 dark:text-zinc-300 leading-relaxed">
            <p>
              המון סבלנות, הכלה ויכולת גישור. המטרה היא לא רק לעזור בשיעורי בית,
              אלא לעורר סקרנות טבעית, לפתח כישורי פתרון בעיות, ולחבר את הילדים
              לעולם המדע והלמידה בצורה אותנטית.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-zinc-950/60 border border-stone-200/60 dark:border-zinc-800/60">
                <div className="font-semibold text-stone-900 dark:text-zinc-100 text-sm mb-1 flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>סבלנות והכלה</span>
                </div>
                <p className="text-sm text-stone-600 dark:text-zinc-400">
                  קצב מותאם אישית לכל תלמיד ותלמידה, בלי שיפוטיות.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-zinc-950/60 border border-stone-200/60 dark:border-zinc-800/60">
                <div className="font-semibold text-stone-900 dark:text-zinc-100 text-sm mb-1 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>חשיבה ופתרון בעיות</span>
                </div>
                <p className="text-sm text-stone-600 dark:text-zinc-400">
                  לא רק &quot;לסיים מטלות&quot;, אלא להבין לעומק ולשאול שאלות.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-zinc-950/60 border border-stone-200/60 dark:border-zinc-800/60">
                <div className="font-semibold text-stone-900 dark:text-zinc-100 text-sm mb-1 flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>חיבור לעולם האמיתי</span>
                </div>
                <p className="text-sm text-stone-600 dark:text-zinc-400">
                  מתכנות בפייתון ו-SQL ועד מדע, לוגיקה וסקרנות יומיומית.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-stone-900 dark:text-zinc-100">
            יצירת קשר
          </h2>

          <div className="p-6 rounded-2xl bg-stone-100/80 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <p className="font-medium text-stone-900 dark:text-zinc-100 text-lg">
                מוזמנים לדבר איתי ולהתייעץ בשמחה
              </p>
              <p className="text-sm text-stone-600 dark:text-zinc-400">
                זמין בטלפון, בוואטסאפ או במייל לכל שאלה.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 text-sm sm:text-base">
              <a
                href="tel:054-9451235"
                className="inline-flex items-center gap-2.5 font-medium text-stone-800 dark:text-zinc-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span dir="ltr">054-9451235</span>
              </a>
              <a
                href="mailto:edenhadad70@gmail.com"
                className="inline-flex items-center gap-2.5 font-medium text-stone-800 dark:text-zinc-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span dir="ltr">edenhadad70@gmail.com</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-3xl mx-auto px-6 py-8 text-xs text-stone-500 dark:text-zinc-500 flex items-center justify-between border-t border-stone-200/60 dark:border-zinc-900">
        <span>© {new Date().getFullYear()} עדן חדד</span>
        <span>שיעורים פרטיים בגובה העיניים</span>
      </footer>
    </div>
  );
}
