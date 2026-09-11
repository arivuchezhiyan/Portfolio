'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { usePortfolio } from '@/context/PortfolioContext';
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle, Terminal, Heart } from 'lucide-react';
import { soundEngine } from '../audio/SoundController';

export const ContactSection: React.FC = () => {
  const { mode } = usePortfolio();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sentStatus, setSentStatus] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playClick();
    setSentStatus(true);
    setTimeout(() => {
      setSentStatus(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-3">
        <h2 className="text-xs font-mono tracking-widest text-cyber-cyan uppercase">
          [ DIRECT CHANNELS ]
        </h2>
        <h3 className="text-3xl md:text-5xl font-black font-display text-white">
          INITIATE COLLABORATION
        </h3>
        <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto font-sans">
          Interested in hiring a Staff level Software Architect or AAA Game Engineer? Send a direct signal.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info & Live GitHub Widget */}
        <div className="space-y-8">
          <div className="p-8 rounded-3xl bg-dark-800/80 border border-white/10 space-y-6 backdrop-blur-md">
            <h4 className="text-xl font-bold font-display text-white">
              Contact Details
            </h4>
            <div className="space-y-4 font-mono text-sm">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={() => soundEngine.playClick()}
                className="flex items-center gap-3 text-gray-300 hover:text-cyber-cyan transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30">
                  <Mail className="w-5 h-5" />
                </div>
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2.5 rounded-xl bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundEngine.playClick()}
                className="px-4 py-2 rounded-xl bg-dark-900 border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:border-cyber-cyan/40 transition-all flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-cyber-cyan" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundEngine.playClick()}
                className="px-4 py-2 rounded-xl bg-dark-900 border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:border-cyber-cyan/40 transition-all flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* GitHub Live Telemetry Widget Mockup */}
          <div className="p-6 rounded-3xl bg-dark-800/80 border border-cyber-cyan/30 space-y-4 font-mono text-xs text-gray-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-cyber-cyan font-bold">
                <Terminal className="w-4 h-4" />
                <span>GITHUB REPOSITORY TELEMETRY</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 text-[10px]">Active</span>
            </div>
            <div className="p-3 bg-dark-900 rounded-xl space-y-2 text-[11px]">
              <div>• Latest Push: <span className="text-white font-semibold">OpenContinuity AI (v2.4.0)</span></div>
              <div>• C++ Engine Draw Call Pass: <span className="text-gamedev-amber font-semibold">Passed (1,450 Calls)</span></div>
              <div>• Academic Repository: <span className="text-cyber-emerald font-semibold">SSN College of Engineering</span></div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-dark-800/80 border border-white/10 space-y-6 backdrop-blur-md">
          <h4 className="text-xl font-bold font-display text-white">
            Send Encrypted Message
          </h4>

          {sentStatus ? (
            <div className="p-6 rounded-2xl bg-cyber-emerald/20 border border-cyber-emerald text-cyber-emerald space-y-2 text-center font-mono">
              <CheckCircle className="w-8 h-8 mx-auto" />
              <div className="font-bold text-sm">MESSAGE DISPATCHED SUCCESSFULLY!</div>
              <div className="text-xs text-gray-300">Arivuchezhiyan E will review your signal shortly.</div>
            </div>
          ) : (
            <div className="space-y-4 font-mono text-xs">
              <div className="space-y-1">
                <label className="text-gray-300">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Elon Musk / Tim Cook"
                  className="w-full p-3 rounded-xl bg-dark-900 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyber-cyan"
                />
              </div>

              <div className="space-y-1">
                <label className="text-gray-300">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. executive@company.com"
                  className="w-full p-3 rounded-xl bg-dark-900 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyber-cyan"
                />
              </div>

              <div className="space-y-1">
                <label className="text-gray-300">Message Payload</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Discuss project requirements, hiring opportunity, or research collaboration..."
                  className="w-full p-3 rounded-xl bg-dark-900 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyber-cyan"
                />
              </div>

              <button
                type="submit"
                className={`w-full py-4 rounded-2xl font-bold font-mono text-sm flex items-center justify-center gap-2 transition-all ${
                  mode === 'software'
                    ? 'bg-cyber-cyan text-black hover:bg-cyber-cyan/90 shadow-[0_0_20px_rgba(0,243,255,0.4)]'
                    : 'bg-gamedev-crimson text-white hover:bg-gamedev-crimson/90 shadow-[0_0_20px_rgba(255,0,85,0.4)]'
                }`}
              >
                <span>Dispatch Message Payload</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          )}
        </form>
      </div>

      {/* Footer */}
      <footer className="pt-16 border-t border-white/10 text-center font-mono text-xs text-gray-500 space-y-3">
        <div className="flex justify-center items-center gap-2 text-gray-400">
          <span>Designed & Engineered by</span>
          <span className="text-white font-bold">{PERSONAL_INFO.name}</span>
        </div>
        <div>
          M.Tech Integrated Computer Science & Engineering • Sri Sivasubramaniya Nadar (SSN) College of Engineering, Chennai
        </div>
        <div className="text-[10px] text-gray-600">
          Built with Next.js 15 App Router, React 19, TypeScript, Tailwind CSS, Three.js & R3F.
        </div>
      </footer>
    </section>
  );
};
