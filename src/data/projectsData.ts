import { Project } from "../types";

/**
 * Project data for the portfolio
 *
 * To add/edit projects:
 * 1. Update the information in this array
 * 2. Make sure each project has a unique ID
 * 3. The image URL can be a local path (in public folder) or an external URL
 * 4. Technologies should be an array of strings
 *
 * Example local image: "/images/project-image.jpg"
 */
export const projectsData: Project[] = [
  {
    id: "1",
    title: "Internship Application Assistant",
    imageUrl: "internship_project.png",
    technologies: ["Express.js", "MongoDB", "MCP", "LLMs", "AI"],
    githubUrl: "#",
    demoUrl: "#",
    description:
      "Built an AI-driven assistant using MCP servers to automate internship discovery and application management across LinkedIn and Handshake.",
  },
  {
    id: "2",
    title: "IClicker System",
    imageUrl: "iclicker.png",
    technologies: ["React.js", "Firebase", "Socket.IO", "Node.js", "Redis"],
    githubUrl: "#",
    demoUrl: "#",
    description:
      "Developed a cost-effective web-based classroom engagement tool that replaces physical iClickers and adds real-time attendance, analytics, and report exports.",
  },
  {
    id: "3",
    title: "ClubSharing",
    imageUrl: "clubsharing.png",
    technologies: [
      "TypeScript",
      "Tailwind CSS",
      "AWS ECS",
      "Postgres",
      "React.js",
    ],
    githubUrl: "https://github.com/santoshpant/clubsharing",
    demoUrl: "https://clubsharing.example.com",
    description:
      "College club resource-sharing platform with JWT auth, approval workflows, and AWS-hosted scalability.",
  },
  {
    id: "4",
    title: "GitHub Comparer",
    imageUrl: "github-compare.png",
    technologies: ["TypeScript", "Qwen LLM", "AWS", "Node.js", "React"],
    githubUrl: "https://github.com/santoshpant/github-comparer",
    demoUrl: "https://github-comparer.example.com",
    description:
      "AI-powered tool that compares GitHub profiles and generates humorous roasts using Qwen LLM.",
  },
  {
    id: "5",
    title: "Stock Market Simulation",
    imageUrl: "stock-market.png",
    technologies: ["React", "Express.js", "PostgreSQL", "Redis", "K6"],
    githubUrl: "https://github.com/santoshpant/stock-simulation",
    demoUrl: "https://stock-simulation.example.com",
    description:
      "Scalable stock-market simulator with real-time data pipelines, strategy back-testing, and interactive analytics.",
  },
  {
    id: "6",
    title: "Multiplayer Chess",
    imageUrl: "chess.png",
    technologies: [
      "TypeScript",
      "Express.js",
      "WebSocket",
      "Chess.js",
      "React",
    ],
    githubUrl: "#",
    demoUrl: "#",
    description:
      "Real-time multiplayer chess game featuring seamless WebSocket communication and server-side move validation.",
  },
  {
    id: "7",
    title: "MatchUp",
    imageUrl: "matchup.png",
    technologies: [
      "React.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Zod",
      "JWT",
    ],
    githubUrl: "#",
    demoUrl: "#",
    description:
      "Dating app that pairs users by gaming interests, with real-time chat, secure authentication, and input validation.",
  },
  {
    id: "8",
    title: "Photoshop Junior",
    imageUrl: "photoshop.png",
    technologies: ["Java", "Swing"],
    githubUrl: "#",
    demoUrl: "#",
    description:
      "Desktop photo-editing application offering resizing, rotation, edge detection, and blur filters.",
  },
  {
    id: "9",
    title: "Mobile Utility Apps Suite",
    imageUrl: "apps.png",
    technologies: ["Flutter", "React Native"],
    githubUrl: "#",
    demoUrl: "#",
    description:
      "Includes a Nepali↔Gregorian date converter (10 k+ downloads), a kids' quiz app, and a postal-code finder for India and Nepal.",
  },
];
