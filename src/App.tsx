// import React from 'react';
import ProjectGrid from './components/ProjectCarousel';
import { projectsData } from './data/projectsData';
import { 
  Terminal, 
  Download, 
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
                  <span className="text-sm font-medium text-emerald-400">CS Major | Software Developer</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-white">Hello, I'm </span>
                  <span className="text-cyan-400 typing-effect">Santosh</span>
                </h1>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  I enjoy building <span className="text-emerald-400">useful apps</span>, trying out new tools, and keeping my problem‑solving sharp by working through <span className="text-cyan-400">coding puzzles</span> in my spare time.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="/resume.pdf" 
                    className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
                    download
                  >
                    <Download size={18} />
                    <span>Download Resume</span>
                  </a>
                  <a 
                    href="#projects" 
                    className="flex items-center gap-2 px-6 py-3 bg-transparent border border-slate-600 hover:border-cyan-400 rounded-lg text-slate-200 hover:text-cyan-400 transition-all"
                  >
                    <Briefcase size={18} />
                    <span>View Projects</span>
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
                  <p className="text-emerald-400">$ whoami<span></span></p>
                  <p className="text-slate-300 ml-2 mb-2">santosh.pant</p>
                  <p className="text-emerald-400">$ cat skills.txt<span></span></p>
                  <p className="text-slate-300 ml-2 mb-2">Java, JavaScript, TypeScript, React, Next.js, AWS</p>
                  <p className="text-emerald-400">$ ./start_portfolio.sh<span></span></p>
                  <p className="text-cyan-400 ml-2 mb-2 cursor-blink">Initializing portfolio... Done!</p>
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
              <div className="code-block p-6 bg-[#0f172a] border border-slate-700 rounded-lg">
                <p className="mb-4 text-slate-300">
                  <span className="text-cyan-400">const</span> <span className="text-emerald-400">aboutMe</span> = {'{'}
                </p>
                <p className="mb-2 ml-4">
                  <span className="text-orange-400">education:</span> <span className="text-slate-300">"Computer Science and Mathematics at Knox College (GPA: 3.85)"</span>,<span></span>
                </p>
                <p className="mb-2 ml-4">
                  <span className="text-orange-400">interests:</span> <span className="text-slate-300">["AI Agents & LLMs", "Full-stack Development", "Real-time Applications", "Algorithms"]</span>,<span></span>
                </p>
                <p className="mb-2 ml-4">
                  <span className="text-orange-400">experience:</span> <span className="text-slate-300">"Software Developer Intern at Synapse Technologies"</span>,<span ></span>
                </p>
                <p className="mb-2 ml-4">
                  <span className="text-orange-400">goals:</span> <span className="text-slate-300">"Building innovative solutions that solve real-world problems"</span><span></span>
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
              <p className="text-sm text-slate-400">Building digital experiences with code</p>
            </div>
            
            {/* Social links - Update these with your actual social media profiles */}
            <div className="flex gap-4">
              <a href="https://github.com/santoshpant23" target="_blank" rel="noopener noreferrer" 
                className="social-link w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/santosh-pant-643213183/" target="_blank" rel="noopener noreferrer" 
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