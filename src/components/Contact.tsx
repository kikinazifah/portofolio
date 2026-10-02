"use client";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center py-24 max-w-6xl mx-auto px-6 scroll-mt-20" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: CTA & Details */}
        <div className="lg:col-span-7 space-y-6">
          <Reveal direction="right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider text-amber-800 bg-amber-100/90 border border-amber-300/70 uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Let&apos;s Work Together
            </div>
          </Reveal>

          <Reveal direction="right" delay={100}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1D1B] tracking-tight leading-tight">
              Mari terhubung dan Bangun sesuatu yang luar biasa.
            </h2>
          </Reveal>

          <Reveal direction="right" delay={200}>
            <p className="text-base text-[#635E59] leading-relaxed max-w-xl">
              Hubungi saya melalui akun media sosial atau email. Saat ini saya
              terbuka untuk diskusi project, kolaborasi freelance, maupun
              peluang kerja full-time.
            </p>
          </Reveal>
        </div>

        {/* Right Column: Contact Details Card */}
        <div className="lg:col-span-5">
          <Reveal direction="left" delay={150}>
            <div className="bg-white/80 backdrop-blur-sm border border-[#EAE4D3] rounded-2xl p-7 space-y-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-stone-800/15 hover:border-amber-300">
              {/* Email */}
              <div>
                <span className="text-[11px] font-bold tracking-widest text-[#8C857D] uppercase">
                  Email
                </span>
                <div className="mt-2">
                  <a
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF7EE] border border-[#EAE4D3] text-sm text-[#1F1D1B] hover:text-amber-700 hover:border-amber-300 transition-all font-medium group"
                    href="mailto:nazifakhitah@gmail.com"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 group-hover:bg-amber-200 transition-colors shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <span className="truncate">nazifakhitah@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="pt-3 border-t border-[#EAE4D3]">
                <span className="text-[11px] font-bold tracking-widest text-[#8C857D] uppercase">
                  LinkedIn
                </span>
                <div className="mt-2">
                  <a
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF7EE] border border-[#EAE4D3] text-sm text-[#1F1D1B] hover:text-amber-700 hover:border-amber-300 transition-all font-medium group"
                    href="https://www.linkedin.com/in/fakhitah-nazifah-alkarimah-0a54ba394"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 group-hover:bg-amber-200 transition-colors shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <span className="truncate">Fakhitah Nazifah Alkarimah</span>
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="pt-3 border-t border-[#EAE4D3]">
                <span className="text-[11px] font-bold tracking-widest text-[#8C857D] uppercase">
                  Instagram
                </span>
                <div className="mt-2">
                  <a
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF7EE] border border-[#EAE4D3] text-sm text-[#1F1D1B] hover:text-amber-700 hover:border-amber-300 transition-all font-medium group"
                    href="https://www.instagram.com/hitaaa.h"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 group-hover:bg-amber-200 transition-colors shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </div>
                    <span className="truncate">@hitaaa.h</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}