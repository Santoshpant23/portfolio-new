import { Project } from "../types";

/**
 * Project data for the portfolio
 *
 * To add/edit projects:
 * 1. Update the information in this array
 * 2. Make sure each project has a unique ID
 * 3. `badge` and `imageUrl` are optional — cards without images render a terminal-style front face
 * 4. `demoUrl` is optional — the Demo button is hidden when absent
 */
export const projectsData: Project[] = [
  {
    id: "1",
    title: "Vigilante AI",
    technologies: [
      "Python",
      "YOLO11-L",
      "CLIP",
      "Modal GPU",
      "FastAPI",
      "React",
      "TypeScript",
    ],
    githubUrl: "https://github.com/Santoshpant23/vigilant-ai",
    badge: "🏆 HackIllinois 2026 — 1st Place",
    description:
      "Turns raw CCTV footage into searchable plain-English intelligence. Three neural networks running simultaneously on a serverless A100 GPU — YOLO11-L for detection, CLIP for embeddings, Qwen2.5-VL for captioning. Hybrid vector + keyword search under 100ms. I built the full backend and ML pipeline.",
  },
  {
    id: "2",
    title: "BhashaJS",
    technologies: ["TypeScript", "React", "npm package"],
    githubUrl: "https://github.com/Santoshpant23/bhashajs",
    demoUrl: "https://www.npmjs.com/package/bhasha-js",
    badge: "📦 Published on npm",
    description:
      "i18n library purpose-built for South Asian languages. Handles what other libraries ignore: automatic RTL switching for Urdu, correct script fonts, and culturally-aware fallback chains where Bengali falls back to Hindi before English. Built this because the tooling I needed didn't exist.",
  },
  {
    id: "3",
    title: "RGB → Thermal Pipeline",
    technologies: ["PyTorch", "U-Net", "Python", "AlphaEarth", "NVIDIA A6000"],
    githubUrl: "https://github.com/Santoshpant23/umich-heat-resilience-hackathon",
    badge: "🥈 UMich Heat Resilience — 2nd Place, $2K",
    description:
      "Three-phase ML pipeline to synthesize thermal imagery from standard RGB drone footage for urban heat mapping. Custom U-Net with 19 input channels fusing weather data, satellite embeddings, and baseline predictions. +62% PSNR improvement, 3x SSIM gain over baseline.",
  },
  {
    id: "4",
    title: "PyScope — Open Source Contribution",
    technologies: ["Python", "Pytest", "Astroplan", "Open Source"],
    badge: "🔭 Real scientific infrastructure",
    description:
      "Contributed to PyScope, an open-source telescope control system used by the MACRO Consortium. Diagnosed a parser bug silently dropping observation requests, co-built a priority scheduler using Astroplan with airmass and moon separation constraints, contributed to a 32-test pytest suite.",
  },
  {
    id: "5",
    title: "Cryptocurrency OMS",
    technologies: ["Go", "PostgreSQL", "React", "CoinGecko API"],
    githubUrl: "https://github.com/Santoshpant23/oms",
    description:
      "Low-latency limit order book in Go with a concurrent execution engine processing live price feeds from CoinGecko API. React dashboard tracking slippage, average execution time, and fill rates.",
  },
  {
    id: "6",
    title: "Virtual IClicker",
    technologies: ["Socket.IO", "Node.js", "MongoDB", "React", "Firebase"],
    description:
      "Web-based classroom engagement tool built as a free alternative to physical clickers. Real-time attendance, analytics dashboards, OTP-based authentication. Still running.",
  },
];
