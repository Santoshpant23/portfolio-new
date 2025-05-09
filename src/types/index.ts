/**
 * Project interface defining the structure of project data
 * This is used throughout the application to ensure type safety
 */
export interface Project {
  /** Unique identifier for the project */
  id: string;

  /** Project title displayed in the card header */
  title: string;

  /** URL to the project image (can be local path or external URL) */
  imageUrl: string;

  /** Array of technologies used in the project */
  technologies: string[];

  /** URL to the project's GitHub repository */
  githubUrl: string;

  /** URL to a live demo of the project */
  demoUrl: string;

  /** Short description of the project */
  description: string;
}
