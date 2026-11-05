"use client";

import { useEffect, useState } from "react";
import {
  Sun,
  Moon,
  Phone,
  MapPin,
  Compass,
  GraduationCap,
  MessageCircle,
  Calculator,
  Atom,
  Binary,
  Languages,
  FlaskConical,
  Wallet,
  ShieldCheck,
  CalendarClock,
  Heart,
  Home,
  Laptop,
  Car,
  ChevronDown,
} from "lucide-react";

const PHONE_DISPLAY = "054-9451235";
const PHONE_HREF = "tel:+972549451235";
const WHATSAPP_MESSAGE =
  "היי עדן, ראיתי את הדף שלך. אני מחפש/ת שיעורים פרטיים עבור הילד/ה שלי.\nכיתה: \nמקצוע: \nאשמח לשיחת היכרות קצרה.";
const WHATSAPP_HREF = `https://wa.me/972549451235?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// To show your photo: save it as /public/eden.jpg. Until then, a monogram is shown.
const PHOTO_SRC = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/eden.jpg?v=2`;

const card =
  "rounded-xl bg-white dark:bg-zinc-900/70 border border-stone-200/80 dark:border-zinc-800/80";
const h2Class =
  "text-xl sm:text-2xl font-semibold text-stone-900 dark:text-zinc-100 flex items-center gap-2";
const iconAccent = "text-amber-600 dark:text-amber-400 shrink-0";

function WhatsAppButton({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400 transition-colors text-base ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>{label}</span>
    </a>
  );
}

