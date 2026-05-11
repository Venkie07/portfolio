# 🚀 Premium Developer Portfolio

A production-quality, recruiter-ready developer portfolio built with React 18, Vite, and Tailwind CSS. Featuring 3D interactive models, smooth animations, and a glassmorphism-inspired design system.

## ✨ Features

- **Interactive 3D Hero**: High-performance McLaren F1 model using React Three Fiber.
- **Premium Design System**: Fully responsive glassmorphism UI with custom theme support.
- **Dynamic Content**: Work history timeline, skill dock, and bento-grid contact section.
- **Theme Support**: Dark (Deep Blue/Black) and Light (Soft White/Purple) modes with persistence.
- **Smooth Animations**: Orchestrated route transitions and scroll-triggered effects via Framer Motion and GSAP.
- **SEO Optimized**: Semantic HTML and meta tags for better discoverability.

## 🛠️ Tech Stack

- **Frontend**: React (Vite), TypeScript
- **Styling**: Tailwind CSS (JIT mode)
- **3D Engine**: Three.js, React Three Fiber, R3F Drei
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React
- **Routing**: React Router DOM v6

## 📂 Folder Structure

```
src/
├── components/      # Reusable UI (GlassCard, SectionHeading, Navbar)
├── pages/           # Main route components (About, Skills, Achievements, etc.)
├── sections/        # Page-specific sections (Hero, Timeline)
├── context/         # ThemeContext and state management
├── styles/          # Global styles and Tailwind configurations
└── App.tsx          # Main entry point and routing logic
```

## 🚀 Getting Started

1. **Clone the repo**:
   ```bash
   git clone [your-repo-link]
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📝 Customization

All text and image content can be updated within the `src/pages` and `src/sections` directories. The theme colors can be adjusted in `src/styles/globals.css` and `tailwind.config.js`.
