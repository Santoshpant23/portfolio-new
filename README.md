# CS Student Portfolio

A modern, developer-focused portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 💻 Terminal-inspired design with code-styled elements
- 📱 Fully responsive layout for mobile, tablet, and desktop
- 🌓 Clean blue/cyan color scheme that's easy on the eyes
- 📄 Resume download functionality
- 🔄 Interactive project cards with flip animation
- 🖱️ Cursor blink effect in code blocks

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Customization Guide

### Personal Information

Edit the following sections in `src/App.tsx`:

- **Header**: Update the navigation links and logo text
- **Hero Section**: Change your name, tagline, and terminal commands
- **About Section**: Update your education, interests, experience, and goals
- **Footer**: Update your social media links and copyright information

### Resume

Replace the resume file at `public/resume.pdf` with your own resume file.

### Projects

Edit the project data in `src/data/projectsData.ts` to showcase your own projects:

1. Each project should have:

   - Unique ID
   - Title
   - Image URL (can be local or external)
   - List of technologies
   - GitHub repository URL
   - Demo/live URL
   - Short description

2. Example:

```typescript
{
  id: '1',
  title: 'My Awesome Project',
  imageUrl: '/images/my-project.jpg', // Local image in public/images
  technologies: ['React', 'TypeScript', 'Firebase'],
  githubUrl: 'https://github.com/username/project',
  demoUrl: 'https://project-demo.example.com',
  description: 'A short description of my awesome project and what it does.'
}
```

### Colors and Styling

The main colors and styling are defined in:

1. `src/index.css` - Global styles and animations
2. Tailwind classes in component files

To change the color scheme, update the Tailwind color classes in the components (e.g., from `text-cyan-400` to `text-blue-400`).

## Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icons

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by modern developer portfolios and terminal aesthetics
- Images from [Pexels](https://www.pexels.com/)
