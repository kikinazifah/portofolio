"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      num: "01",
      title: "FitLife.id",
      desc: "Pengembangan platform web & mobile FitLife.id dengan tampilan yang modern, bersih, dan responsif untuk memberikan pengalaman yang nyaman dalam mengakses informasi dan fitur seputar pola hidup sehat.",
      link: "https://fitlife.my.id/",
      image: "/web.png",
    },
  ];

  const stack = [
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "React",
      icon: <SiReact />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },
  ];

  return (
    <section
      className="min-h-screen flex items-center py-24 bg-[#F4EFE2]/70 border-t border-[#EAE4D3]"
      id="projects"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <Reveal>
            <div className="inline-flex items-center px-3.5 py-1 rounded-md text-xs font-bold tracking-wider text-amber-800 bg-amber-100/90 border border-amber-300/70 uppercase">
              Featured Project
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1D1B] tracking-tight">
              Projects
            </h2>
          </Reveal>
        </div>

        {/* Project */}
        <div className="max-w-4xl mx-auto">
          {projects.map((proj, i) => (
            <Reveal key={proj.num} delay={i * 150}>
              <article className="rounded-2xl overflow-hidden flex flex-col md:flex-row group bg-white border border-[#EAE4D3] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-stone-800/15 hover:border-amber-300">

                {/* Project Image */}
                <div className="relative h-64 md:h-auto md:w-1/2 min-h-[320px] overflow-hidden bg-[#E9E4D8]">
                  <Image
                    src="/web.png"
                    alt={`${proj.title} project preview`}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />

                  {/* Number */}
                  <span className="absolute top-4 left-4 text-xs font-mono text-stone-700 bg-white/90 border border-stone-200 px-2.5 py-1 rounded-md shadow-sm z-10">
                    {proj.num}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7 md:p-8 md:w-1/2 flex flex-col justify-between gap-7">

                  <div className="space-y-3">
                    <span className="text-[11px] font-mono font-medium tracking-wide text-emerald-700">
                      WEB & MOBILE PLATFORM
                    </span>

                    <h3 className="text-2xl font-bold text-[#1F1D1B] group-hover:text-amber-700 transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-sm text-[#635E59] leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>

                  <div className="space-y-5">

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2">
                      {stack.map((tech) => (
                        <span
                          key={tech.name}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-stone-50 border border-[#EAE4D3] text-[11px] font-medium text-[#635E59]"
                        >
                          <span className="text-sm text-[#1F1D1B]">
                            {tech.icon}
                          </span>
                          {tech.name}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <div className="pt-4 border-t border-[#EAE4D3]">
                      <Link
                        href="https://fitlife.my.id/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors"
                      >
                        <span>View Project</span>

                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.3"
                          viewBox="0 0 24 24"
                        >
                          <line x1="7" x2="17" y1="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </Link>
                    </div>

                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}