function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={PHONE_HREF}
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium border border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-stone-800 dark:text-zinc-200 hover:bg-stone-100 dark:hover:bg-zinc-800 transition-colors text-base ${className}`}
    >
      <Phone className="w-4 h-4" />
      <span dir="ltr" className="whitespace-nowrap">{PHONE_DISPLAY}</span>
    </a>
  );
}

function Portrait({ className = "" }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`shrink-0 overflow-hidden border border-stone-200 dark:border-zinc-800 bg-amber-100 dark:bg-amber-950/60 items-center justify-center ${className.includes("hidden") ? "" : "flex"} ${className}`}>
      {failed ? (
        <span className="text-3xl md:text-6xl font-bold text-amber-700 dark:text-amber-300">
          ע
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={PHOTO_SRC}
          alt="עדן חדד, מורה פרטי"
          className="w-full h-full object-cover object-[50%_25%]"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

const subjects = [
  { icon: Calculator, name: "חשבון ומתמטיקה", level: "כיתות ג'–ו'" },
  { icon: Calculator, name: "מתמטיקה", level: "חטיבת ביניים (ז'–ט')" },
  { icon: Atom, name: "פיזיקה", level: "חטיבה ותיכון" },
  { icon: FlaskConical, name: "מדעים", level: "חטיבת ביניים" },
  { icon: Languages, name: "אנגלית", level: "לפי תיאום" },
];

const fitsChild = [
  "מבין בכיתה, אבל נתקע ברגע שמשנים מילה או ניסוח בשאלה.",
  'הרים ידיים מראש ומרגיש ש"הוא פשוט לא מסוגל" או שזה "לא בשבילו".',
  "נבהל מחומר חדש או שאלות מילוליות ומנחש במקום להבין.",
  "איבד את הביטחון, וכל ישיבה על שיעורי בית הופכת למריבה ותסכול.",
  "עובר לחטיבה או לתיכון ומרגיש שהקצב והעומס השתנו מהר מדי.",
  "צריך מנטור סבלני בגובה העיניים שיבנה איתו הצלחות קטנות מאפס ויחזיר לו את האמונה בעצמו.",
];

const steps = [
  {
    title: "כותבים לי או מתקשרים",
    text: "שיחת היכרות קצרה, חינם ובלי מחויבות, כדי להבין מה הילד צריך.",
  },
  {
    title: "שיעור ראשון",
    text: "ההורה מוזמן להיות נוכח בשיעור הראשון, ובהמשך לפי רצונו.",
  },
  {
    title: "ממשיכים בקצב שמתאים לילד",
    text: "זמנים גמישים בתיאום מראש, בבית שלי, אונליין או אצלכם.",
  },
];

const faqs = [
  {
    q: "כמה עולה שיעור?",
    a: (
      <>
        <bdi dir="ltr">120–150 ₪</bdi> לשיעור של 60 דקות, בבית שלי בגבעתיים או אונליין. הגעה לבית התלמיד כרוכה בתוספת לפי מרחק, בתיאום מראש.
      </>
    ),
  },
  {
    q: "האם חייבים להתחייב מראש?",
    a: "לא. מתחילים בשיחת היכרות קצרה וחינם, בלי מחויבות להמשך.",
  },
  {
    q: "האם אפשר להיות נוכח בשיעור?",
    a: "בוודאי. ההורה מוזמן להיות נוכח בשיעור הראשון, ובהמשך לפי רצונו.",
  },
  {
    q: "איזה גילאים ומקצועות?",
    a: "חשבון ומתמטיקה מכיתה ג' ועד חטיבת הביניים, פיזיקה בחטיבה ובתיכון, מדעים בחטיבה ואנגלית.",
  },
  {
    q: "מתי אפשר לקבוע שיעור?",
    a: "הזמנים גמישים ונקבעים בתיאום מראש. כתבו לי ונמצא שעה שמתאימה.",
  },
  {
    q: "אונליין או פרונטלי?",
    a: "שתי האפשרויות פתוחות: בביתי בגבעתיים, אונליין, או אצלכם בגבעתיים ורמת גן.",
  },
];

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
      <main className="w-full max-w-4xl mx-auto px-6 pt-8 pb-28 md:pb-10 space-y-12">
        {/* Hero */}
        <section className="flex items-start justify-between gap-10">
          <div className="space-y-4 min-w-0 flex-1">
            {/* Mobile intro row: small portrait + name */}
            <div className="flex items-center gap-3 md:hidden">
              <Portrait className="w-16 h-16 rounded-full" />
              <div>
                <div className="font-semibold text-stone-900 dark:text-zinc-100 text-lg leading-tight">
                  עדן חדד
                </div>
                <div className="text-sm text-stone-600 dark:text-zinc-400">
                  מורה פרטי · גבעתיים ואונליין
                </div>
              </div>
            </div>

            <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-amber-100/80 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/50">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>גבעתיים | רמת גן | אונליין</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 dark:text-zinc-50 leading-tight">
              שיעורים פרטיים שגורמים לילד להבין, לא רק לשנן.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 dark:text-zinc-400 leading-relaxed">
              אני עדן חדד, מורה פרטי לחשבון ומתמטיקה, פיזיקה, מדעים ואנגלית. אני עוזר לילד להבין באמת את החומר, להחזיר לו את הביטחון וללמוד לחשוב בעצמו.
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <WhatsAppButton label="שלחו הודעה בוואטסאפ" />
                <CallButton />
              </div>
              <p className="text-sm text-stone-600 dark:text-zinc-400">
                שיחת היכרות קצרה: חינם ובלי מחויבות. <bdi dir="ltr">120–150 ₪</bdi> לשיעור של 60 דקות.
              </p>
            </div>
          </div>

          <Portrait className="hidden md:flex w-48 h-48 lg:w-56 lg:h-56 rounded-2xl" />
        </section>
        <hr className="border-stone-200 dark:border-zinc-800/80" />

        {/* Fits your child */}
        <section className="space-y-4">
          <h2 className={h2Class}>
            <Heart className={`w-5 h-5 ${iconAccent}`} />
            <span>מתאים לילד ש...</span>
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {fitsChild.map((item) => (
              <li
                key={item}
                className={`${card} p-4 text-sm sm:text-base text-stone-700 dark:text-zinc-300 leading-snug`}
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Subjects */}
        <section className="space-y-4">
          <h2 className={h2Class}>
            <GraduationCap className={`w-5 h-5 ${iconAccent}`} />
            <span>מה אני מלמד</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {subjects.map(({ icon: Icon, name, level }) => (
              <div
                key={name + level}
                className={`${card} p-4 flex items-center gap-3 sm:last:col-span-2`}
              >
                <Icon className={`w-5 h-5 ${iconAccent}`} />
                <div>
                  <div className="font-semibold text-stone-900 dark:text-zinc-100 text-base">
                    {name}
                  </div>
                  <div className="text-sm text-stone-600 dark:text-zinc-400">
                    {level}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-stone-500 dark:text-zinc-500 flex items-center gap-2">
            <Binary className="w-4 h-4 shrink-0" />
            <span>
              לנוער שמתעניין, אפשר גם יסודות תכנות בפייתון ו-SQL, בתיאום.
            </span>
          </p>
        </section>

        {/* Approach */}
        <section className="space-y-4">
          <h2 className={h2Class}>
            <Compass className={`w-5 h-5 ${iconAccent}`} />
            <span>איך אני מלמד?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                t: "לחשוב, לא לשנן",
                d: "מבינים את ההיגיון שמאחורי התרגיל, כדי שלא ניתקע ברגע ששינו מילה במבחן.",
              },
              {
                t: "פירוק בעיות מורכבות",
                d: "לומדים לגשת לשאלה חדשה בצעדים פשוטים, בלי פחד ובלי להישען על ניחושים.",
              },
              {
                t: "סבלנות ובגובה העיניים",
                d: "בלי לחץ ובלי שיפוטיות. יוצרים מרחב שבו מותר לטעות ולפתח ביטחון עצמי.",
              },
            ].map((x) => (
              <div key={x.t} className={`${card} p-4`}>
                <div className="font-semibold text-stone-900 dark:text-zinc-100 text-base mb-1">
                  {x.t}
                </div>
                <p className="text-sm sm:text-base text-stone-600 dark:text-zinc-400 leading-snug">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* First lesson steps */}
        <section className="space-y-4">
          <h2 className={h2Class}>
            <CalendarClock className={`w-5 h-5 ${iconAccent}`} />
            <span>איך מתחילים?</span>
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {steps.map((s, i) => (
              <li key={s.title} className={`${card} p-4`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 text-sm font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="font-semibold text-stone-900 dark:text-zinc-100 text-base">
                    {s.title}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-stone-600 dark:text-zinc-400 leading-snug">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
          <WhatsAppButton label="רוצים לקבוע שיחת היכרות? כתבו לי" />
        </section>

        {/* About */}
        <section className="space-y-4">
          <h2 className={h2Class}>
            <GraduationCap className={`w-5 h-5 ${iconAccent}`} />
            <span>קצת עליי</span>
          </h2>
          <div
            className={`${card} p-5 space-y-3 text-base text-stone-700 dark:text-zinc-300 leading-relaxed`}
          >
            <p>
              שלום, אני עדן. גר בגבעתיים, בוגר{" "}
              <strong>הנדסת תעשייה וניהול מאוניברסיטת בן גוריון</strong> ועובד בהייטק.
            </p>
            <p>
              לצד ההייטק יש לי ניסיון אמיתי עם ילדים: עבדתי כגנן בגן ילדים וכמוביל צהרון, והדרכתי ילדים במסגרות שונות, ביניהן מוזיאון לונדע, פרויקט פר&quot;ח ומיזמי מדע ורובוטיקה.
            </p>
            <p>
              מהעבודה עם ילדים למדתי שבדרך כלל הקושי במתמטיקה הוא לא חוסר יכולת, אלא פחד לטעות. כמהנדס אני רגיל לפרק בעיה מורכבת לצעדים קטנים, וכמי שעבד עם ילדים אני עושה את זה בקצב שלהם, בסבלנות.
            </p>
          </div>
        </section>

        {/* Pricing and formats */}
        <section className="space-y-4">
          <h2 className={h2Class}>
            <Wallet className={`w-5 h-5 ${iconAccent}`} />
            <span>מחיר ואפשרויות הלימוד</span>
          </h2>
          <div className={`${card} p-5 space-y-4`}>
            <div>
              <div className="text-2xl font-bold text-stone-900 dark:text-zinc-50">
                <bdi dir="ltr">120–150 ₪</bdi>
                <span className="text-base font-medium text-stone-600 dark:text-zinc-400">
                  {" "}
                  לשיעור של 60 דקות
                </span>
              </div>
              <div className="text-sm text-stone-600 dark:text-zinc-400">
                שיחת היכרות ראשונה: חינם ובלי מחויבות.
              </div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm sm:text-base text-stone-700 dark:text-zinc-300">
              <li className="flex items-start gap-2">
                <Home className={`w-4 h-4 mt-1 ${iconAccent}`} />
                <span>
                  <strong>בביתי בגבעתיים</strong>
                  <br />
                  ללא תוספת
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Laptop className={`w-4 h-4 mt-1 ${iconAccent}`} />
                <span>
                  <strong>אונליין</strong>
                  <br />
                  ללא תוספת
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Car className={`w-4 h-4 mt-1 ${iconAccent}`} />
                <span>
                  <strong>אצלכם (גבעתיים ורמת גן)</strong>
                  <br />
                  תוספת לפי מרחק, בתיאום
                </span>
              </li>
            </ul>
            <p className="text-sm text-stone-600 dark:text-zinc-400 flex items-start gap-2">
              <ShieldCheck className={`w-4 h-4 mt-0.5 ${iconAccent}`} />
              <span>
                ההורה מוזמן להיות נוכח בשיעור הראשון, ובהמשך לפי רצונו.
              </span>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className={h2Class}>
            <span>שאלות נפוצות</span>
          </h2>
          <div className="space-y-2">
            {faqs.map((f) => (
              <details key={f.q} className={`${card} group p-4`}>
                <summary className="cursor-pointer list-none flex items-center justify-between gap-3 font-medium text-stone-900 dark:text-zinc-100 text-base">
                  <span>{f.q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="pt-2 text-sm sm:text-base text-stone-600 dark:text-zinc-400 leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="p-6 rounded-xl bg-stone-100/90 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 space-y-4">
          <div>
            <div className="font-semibold text-stone-900 dark:text-zinc-100 text-xl">
              בואו נכיר, בלי מחויבות
            </div>
            <div className="text-sm sm:text-base text-stone-600 dark:text-zinc-400">
              ספרו לי על הילד ועל המקצוע, ונמצא יחד מה מתאים.
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <WhatsAppButton label="שלחו הודעה בוואטסאפ" />
            <CallButton />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-4xl mx-auto px-6 py-6 mb-16 md:mb-0 text-sm text-stone-500 dark:text-zinc-500 flex items-center justify-between border-t border-stone-200/60 dark:border-zinc-900">
        <span>© {new Date().getFullYear()} עדן חדד</span>
        <button
          onClick={toggleTheme}
          aria-label="החלפת ערכת נושא"
          className="p-2 rounded-full border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-stone-700 dark:text-zinc-300 hover:bg-stone-100 dark:hover:bg-zinc-800 transition-colors"
        >
          {mounted && dark ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </button>
      </footer>

      {/* Sticky mobile contact bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 p-3 flex gap-2 bg-white/95 dark:bg-zinc-950/95 backdrop-blur border-t border-stone-200 dark:border-zinc-800">
        <WhatsAppButton label="וואטסאפ" className="flex-1 !py-2.5 !px-3 !text-sm" />
        <CallButton className="flex-1 !py-2.5 !px-3 !text-sm" />
      </div>
    </div>
  );
}
