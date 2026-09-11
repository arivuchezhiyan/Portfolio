'use client';

import React from 'react';
import { TIMELINE_DATA } from '@/data/portfolioData';
import { usePortfolio } from '@/context/PortfolioContext';
import { GraduationCap, Briefcase, Award, MapPin } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const { mode } = usePortfolio();

  return (
    <section id="timeline" className="py-24 px-4 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-xs font-mono tracking-widest text-cyber-cyan uppercase">
          [ ACADEMIC & PROFESSIONAL ROADMAP ]
        </h2>
        <h3 className="text-3xl md:text-5xl font-black font-display text-white">
          EDUCATION & MILESTONES
        </h3>
        <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto font-sans">
          M.Tech Integrated CSE student at Sri Sivasubramaniya Nadar (SSN) College of Engineering, Chennai, Tamil Nadu, India.
        </p>
      </div>

      <div className="relative border-l-2 border-white/10 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
        {TIMELINE_DATA.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Node Bullet */}
            <div className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full border-4 border-dark-900 transition-colors ${
              mode === 'software' ? 'bg-cyber-cyan shadow-[0_0_15px_#00f3ff]' : 'bg-gamedev-crimson shadow-[0_0_15px_#ff0055]'
            }`} />

            {/* Year Badge on Left for Desktop */}
            <div className="hidden md:block absolute -left-36 top-1 text-xs font-mono text-gray-400 font-bold w-24 text-right">
              {item.year}
            </div>

            {/* Content Card */}
            <div className="p-6 md:p-8 rounded-3xl bg-dark-800/80 border border-white/10 group-hover:border-white/20 transition-all duration-300 backdrop-blur-md space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-xl border ${
                    item.type === 'education' ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : 'bg-cyber-emerald/10 border-cyber-emerald/30 text-cyber-emerald'
                  }`}>
                    {item.type === 'education' ? <GraduationCap className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-display text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs font-mono text-cyber-cyan">
                      {item.organization}
                    </p>
                  </div>
                </div>

                {item.badge && (
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/30 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>{item.location}</span>
                <span className="md:hidden ml-2 font-bold text-gray-300">({item.year})</span>
              </div>

              <ul className="space-y-2 text-xs md:text-sm text-gray-300 font-sans list-disc list-inside leading-relaxed">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.skills.map((s, i) => (
                  <span key={i} className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/5 text-gray-300 border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
