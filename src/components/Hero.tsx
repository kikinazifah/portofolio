import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiFlutter,
  SiLaravel,
  SiTailwindcss,
  SiNodedotjs,
  SiGithub,
} from "react-icons/si";

export default function Hero() {
  const techStack = [
    {
      name: "React.js",
      colorClass: "text-cyan-600 hover:border-cyan-300",
      icon: <SiReact className="w-5 h-5" />,
    },
    {
      name: "Next.js",
      colorClass: "text-stone-800 hover:border-stone-400",
      icon: <SiNextdotjs className="w-5 h-5" />,
    },
    {
      name: "TypeScript",
      colorClass: "text-sky-600 hover:border-sky-300",
      icon: <SiTypescript className="w-5 h-5" />,
    },
    {
      name: "Flutter",
      colorClass: "text-sky-500 hover:border-sky-300",
      icon: <SiFlutter className="w-5 h-5" />,
    },
    {
      name: "Laravel",
      colorClass: "text-red-500 hover:border-red-300",
      icon: <SiLaravel className="w-5 h-5" />,
    },
    {
      name: "Tailwind CSS",
      colorClass: "text-cyan-500 hover:border-cyan-300",
      icon: <SiTailwindcss className="w-5 h-5" />,
    },
    {
      name: "Node.js",
      colorClass: "text-green-600 hover:border-green-300",
      icon: <SiNodedotjs className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      colorClass: "text-stone-800 hover:border-stone-400",
      icon: <SiGithub className="w-5 h-5" />,
    },
  ];

  return (
    <section className="min-h-screen flex items-center max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-0 overflow-visible" id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Hero Text */}
        <div className="lg:col-span-6 space-y-6">
          <Reveal direction="right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-amber-800 bg-amber-100/90 border border-amber-300/70 shadow-sm hover:shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-shadow duration-500">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              STUDENT &amp; FULLSTACK DEVELOPER
            </div>
          </Reveal>

          <Reveal direction="right" delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1F1D1B] tracking-tight leading-[1.12]">
              Turning Ideas into
              <br />
              <span className="text-gradient">
                Seamless Digital
              </span>
              <br />
              Experiences.
            </h1>
          </Reveal>

          <Reveal direction="right" delay={300}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#1F1D1B] hover:bg-neutral-800 shadow-md shadow-stone-800/15 hover:shadow-stone-800/25 hover:-translate-y-0.5 transition-all duration-200"
              >
                Projects
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" viewBox="0 0 24 24">
                  <line x1="7" x2="17" y1="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
              <a
                href="/CV ATS - Fakhitah Nazifah A.pdf"
                download="CV ATS - Fakhitah Nazifah A.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#1F1D1B] bg-white hover:bg-amber-50/60 border border-[#EAE4D3] hover:border-amber-300 shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                CV
                <svg
                  className="w-4 h-4 text-[#635E59]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              </a>
            </div>
          </Reveal>

          <Reveal direction="right" delay={400}>
            <div className="pt-8 space-y-3">
              <p className="text-[11px] font-bold tracking-widest text-[#8C857D] uppercase">
                Tech Stack &amp; Tools
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {techStack.map((tech, i) => (
                  <div
                    key={tech.name}
                    style={{ transitionDelay: `${i * 40}ms` }}
                    className={`w-10 h-10 rounded-xl bg-white border border-[#EAE4D3] shadow-sm flex items-center justify-center hover:scale-110 hover:shadow-md transition-all ${tech.colorClass}`}
                    title={tech.name}
                  >
                    {tech.icon}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Hero Visual (Large Photo & Code Card) */}
        <div className="lg:col-span-6 relative flex justify-center items-center py-6 sm:py-10">
          <Reveal direction="left" delay={200} className="w-full flex justify-center">
            <div className="relative w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[560px] xl:max-w-[600px] h-[500px] sm:h-[580px] lg:h-[650px] xl:h-[680px] flex items-end justify-center">

              {/* Dot Grid Pattern (Top-Right) */}
              <div className="absolute top-2 right-4 sm:right-8 grid grid-cols-6 gap-2.5 opacity-30 pointer-events-none z-0">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-stone-500/60" />
                ))}
              </div>

              {/* Hand-drawn swirl arrow on left */}
              <div className="absolute bottom-32 -left-3 sm:-left-8 z-20 pointer-events-none hidden sm:block">
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20 text-stone-500/70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 60 60"
                >
                  <path d="M 12,48 C 6,34 16,22 26,28 C 32,32 29,42 22,40 C 15,38 18,24 44,16" />
                  <path d="M 34,13 L 45,16 L 39,26" />
                </svg>
              </div>

              {/* Backdrop Circle (Warna pastel lilac / purple / amber seperti sebelumnya) */}
              <div className="absolute top-8 sm:top-10 left-1/2 -translate-x-1/2 w-[330px] h-[330px] sm:w-[410px] sm:h-[410px] lg:w-[480px] lg:h-[480px] xl:w-[520px] xl:h-[520px] rounded-full bg-gradient-to-tr from-violet-300/80 via-purple-200/70 to-amber-200/90 shadow-[0_0_70px_rgba(167,139,250,0.5)] z-0" />

              {/* Big Transparent Photo of Hita */}
              <div className="relative z-10 w-full h-full flex items-end justify-center overflow-visible">
                <Image
                  src="/gemes.png"
                  alt="Fakhitah Nazifah"
                  fill
                  sizes="(max-width: 640px) 420px, (max-width: 1024px) 500px, 600px"
                  className="object-contain object-bottom scale-105 select-none pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.2)]"
                  priority
                />
              </div>

              {/* Code Snippet Box (Ukuran pas dengan konten & header seperti sebelumnya) */}
              {/* Code Snippet Box */}
              <aside
                aria-label="Interactive Code Snippet"
                className="
  code-card-glow
  absolute
  bottom-[-5px]
  right-[-5px]

  w-[285px]
  scale-[0.72]
  origin-bottom-right

  sm:bottom-10
  sm:-right-27
  sm:w-[285px]
  sm:scale-100

  lg:w-[320px]

  rounded-2xl
  bg-[#0d0f14]
  shadow-[0_20px_50px_rgba(0,0,0,0.35)]
  border border-stone-700/60
  overflow-hidden
  text-[10px]
  font-mono
  z-30
"
              >
                {/* Window Header */}
                <div className="flex items-center justify-between px-2.5 py-2 border-b border-stone-700/60 bg-[#111319]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />

                    <span className="ml-3 text-[9px] text-stone-400 font-semibold">
                      engineer.config.ts
                    </span>
                  </div>

                  <div className="px-2 py-0.5 rounded-md bg-[#171a21] text-cyan-400 text-[8px] font-semibold">
                    LIVE STATE
                  </div>
                </div>

                {/* Code */}
                <div className="px-3.5 py-3 text-[8px] sm:text-[9px] leading-relaxed">

                  <div className="code-line">
                    <span className="text-purple-400">import</span>{" "}
                    {"{ "}
                    <span className="text-cyan-300">FullStackEngineer</span>
                    {" } "}
                    <span className="text-purple-400">from</span>{" "}
                    <span className="text-emerald-300">
                      &apos;@hita/core&apos;
                    </span>;
                  </div>

                  <div className="mt-2 code-line">
                    <span className="text-purple-400">export const</span>{" "}
                    <span className="text-cyan-300">Hita</span>{" "}
                    <span className="text-purple-400">= new</span>{" "}
                    <span className="text-cyan-300">FullStackEngineer</span>
                    {"({"}
                  </div>
                  <div className="code-line pl-3.5">
                    <span className="text-stone-500">name:</span>{" "}
                    <span className="text-amber-300">
                      &apos;Fakhitah Nazifah&apos;
                    </span>,
                  </div>
                  <div className="code-line pl-5">
                    <span className="text-stone-500">role:</span>{" "}
                    <span className="text-amber-300">
                      &apos;Software Engineer&apos;
                    </span>,
                  </div>
                  <div className="code-line pl-5">
                    <span className="text-stone-500">focus:</span> [
                    <span className="text-emerald-300">
                      &apos;Frontend Modern&apos;
                    </span>
                    ,{" "}
                    <span className="text-emerald-300">
                      &apos;Clean UI&apos;
                    </span>
                    ,{" "}
                    <span className="text-emerald-300">
                      &apos;Fast UX&apos;
                    </span>
                    ],
                  </div>
                  <div className="code-line pl-5">
                    <span className="text-stone-500">ecosystem:</span> [
                    <span className="text-emerald-300">&apos;React&apos;</span>
                    ,{" "}
                    <span className="text-emerald-300">&apos;Next.js&apos;</span>
                    ,{" "}
                    <span className="text-rose-300">&apos;Laravel&apos;</span>
                    ,{" "}
                    <span className="text-emerald-300">&apos;Flutter&apos;</span>
                    ],
                  </div>
                  <div className="code-line pl-5">
                    <span className="text-stone-500">status:</span>{" "}
                    <span className="text-amber-300">
                      &apos;ready_to_deploy&apos;
                    </span>
                    ,
                  </div>
                  <div className="code-line">
                    {"});"}
                    <span className="typing-cursor text-emerald-400" />
                  </div>
                </div>

                {/* Compile Status */}
                <div className="mx-2 mb-2 px-2.5 py-2 rounded-lg bg-[#171920] border border-stone-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-cyan-400 font-semibold text-[8px]">
                      Compiled successfully in 42ms
                    </span>
                  </div>
                  <span className="text-stone-500 text-[8px]">
                    v2.5.0
                  </span>
                </div>
              </aside>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}