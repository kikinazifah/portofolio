import Link from "next/link";
import { ReactNode } from "react";
import Reveal from "./Reveal";

export default function About() {
  interface Card {
    title: string;
    badge?: string;
    heading: string;
    sub?: string;
    accent?: ReactNode;
    badgeClass?: string;
    headingClass?: string;
  }

  const cards: Card[] = [
    {
      title: "ROLE",
      badge: "Student",
      heading: "Fullstack Engineer",
      sub: "Junior Developer & Tech Enthusiast",
      badgeClass: "bg-amber-100 text-amber-800 border-amber-300/60",
      accent: null,
    },
    {
      title: "STATUS",
      badge: "Open",
      heading: "Open for Opportunities",
      sub: "Freelance  •  Internship  •  Full-time",
      badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300/60",
      accent: null,
    },
    {
      title: "FOCUS",
      heading: "Web & Mobile UX",
      sub: "Intuitive & fast interfaces",
      accent: <span className="w-2 h-2 rounded-full bg-violet-700" />,
    },
  ];

  return (
    <section className="min-h-screen flex items-center py-20 bg-[#F4EFE2]/70 border-y border-[#EAE4D3]" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal direction="right">
              <div className="inline-flex items-center px-3.5 py-1 rounded-md text-xs font-bold tracking-wider text-amber-800 bg-amber-100/90 border border-amber-300/70 uppercase">
                About Me
              </div>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1D1B] tracking-tight leading-snug">
                I love turning ideas into digital experiences
              </h2>
            </Reveal>

            <Reveal direction="right" delay={200}>
              <p className="text-[#635E59] text-sm sm:text-base leading-relaxed">
                Saya tertarik pada pengembangan aplikasi web dan mobile,
                dengan pengalaman di sisi front-end maupun back-end. Saat ini,
                saya lebih banyak mengeksplorasi front-end dan bagaimana menciptakan
                tampilan yang rapi, responsif, dan nyaman digunakan.
              </p>
            </Reveal>

            <Reveal direction="right" delay={300}>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#1F1D1B] bg-white hover:bg-amber-50 border border-[#EAE4D3] hover:border-amber-300 shadow-sm hover:-translate-y-0.5 transition-all"
              >
                <span>Learn More About Me</span>
                <svg
                  className="w-3.5 h-3.5 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </Link>
            </Reveal>
          </div>

          {/* Right Stats Grid — 3 kolom, tinggi sama */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {cards.map((card, i) => (
              <Reveal key={i} delay={i * 120} className="h-full">
                <div className="h-full p-5 sm:p-6 rounded-2xl flex flex-col justify-start space-y-3 bg-white border border-[#EAE4D3] shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-800/10 hover:border-amber-300">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold tracking-wider text-[#8C857D] uppercase">
                      {card.title}
                    </span>
                    {card.badge && (
                      <span
                        className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${card.badgeClass}`}
                      >
                        {card.badge}
                      </span>
                    )}
                    {card.accent}
                  </div>

                  <div>
                    <div
                      className={`text-base sm:text-lg font-bold font-mono tracking-tight leading-snug ${card.headingClass || "text-[#1F1D1B]"
                        }`}
                    >
                      {card.heading}
                    </div>
                    {card.sub && (
                      <p className="text-[11px] text-[#635E59] mt-1">
                        {card.sub}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}