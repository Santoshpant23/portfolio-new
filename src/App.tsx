// import React from 'react';
import ProjectGrid from './components/ProjectCarousel';
import { projectsData } from './data/projectsData';
import {
  Terminal,
  Github,
  Linkedin,
  Mail,
  Code,
  BookOpen,
  User,
  Briefcase
} from 'lucide-react';

/**
 * Main App component for the portfolio website
 * The site is structured with the following sections:
 * - Header with navigation
 * - Hero section with resume download
 * - About Me section
 * - Projects showcase
 * - Footer with social links
 */
function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-mono">
      {/* HEADER SECTION - Edit this section to change the navigation */}
      <header className="sticky top-0 z-50 bg-[#0f172a]/90 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold text-cyan-400">Portfolio<span className="text-emerald-400">.dev</span></span>
            </div>
            <ul className="hidden md:flex items-center space-x-6">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">&lt;Home /&gt;</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">&lt;About /&gt;</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">&lt;Projects /&gt;</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">&lt;Contact /&gt;</a></li>
            </ul>
            <button className="md:hidden">
              <Code className="w-6 h-6 text-slate-400" />
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO SECTION - Edit this section to change your personal information and resume link */}
        <section id="home" className="py-16 md:py-24 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-400">CS + Data Science · Knox College · Building things that matter</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-white">I build systems that</span>
                  <br />
                  <span className="text-cyan-400">win.</span>
                </h1>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Full-stack engineer and ML researcher. I've shipped production systems, trained <span className="text-emerald-400">computer vision models</span>, published open-source tools, and won <span className="text-cyan-400">hackathons at Illinois and Michigan</span>. Looking for Summer 2026 internships.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
                  >
                    <Briefcase size={18} />
                    <span>See My Projects</span>
                  </a>
                </div>
              </div>
              <div className="code-terminal w-full max-w-md p-6 bg-[#1a2234] border border-slate-700 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-sm">
                  <p className="text-emerald-400">$ whoami</p>
                  <p className="text-slate-300 ml-2 mb-3">santosh.pant</p>
                  <p className="text-emerald-400">$ cat wins.txt</p>
                  <p className="text-slate-300 ml-2">HackIllinois 2026 — 1st Place</p>
                  <p className="text-slate-300 ml-2">UMich Heat Resilience — 2nd Place</p>
                  <p className="text-slate-300 ml-2">HackAugie 2026 — Winner</p>
                  <p className="text-slate-300 ml-2 mb-3">ASA DataFest 2026 — Winner</p>
                  <p className="text-emerald-400">$ ./status.sh</p>
                  <p className="text-cyan-400 ml-2 cursor-blink">Open to Summer 2026 internships</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION - Edit this section to update your personal information */}
        <section id="about" className="py-16 bg-[#1e293b]">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <User className="w-5 h-5 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">About Me</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="code-block p-6 bg-[#0f172a] border border-slate-700 rounded-lg overflow-x-auto">
                <p className="mb-4 text-slate-300">
                  <span className="text-cyan-400">const</span> <span className="text-emerald-400">aboutMe</span> = {'{'}
                </p>
                <p className="mb-2 ml-4">
                  <span className="text-orange-400">education:</span> <span className="text-slate-300">"CS + Data Science, Knox College (GPA: 3.82/4.00)"</span>,
                </p>
                <p className="mb-2 ml-4">
                  <span className="text-orange-400">research:</span> <span className="text-slate-300">"Richter Scholar — AI & Materials Science (PyTorch, CNNs, Grad-CAM)"</span>,
                </p>
                <p className="mb-2 ml-4">
                  <span className="text-orange-400">experience:</span> <span className="text-slate-300">["SWE Intern @ The MACRO Consortium", "SWE Intern @ Synapse Technologies"]</span>,
                </p>
                <p className="mb-2 ml-4">
                  <span className="text-orange-400">openSource:</span> <span className="text-slate-300">"BhashaJS (npm) · PyScope contributor (telescope control systems)"</span>,
                </p>
                <p className="mb-2 ml-4">
                  <span className="text-orange-400">competitions:</span> <span className="text-slate-300">["HackIllinois 2026 1st", "UMich 2nd", "ICPC Regional", "DataFest Winner"]</span>,
                </p>
                <p className="mb-2 ml-4">
                  <span className="text-orange-400">seeking:</span> <span className="text-slate-300">"Summer 2026 SWE internship — systems, ML infra, or full-stack"</span>,
                </p>
                <p className="text-slate-300 cursor-blink">{'}'};</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION - Projects are loaded from projectsData.ts */}
        <section id="projects" className="py-16 bg-[#0f172a]">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-8 justify-center">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              <h2 className="text-2xl font-bold text-white">My Projects</h2>
            </div>
            <div className="code-block p-4 max-w-3xl mx-auto mb-10 bg-[#1e293b] border border-slate-700 rounded-lg">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-400">projects</span> = {" "}
                <span className="text-orange-400">await</span>{" "}
                <span className="text-emerald-400">fetchPortfolio</span>();<span className="cursor-blink"></span>
              </p>
              <p className="text-slate-400 mt-2">// Hover/tap to reveal project details</p>
            </div>
            {/* ProjectGrid component displays the projects */}
            <ProjectGrid projects={projectsData} />
          </div>
        </section>
      </main>

      {/* FOOTER SECTION - Edit this section to update your social links */}
      <footer id="contact" className="py-10 border-t border-slate-800 bg-[#0f172a]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-cyan-400">Portfolio<span className="text-emerald-400">.dev</span></h3>
              </div>
              <p className="text-sm text-slate-400">Building things that matter — open to Summer 2026 internships</p>
            </div>
            
            {/* Social links - Update these with your actual social media profiles */}
            <div className="flex gap-4">
              <a href="https://github.com/santoshpant23" target="_blank" rel="noopener noreferrer" 
                className="social-link w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/the-santosh-pant" target="_blank" rel="noopener noreferrer"
                className="social-link w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:spant@knox.edu" 
                className="social-link w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-cyan-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
            <div className="inline-block px-4 py-2 border border-slate-700 rounded-lg bg-slate-800/50">
              <code className="text-xs text-slate-400">© {new Date().getFullYear()} • Designed and coded with &#10084; by Santosh Pant</code>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;