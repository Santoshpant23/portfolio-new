import React, { useState } from 'react';
import { Project } from '../types';
import { ExternalLink, Github, Code2, Terminal } from 'lucide-react';

interface FlipCardProps {
  project: Project;
}

/**
 * FlipCard component displaying project information in a flippable card format
 *
 * The card has two sides:
 * - Front: Shows the project title, a badge (if any), and either a hero image
 *   or a terminal-style gradient when no image is provided
 * - Back: Shows project description, technologies, and links
 */
const FlipCard: React.FC<FlipCardProps> = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="flip-card relative h-full w-full cursor-pointer"
      onClick={handleFlip}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`flip-card-inner relative w-full h-full transition-transform duration-700 transform-gpu ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card - Project preview */}
        <div className="flip-card-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden flex flex-col terminal-window border border-slate-700">
          <div className="relative flex-1 overflow-hidden">
            {project.imageUrl ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10"></div>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-[#1e293b] flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,#06b6d4_0,transparent_50%),radial-gradient(circle_at_70%_80%,#10b981_0,transparent_50%)]"></div>
                <div className="relative z-10 font-mono text-center px-6">
                  <p className="text-emerald-400 text-sm mb-2">$ ./launch.sh</p>
                  <p className="text-cyan-400 text-2xl font-bold">{project.title}</p>
                  <p className="text-slate-500 text-xs mt-2 cursor-blink">running...</p>
                </div>
              </div>
            )}
            <div className="absolute top-4 left-4 flex gap-2 z-20">
              <Code2 className="w-5 h-5 text-cyan-400" />
              <Terminal className="w-5 h-5 text-emerald-400" />
            </div>
            {project.badge && (
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <span className="inline-block text-xs px-3 py-1.5 bg-[#0f172a]/90 border border-emerald-500/40 rounded-full text-emerald-300 font-semibold backdrop-blur-sm">
                  {project.badge}
                </span>
              </div>
            )}
          </div>
          <div className="p-4 bg-[#0f172a]/90">
            <h3 className="text-xl font-bold text-cyan-400">{project.title}</h3>
          </div>
        </div>

        {/* Back of card - Project details */}
        <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180 rounded-xl terminal-window p-6 bg-[#0f172a] border border-slate-700 overflow-y-auto">
          <h3 className="text-xl font-bold mb-3 text-cyan-400">{project.title}</h3>

          {/* Project description */}
          <div className="mb-4 code-block p-3 bg-[#1e293b] border border-slate-700 rounded-lg">
            <p className="text-sm text-slate-300">{project.description}</p>
          </div>

          {/* Technologies used */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2 text-emerald-400">// Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project links */}
          {(project.githubUrl || project.demoUrl) && (
            <div className="flex space-x-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 text-slate-200 px-3 py-1.5 rounded-lg text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 bg-cyan-600 text-white hover:bg-cyan-700 transition-colors px-3 py-1.5 rounded-lg text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
