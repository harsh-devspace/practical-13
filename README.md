# Practical 13: Router Types in React

## Objective
Create a React application demonstrating the working of **HashRouter**, **MemoryRouter**, and **StaticRouter**, and explain where each type of router can be used.

## Topics Covered
- **HashRouter**: Uses `window.location.hash` to store navigation state without requiring server URL rewrites.
- **MemoryRouter**: In-memory history navigation ideal for React Native, automated headless tests (Jest/Vitest), and embedded modals.
- **StaticRouter**: Server-side rendering (SSR) routing for Node.js servers (Express, Next.js, Remix) with static location matching.
- **Comparison Matrix**: Detailed breakdown of URL formatting, server requirements, advantages, and use cases.

## Project Structure
```
Practical_13/
├── src/
│   ├── App.jsx            # Interactive playground for HashRouter, MemoryRouter & StaticRouter
│   ├── main.jsx           # Application entry point
│   └── index.css          # Tailwind CSS styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── vite.config.js         # Vite configuration
├── vercel.json            # Vercel configuration
└── README.md              # Project documentation
```

## Installation & Running Steps
1. Navigate to the project directory:
   ```bash
   cd Practical_13
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`.
