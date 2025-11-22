# Figma-Make-a-thon

Figma Make-a-thon Waterloo - Interactive 3D Bean Model

## 📁 Project Structure

This project is organized into **FrontEnd/** and **BackEnd/** directories:

```
Figma-Make-a-thon/
├── FrontEnd/          # All frontend source code and assets
│   ├── app/          # Next.js pages and layouts
│   ├── components/   # React components
│   ├── public/       # Static assets (bean.glb)
│   └── bean.glb      # 3D model file
│
├── BackEnd/          # Configuration and build files
│   ├── package.json
│   ├── package-lock.json
│   ├── next.config.js
│   ├── tsconfig.json
│   ├── .gitignore
│   ├── next-env.d.ts
│   └── README.md     # Detailed documentation
│
└── [Root]            # Next.js required files (symlinks/copies)
    ├── package.json  # Required by Next.js
    ├── next.config.js
    ├── tsconfig.json
    ├── app/          # Required by Next.js
    ├── components/   # Required by Next.js
    ├── public/       # Required by Next.js
    └── node_modules/ # Dependencies
```

**Note:** Next.js requires certain files in the root directory. The organized source files are in `FrontEnd/` and `BackEnd/`, with working copies in root for Next.js compatibility.

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm start
```

## ✨ Features

- 🎮 Interactive 3D bean model controlled by cursor
- 🖱️ Smooth mouse tracking and rotation
- 🎨 Modern dark theme
- 📱 Responsive design

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **React 18** - UI library
- **Three.js** - 3D graphics
- **TypeScript** - Type safety

For detailed documentation, see [BackEnd/README.md](./BackEnd/README.md)
