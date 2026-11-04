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
  Lightbulb,
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
            <span>שיעורים פרטיים לתלמידי בית ספר | מתמטיקה, מדעים ותכנות (פייתון ו-SQL)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-zinc-50 leading-tight">
            עדן חדד - שיעורים פרטיים בגובה העיניים.
          </h1>

          <p className="text-lg sm:text-xl text-stone-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
            המטרה שלי היא לא לפתור לילד את שיעורי הבית – אלא ללמד אותו{" "}
            <strong className="font-semibold text-stone-900 dark:text-zinc-100">
              לחשוב בעצמו
            </strong>
            , להבין את ההיגיון מאחורי החומר, ולהפסיק לענות על שאלות בצורה עיוורת.
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

        {/* My Approach Section - Put upfront for parents */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-stone-900 dark:text-zinc-100 flex items-center gap-2.5">
            <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>הגישה שלי: לחשוב לבד, לא לדקלם פתרונות</span>
          </h2>

          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-stone-200/80 dark:border-zinc-800/80 space-y-4 text-base sm:text-lg text-stone-700 dark:text-zinc-300 leading-relaxed">
            <p>
              הרבה ילדים לומדים לעבוד &quot;על אוטומט&quot; – להציב בנוסחה בלי
              להבין למה, או לנחש איזו תשובה המורה רוצה לשמוע. ברגע שמשנים מילה
              אחת בשאלה במבחן, הם נתקעים.
            </p>
            <p>
              בשיעורים שלנו אנחנו עובדים אחרת: עם{" "}
              <strong className="font-semibold text-stone-900 dark:text-zinc-100">
                המון סבלנות, הכלה ויכולת גישור
              </strong>
              , אנחנו עוצרים להבין את השאלה, מפרקים בעיות מורכבות לצעדים פשוטים,
              ומפתחים סקרנות טבעית וביטחון לחשוב עצמאית.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-zinc-950/60 border border-stone-200/60 dark:border-zinc-800/60">
                <div className="font-semibold text-stone-900 dark:text-zinc-100 text-sm mb-1 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>הבנה במקום שינון</span>
                </div>
                <p className="text-sm text-stone-600 dark:text-zinc-400">
                  שואלים &quot;למה?&quot; ומבינים את ההיגיון, במקום להציב בנוסחה
                  בצורה עיוורת.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-zinc-950/60 border border-stone-200/60 dark:border-zinc-800/60">
                <div className="font-semibold text-stone-900 dark:text-zinc-100 text-sm mb-1 flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>סבלנות וביטחון עצמי</span>
                </div>
                <p className="text-sm text-stone-600 dark:text-zinc-400">
                  סביבה רגועה שבה מותר לטעות, לשאול ולהתקדם בקצב של הילד.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-zinc-950/60 border border-stone-200/60 dark:border-zinc-800/60">
                <div className="font-semibold text-stone-900 dark:text-zinc-100 text-sm mb-1 flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>כלים לפתרון בעיות</span>
                </div>
                <p className="text-sm text-stone-600 dark:text-zinc-400">
                  איך לגשת לשאלה חדשה לבד – במתמטיקה, במדעים או בתכנות (פייתון
                  ו-SQL).
                </p>
              </div>
            </div>
          </div>
        </section>

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
              </strong>{" "}
              ואיש דאטה בהייטק.
            </p>
            <p>
              מתוך אהבה אמיתית לעולם החינוך, לקחתי פסק זמן מההייטק כדי לעבוד עם
              ילדים בשטח – כגנן וכמוביל צהרון, לצד ניסיון עשיר בהדרכת ילדים
              במוזיאון לונדע, בפרויקט פר&quot;ח וביוזמות מדע ורובוטיקה.
            </p>
            <p>
              כיום חזרתי להייטק, ובמקביל אני מלמד שיעורים פרטיים לתלמידי בית ספר
              (כולל תכנות ב-
              <strong className="font-semibold text-stone-900 dark:text-zinc-100">
                פייתון ו-SQL
              </strong>
              ). השילוב בין שני העולמות מאפשר לי להביא לשיעור גם חשיבה אנליטית
              ומסודרת – וגם את הרגישות, הסבלנות והיכולת לדבר עם כל ילד בדיוק
              בגובה העיניים.
            </p>
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
                שיחת היכרות קצרה בטלפון או בוואטסאפ כדי להבין מה הילד צריך.
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
