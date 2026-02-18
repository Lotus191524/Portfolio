import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Layers, Terminal } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter text-indigo-600">AZOTHA ZWANE</span>
          <div className="space-x-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-indigo-600 transition">About</a>
            <a href="#skills" className="hover:text-indigo-600 transition">Skills</a>
            <a href="#projects" className="hover:text-indigo-600 transition">Projects</a>
            <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Frontend Developer & <span className="text-indigo-600">Product Manager</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
          Bridging technical execution and business delivery. Specialized in building 
          high-performance web applications with React.js and Tailwind CSS.
        </p>
        <div className="flex justify-center gap-4">
          <a href="mailto:azothazwane19@gmail.com" className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition">
            <Mail size={18} /> Email Me
          </a>
          <a href="https://www.linkedin.com/in/azotha-zwane-53b0b92b7" className="flex items-center gap-2 border border-slate-300 px-6 py-3 rounded-full font-semibold hover:bg-slate-100 transition">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </header>

      {/* Skills Grid */}
      <section id="skills" className="bg-white py-20 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Arsenal</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <Code className="text-indigo-600 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Frontend</h3>
              <p className="text-slate-600 text-sm">React.js, JavaScript, TypeScript, Tailwind CSS, HTML5/CSS3</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <Layers className="text-indigo-600 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Management</h3>
              <p className="text-slate-600 text-sm">Agile/Scrum, MVP Scoping, User Story Mapping, Backlog Prioritization</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <Terminal className="text-indigo-600 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Ops & AI</h3>
              <p className="text-slate-600 text-sm">Git/GitHub, CI/CD Pipelines, AI-900 Certified, ISTQB Foundation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Zolesta */}
          <div className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-serif text-4xl italic tracking-widest">ZOLESTA</span>
            </div>
            <div className="p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2 block">High-End E-Commerce</span>
              <h3 className="text-2xl font-bold mb-3">Zolesta Fashion</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                Developed a premium user interface for an upper-class fashion platform, 
                focusing on luxury branding and seamless UX.
              </p>
              <div className="flex gap-2">
                <span className="bg-slate-100 px-3 py-1 rounded-md text-xs font-medium">React</span>
                <span className="bg-slate-100 px-3 py-1 rounded-md text-xs font-medium">Tailwind</span>
              </div>
            </div>
          </div>

          {/* Project Tracker */}
          <div className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="h-48 bg-slate-800 flex items-center justify-center p-8">
               <div className="grid grid-cols-3 gap-2 w-full">
                 <div className="h-2 bg-slate-600 rounded"></div>
                 <div className="h-2 bg-indigo-500 rounded col-span-2"></div>
                 <div className="h-2 bg-indigo-500 rounded col-span-2"></div>
                 <div className="h-2 bg-slate-600 rounded"></div>
               </div>
            </div>
            <div className="p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2 block">Internal Tooling</span>
              <h3 className="text-2xl font-bold mb-3">Internal Project Tracker</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                Centralized system for tracking project milestones at Gimsoi AI, 
                improving reporting accuracy and team accountability.
              </p>
              <div className="flex gap-2">
                <span className="bg-slate-100 px-3 py-1 rounded-md text-xs font-medium">Product Lead</span>
                <span className="bg-slate-100 px-3 py-1 rounded-md text-xs font-medium">Workflow Ops</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Summary */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Current Experience</h2>
            <div className="border-l-2 border-indigo-500 pl-6">
              <h4 className="font-bold text-lg">Gimsoi AI</h4>
              <p className="text-indigo-400 text-sm mb-2">Product Manager & Frontend Lead</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Engineering high-performance applications while managing cross-functional 
                teams (Backend, Frontend, QA, and DevOps) to ensure seamless sprint execution.
              </p>
            </div>
          </div>
          <div id="contact">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <p className="text-slate-400 mb-8">
              Currently based in South Africa. Looking for opportunities where I can 
              combine my frontend skills with product-driven thinking.
            </p>
            <div className="flex gap-6">
              <a href="mailto:azothazwane19@gmail.com" className="hover:text-indigo-400 transition"><Mail size={24} /></a>
              <a href="https://github.com" className="hover:text-indigo-400 transition"><Github size={24} /></a>
              <a href="#" className="hover:text-indigo-400 transition"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          © 2026 Azotha Zwane. Built with React & Tailwind CSS.
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
