import React from 'react';
import { Project } from '../types';
import FlipCard from './FlipCard';

interface ProjectGridProps {
  projects: Project[];
}

/**
 * ProjectGrid component that displays projects in a responsive grid layout
 * 
 * @param projects - Array of project data to display
 */
const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="h-[400px]"
          >
            <FlipCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;