import Reveal from "./Reveal";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiLaravel,
  SiFlutter,
  SiVercel,
  SiGithub,
  SiPostman
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "HTML5",
      bg: "bg-orange-100/70 border-orange-200/80",
      color: "text-orange-600",
      icon: <SiHtml5 />,
    },
    {
      name: "CSS3",
      bg: "bg-blue-100/70 border-blue-200/80",
      color: "text-blue-600",
      icon: <SiCss />,
    },
    {
      name: "JavaScript",
      bg: "bg-yellow-100/70 border-yellow-300/80",
      color: "text-yellow-500",
      icon: <SiJavascript />,
    },
    {
      name: "TypeScript",
      bg: "bg-sky-100/70 border-sky-200/80",
      color: "text-sky-600",
      icon: <SiTypescript />,
    },
    {
      name: "React.js",
      bg: "bg-cyan-100/70 border-cyan-200/80",
      color: "text-cyan-500",
      icon: <SiReact />,
    },
    {
      name: "Next.js",
      bg: "bg-stone-100 border-stone-200/90",
      color: "text-black",
      icon: <SiNextdotjs />,
    },
    {
      name: "Node.js",
      bg: "bg-emerald-100/70 border-emerald-200/80",
      color: "text-green-600",
      icon: <SiNodedotjs />,
    },
    {
      name: "Tailwind CSS",
      bg: "bg-cyan-100/70 border-cyan-200/80",
      color: "text-cyan-500",
      icon: <SiTailwindcss />,
    },
    {
      name: "Git",
      bg: "bg-orange-100/70 border-orange-200/80",
      color: "text-orange-600",
      icon: <SiGit />,
    },
    {
      name: "Laravel",
      bg: "bg-rose-100/70 border-rose-200/80",
      color: "text-red-500",
      icon: <SiLaravel />,
    },
    {
      name: "Flutter",
      bg: "bg-sky-100/70 border-sky-200/80",
      color: "text-sky-500",
      icon: <SiFlutter />,
    },
    {
      name: "Vercel",
      bg: "bg-stone-100 border-stone-200/90",
      color: "text-black",
      icon: <SiVercel />,
    },
    {
      name: "GitHub",
      bg: "bg-stone-100 border-stone-200/90",
      color: "text-[#181717]",
      icon: <SiGithub />,
    },
    {
      name: "Postman",
      bg: "bg-orange-100/70 border-orange-200/80",
      color: "text-orange-600",
      icon: <SiPostman />,
    },
  ];
  return (
    <section className="min-h-screen flex flex-col justify-center py-24 max-w-6xl mx-auto px-6" id="skills">
      <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
        <Reveal>
          <div className="inline-flex items-center px-3.5 py-1 rounded-md text-xs font-bold tracking-wider text-amber-800 bg-amber-100/90 border border-amber-300/70 uppercase">
            Ecosystem &amp; Frameworks
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1F1D1B] tracking-tight">
            Tech Stack &amp; Tools
          </h2>
        </Reveal>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {skills.map((skill, i) => (
          <Reveal key={skill.name} delay={i * 50}>
            <div className="py-2.5 px-3 rounded-xl flex items-center gap-2.5 bg-white border border-[#EAE4D3] shadow-sm cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-stone-800/10 hover:border-amber-300">
              <span
                className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md ${skill.bg} ${skill.color}`}
              >
                <span className="text-[18px]">
                  {skill.icon}
                </span>
              </span>
              <span className="text-xs font-semibold text-[#1F1D1B] group-hover:text-amber-700 transition-colors">
                {skill.name}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}