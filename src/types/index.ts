/**
 * Project interface defining the structure of project data
 * This is used throughout the application to ensure type safety
 */
export interface Project {
  /** Unique identifier for the project */
  id: string;

  /** Project title displayed in the card header */
  title: string;

  /** Optional URL to the project image (local path or external URL). If omitted, a terminal-style gradient is rendered. */
  imageUrl?: string;

  /** Array of technologies used in the project */
  technologies: string[];

  /** Optional URL to the project's GitHub repository */
  githubUrl?: string;

  /** Optional URL to a live demo of the project */
  demoUrl?: string;

  /** Short description of the project */
  description: string;

  /** Optional badge shown on the front of the card (e.g. "🏆 HackIllinois 2026 — 1st Place") */
  badge?: string;
}
