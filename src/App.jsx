import React, { useState } from 'react';
import { Github, Linkedin, Mail, Shield, Code, Smartphone, ExternalLink, ChevronDown, Terminal, Bug, Facebook, Globe } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans selection:bg-[#00C696] selection:text-black">
      
      {/* --- HERO SECTION --- */}
      <header className="relative w-full h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00C696] rounded-full blur-[128px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[128px]"></div>
        </div>

        <div className="z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#333] bg-[#111] text-xs font-mono text-[#00C696] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C696] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C696]"></span>
            </span>
            Available for hire
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4">
            MARK <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C696] to-blue-500">HOUSE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8 font-light">
            Full Stack Developer & Security Researcher. <br/>
            Founder of <span className="text-white font-semibold">Staklopati Team</span>.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all">
              Contact Me
            </a>
            <a href="#work" className="px-8 py-3 border border-[#333] bg-[#111] text-white font-bold rounded-full hover:border-[#00C696] transition-all flex items-center gap-2">
              View Work <ChevronDown size={18} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 animate-bounce text-gray-500">
          <ChevronDown size={32} />
        </div>
      </header>

      {/* --- SPECIAL ACHIEVEMENT: META BUG BOUNTY --- */}
      <section className="w-full py-20 px-6 bg-[#0f0f0f] border-y border-[#222]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-8 rounded-2xl border border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.1)]">
            <div className="p-4 bg-yellow-500/10 rounded-full border border-yellow-500/50">
              <Bug size={48} className="text-yellow-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-yellow-500 font-mono text-sm mb-2 uppercase tracking-widest">Major Achievement</h3>
              <h2 className="text-3xl font-bold text-white mb-2">Meta / Facebook Whitehat Acknowledgment</h2>
              <p className="text-gray-400 leading-relaxed">
                Discovered and reported a critical <span className="text-white font-semibold">2FA (Two-Factor Authentication) Bypass vulnerability</span> in WhatsApp. 
                The vulnerability allowed potential attackers to skip the second layer of security under specific conditions. 
                Officially recognized and rewarded by the Meta Security Team.
              </p>
            </div>
            <div className="text-4xl font-black text-[#222]">2024</div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS & SKILLS --- */}
      <section id="work" className="w-full py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Selected Work</h2>
              <p className="text-gray-500">A showcase of my applications and security research.</p>
            </div>
            <div className="flex gap-4 mt-6 md:mt-0">
              <button 
                onClick={() => setActiveTab('projects')}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'projects' ? 'bg-[#00C696] text-black' : 'bg-[#111] text-gray-400 border border-[#333]'}`}
              >
                Projects
              </button>
              <button 
                onClick={() => setActiveTab('skills')}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'skills' ? 'bg-[#00C696] text-black' : 'bg-[#111] text-gray-400 border border-[#333]'}`}
              >
                Tech Stack
              </button>
            </div>
          </div>

          {activeTab === 'projects' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* --- PROJECT 1: STAKLOPATI (FLAGSHIP) --- */}
              <div className="group relative bg-[#111] rounded-2xl border border-[#222] overflow-hidden hover:border-[#00C696] transition-all duration-300">
                <div className="h-48 bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center p-6 relative">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
                  <h3 className="text-3xl font-black text-white uppercase tracking-widest z-10">Šta Klopati?</h3>
                  <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded text-xs font-mono text-[#00C696]">
                    Active Production
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Staklopati App</h3>
                  <p className="text-gray-400 mb-6">
                    A comprehensive local food guide application. Founder & Lead Developer. 
                    Features include restaurant listings, geolocation services, and a vlog integration. 
                    Built with modern web technologies and compiled to native Android using Capacitor.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-[#222] rounded-md text-xs text-gray-300">Next.js 14</span>
                    <span className="px-3 py-1 bg-[#222] rounded-md text-xs text-gray-300">React</span>
                    <span className="px-3 py-1 bg-[#222] rounded-md text-xs text-gray-300">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-[#222] rounded-md text-xs text-gray-300">Capacitor Android</span>
                    <span className="px-3 py-1 bg-[#222] rounded-md text-xs text-gray-300">AdMob</span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {/* APP LINK (Placeholder or Play Store link later) */}
                    <a href="#" className="flex items-center gap-2 text-[#00C696] font-bold hover:underline">
                      <Smartphone size={18} /> View App
                    </a>
                    {/* WEBSITE LINK - ADDED */}
                    <a href="https://klopati.rs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 font-bold hover:underline">
                      <Globe size={18} /> Visit klopati.rs
                    </a>
                  </div>
                </div>
              </div>

              {/* --- PROJECT 2: WEB DEVELOPMENT PORTFOLIO --- */}
              <div className="group bg-[#111] rounded-2xl border border-[#222] overflow-hidden hover:border-blue-500 transition-all duration-300">
                <div className="h-48 bg-gradient-to-r from-blue-900/20 to-purple-900/20 flex items-center justify-center">
                  <Code size={64} className="text-blue-500 opacity-50" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Client Web Solutions</h3>
                  <p className="text-gray-400 mb-6">
                    Designed and deployed 5+ custom websites for various clients. 
                    Focus on performance, SEO optimization, and responsive design. 
                    Includes e-commerce solutions and corporate landing pages.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-[#222] rounded-md text-xs text-gray-300">WordPress</span>
                    <span className="px-3 py-1 bg-[#222] rounded-md text-xs text-gray-300">JavaScript</span>
                    <span className="px-3 py-1 bg-[#222] rounded-md text-xs text-gray-300">CSS3</span>
                    <span className="px-3 py-1 bg-[#222] rounded-md text-xs text-gray-300">SEO</span>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "JavaScript (ES6+)", icon: <Code /> },
                { name: "React & Next.js", icon: <Terminal /> },
                { name: "Node.js", icon: <Code /> },
                { name: "Cybersecurity", icon: <Shield /> },
                { name: "Android (Capacitor)", icon: <Smartphone /> },
                { name: "Tailwind CSS", icon: <Code /> },
                { name: "Git & GitHub", icon: <Code /> },
                { name: "Bug Bounty Hunting", icon: <Bug /> },
              ].map((skill, index) => (
                <div key={index} className="p-6 bg-[#111] border border-[#222] rounded-xl flex flex-col items-center justify-center gap-3 hover:bg-[#1a1a1a] transition-colors">
                  <div className="text-[#00C696]">{skill.icon}</div>
                  <span className="font-bold text-gray-300 text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-12 border-y border-[#222] bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-white mb-1">1</div>
            <div className="text-sm text-gray-500 uppercase tracking-widest">Major CVE/Bug Found</div>
          </div>
          <div>
            <div className="text-4xl font-black text-white mb-1">6+</div>
            <div className="text-sm text-gray-500 uppercase tracking-widest">Websites Launched</div>
          </div>
          <div>
            <div className="text-4xl font-black text-white mb-1">1</div>
            <div className="text-sm text-gray-500 uppercase tracking-widest">Mobile App Published</div>
          </div>
          <div>
            <div className="text-4xl font-black text-white mb-1">100%</div>
            <div className="text-sm text-gray-500 uppercase tracking-widest">Passion</div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <footer id="contact" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
        <p className="text-gray-400 max-w-lg mx-auto mb-10">
          I am currently open to freelance projects, security consulting, or full-time opportunities.
        </p>

        <div className="flex justify-center flex-wrap gap-6">
          {/* GITHUB */}
          <a href="https://github.com/mrhouse111" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#111] border border-[#333] rounded-full text-white hover:border-[#00C696] hover:text-[#00C696] transition-all group relative">
            <Github size={24} />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
          </a>
          
          {/* LINKEDIN */}
          <a href="https://www.linkedin.com/in/mrhouse111/" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#111] border border-[#333] rounded-full text-white hover:border-[#0077b5] hover:text-[#0077b5] transition-all group relative">
            <Linkedin size={24} />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
          </a>

          {/* FACEBOOK */}
          <a href="https://www.facebook.com/markhouse369/" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#111] border border-[#333] rounded-full text-white hover:border-[#1877F2] hover:text-[#1877F2] transition-all group relative">
            <Facebook size={24} />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">Facebook</span>
          </a>

          {/* EMAIL */}
          <a href="mailto:contact@markhouse.dev" className="p-4 bg-[#111] border border-[#333] rounded-full text-white hover:border-[#00C696] hover:text-[#00C696] transition-all group relative">
            <Mail size={24} />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
          </a>
        </div>

        <div className="mt-20 text-sm text-gray-600">
          &copy; 2025 Mark House (Dušan Balešević). All Rights Reserved.
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;