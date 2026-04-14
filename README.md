# Tharshan R Portfolio

A modern, interactive portfolio website built with React, TypeScript, and cutting-edge web technologies. Showcasing projects, experience, skills, and engineering expertise with smooth animations, dark mode support, and comprehensive contact integration.

🌐 **[Live Demo](#)** | 📧 **[Contact](#contact-section)**

## ✨ Features

### Core Sections
- **Hero Section** - Eye-catching introduction with animated background
- **Metrics Dashboard** - Key statistics and achievements
- **Projects Showcase** - Detailed project portfolio with filtering
- **Experience Timeline** - Professional work history
- **Skills & Expertise** - Technical skills with categorization
- **Education** - Academic qualifications and certifications
- **About** - Personal background and mission
- **Contact Form** - Integrated email messaging system
- **Engineering Mode** - Deep technical insights toggle
- **Architecture Section** - System design and technical architecture

### Technical Features
- ✅ **Dark/Light Theme Toggle** - Seamless theme switching
- ✅ **Responsive Design** - Mobile-first approach, works on all devices
- ✅ **Smooth Animations** - Section reveals and scroll effects
- ✅ **Scroll Progress Bar** - Visual scroll position indicator
- ✅ **Network Background** - Dynamic visual effects
- ✅ **Form Validation** - Contact form with email integration
- ✅ **SEO Optimized** - Meta tags and semantic HTML
- ✅ **TypeScript** - Full type safety across the codebase
- ✅ **Component Library** - Shadcn/ui components (40+ UI components)

## 🛠 Tech Stack

### Frontend
- **React** - UI library (v18+)
- **TypeScript** - Type-safe JavaScript
- **Webpack** - Module bundler
- **Tailwind CSS** - Utility-first CSS framework
- **Vite Env** - Build environment configuration

### UI & Components
- **Shadcn/ui** - High-quality, accessible component library
- **Radix UI** - Primitive components for building accessible UIs
- **React Hook Form** - Efficient form state management
- **Sonner** - Toast notifications
- **Recharts** - Chart components for metrics

### Backend & APIs
- **Supabase** - Backend-as-a-Service (PostgreSQL, Auth, Functions)
- **Deno** - Secure edge functions for email sending
- **Resend** - Email delivery service

### Development Tools
- **ESLint** - Code quality and consistency
- **Jest** - Unit testing framework
- **PostCSS** - CSS transformations
- **Vite** - Next generation frontend tooling

## 📋 Prerequisites

- Node.js v18 or higher
- npm or yarn
- Git

## 🚀 Getting Started

### Installation

1. **Clone the repository:**
```bash
git clone <YOUR_REPOSITORY_URL>
cd tharshan-r-portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**

Create a `.env.local` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Start the development server:**
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run build:dev` | Build for development (non-minified) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm test` | Run unit tests |
| `npm run test:watch` | Run tests in watch mode |

## 📂 Project Structure

```
src/
├── components/
│   ├── portfolio/              # Portfolio-specific components
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── MetricsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── EngineeringSection.tsx
│   │   ├── ArchitectureSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── NetworkBackground.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── SectionReveal.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── EngineeringToggle.tsx
│   └── ui/                     # Shadcn/ui components (40+ components)
├── hooks/
│   ├── use-theme.tsx           # Theme management
│   ├── use-engineering-mode.tsx # Engineering mode toggle
│   ├── use-mobile.tsx          # Mobile detection
│   └── use-toast.ts            # Toast notifications
├── integrations/
│   └── supabase/
│       ├── client.ts           # Supabase client initialization
│       └── types.ts            # TypeScript types
├── lib/
│   └── utils.ts                # Utility functions
├── pages/
│   ├── Index.tsx               # Main portfolio page
│   └── NotFound.tsx            # 404 page
├── App.tsx                     # Main App component
├── main.tsx                    # Entry point
└── index.css                   # Global styles

supabase/
├── functions/
│   └── send-contact-email/     # Edge function for email sending
└── migrations/                 # Database migrations

public/
└── robots.txt                  # SEO configuration
```

## 🎨 Features in Detail

### 1. **Hero Section**
Dynamic introduction with animated background network effects. Serves as the landing page with call-to-action buttons.

### 2. **Metrics Dashboard**
Displays key statistics including:
- Years of experience
- Projects completed
- Clients/companies worked with
- Code commits/lines written

### 3. **Projects Showcase**
Filterable project portfolio with:
- Project descriptions
- Technology stack
- Links to live demos and repositories
- Visual project cards

### 4. **Experience Timeline**
Professional work history with:
- Company names and positions
- Duration and key achievements
- Role descriptions
- Technologies used

### 5. **Skills Section**
Categorized technical skills:
- Programming languages
- Frontend technologies
- Backend & databases
- DevOps & tools
- Soft skills

### 6. **Engineering Mode**
Toggle to reveal:
- System architecture diagrams
- Technical implementation details
- Code quality metrics
- Advanced technical insights

### 7. **Contact Form**
Integrated contact system with:
- Form validation
- Email notifications via Deno edge functions
- Resend email delivery
- Supabase database storage
- User-friendly feedback

## 🔧 Backend Setup

### Supabase Configuration

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Set up the database schema:
```sql
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);
```

3. Deploy edge function:
```bash
supabase functions deploy send-contact-email
```

### Environment Variables

Create `.env` file in the root:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode for development:
```bash
npm run test:watch
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Deployment Options

- **Vercel** (Recommended) - Optimized for Next.js but works great with Webpack
- **Netlify** - Excellent static site hosting
- **GitHub Pages** - Free GitHub-hosted alternative
- **AWS S3 + CloudFront** - Enterprise solution

### Pre-deployment Checklist
- [ ] Environment variables configured
- [ ] Tests passing (`npm test`)
- [ ] ESLint passing (`npm run lint`)
- [ ] Build successful (`npm run build`)
- [ ] Portfolio content updated
- [ ] Links and contact form tested

## 🤝 Contributing

While this is a personal portfolio, contributions and feedback are welcome! If you notice any issues or have suggestions, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the MIT License.

## ✉️ Contact

Have a question or want to connect? Use the contact form on the portfolio website or reach out directly through your preferred method.

---

**Built with ❤️ by Tharshan R**
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
