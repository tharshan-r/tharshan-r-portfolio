# Tharshan R Portfolio

A modern React portfolio application built with TypeScript, Webpack, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd tharshan-r-portfolio
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

4. Run tests:
```sh
npm test
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Technologies Used

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Webpack** - Module bundler
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable UI components
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Supabase** - Backend services
- **Jest** - Testing framework
- **Testing Library** - Testing utilities

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── portfolio/      # Portfolio-specific components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
├── test/               # Test files
└── integrations/       # External service integrations
```

## Deployment

Build the project for production:

```sh
npm run build
```

The built files will be in the `dist/` directory.
