# Figma-Make-a-thon
Figma Make-a-thon Waterloo

## Project Structure

This project is organized into FrontEnd and BackEnd directories:

### FrontEnd/
Contains all client-side code and assets:
- `app/` - Next.js app router pages and layouts
- `components/` - React components (including BeanModel.tsx)
- `public/` - Static assets (including bean.glb)
- `bean.glb` - 3D model file
- `new.html` - Additional HTML file (if exists)

### BackEnd/
Contains configuration and build files:
- `package.json` - Project dependencies and scripts
- `package-lock.json` - Dependency lock file
- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `.gitignore` - Git ignore rules
- `README.md` - This file

**Note:** For Next.js to function properly, copies of the config files and source directories also exist in the root directory. The organized versions are in BackEnd/.

## Interactive 3D Bean Model

A Next.js application featuring a 3D bean model (bean.glb) that follows your cursor movement using Three.js.

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Make sure `bean.glb` is in the `public` folder (it should already be there)

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the interactive 3D model.

### Building for Production

```bash
npm run build
npm start
```

## Features

- 3D model loaded from GLB file
- Smooth cursor tracking - the bean follows your mouse movement
- Dynamic rotation based on cursor position
- Responsive design that adapts to window size
- Modern dark theme

## Tech Stack

- Next.js 14
- React 18
- Three.js
- TypeScript
