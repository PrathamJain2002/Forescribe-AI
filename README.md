# Forescribe AI - Frontend Assignment

A high-quality, responsive, and interactive frontend interface built with Next.js, TypeScript, and TailwindCSS. This project implements a modern signup/login interface with smooth animations and a multi-page structure.

## 🚀 Features

- **Modern Design**: Dark-themed interface matching the Figma design
- **Responsive Layout**: Fully responsive for desktop, tablet, and mobile views
- **Smooth Animations**: Implemented using Framer Motion for hover effects, page transitions, and content reveals
- **Multi-page Structure**: Home, Contact Us, Terms & Conditions, and Privacy Policy pages
- **Form Validation**: Contact form with validation using react-hook-form
- **Dark Mode**: Built-in dark mode support (default)
- **Accessibility**: Semantic HTML and proper ARIA roles
- **Type Safety**: Full TypeScript implementation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository** (or navigate to the project directory):
   ```bash
   cd "D:\Pratham\Forescribe AI"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
forescribe-ai/
├── app/
│   ├── contact/
│   │   └── page.tsx          # Contact Us page with form
│   ├── home/
│   │   └── page.tsx          # Home page after login
│   ├── privacy/
│   │   └── page.tsx          # Privacy Policy page
│   ├── terms/
│   │   └── page.tsx          # Terms & Conditions page
│   ├── globals.css           # Global styles and Tailwind imports
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Signup/Login page (landing)
├── components/
│   ├── BackgroundGrid.tsx    # Grid of content cards
│   ├── DarkModeToggle.tsx    # Dark mode toggle component
│   ├── PageTransition.tsx    # Page transition wrapper
│   ├── SignupModal.tsx       # Signup/Login modal
│   └── SignupPage.tsx        # Main signup page component
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🎨 Design Implementation

### Signup/Login Page
- **Background Grid**: Displays a grid of content cards (people, companies, services) that dim when the modal is open
- **Centered Modal**: Welcome modal with:
  - Forescribe logo
  - "Welcome to Forescribe" title
  - "Continue with Google" button (purple)
  - "Continue with Microsoft" button (gray)
  - Legal text with links to Terms & Conditions and Privacy Policy

### Animations
- **Hover Effects**: Cards and buttons scale and lift on hover
- **Page Transitions**: Smooth fade-in/out transitions between pages
- **Content Reveals**: Staggered animations for grid items
- **Form Interactions**: Focus animations on input fields
- **Loading States**: Spinner animations during form submission

## 🔧 Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Hook Form**: Form validation and management
- **Lucide React**: Icon library (for future enhancements)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (2 columns for grid)
- **Tablet**: 768px - 1024px (3 columns for grid)
- **Desktop**: > 1024px (4 columns for grid)

## 🎯 Assumptions Made

1. **Authentication**: The signup buttons simulate authentication. In a production environment, you would integrate with actual OAuth providers (Google, Microsoft).

2. **Image Sources**: Background grid uses placeholder images from Unsplash. In production, these would be replaced with actual user/company images.

3. **Form Submission**: The contact form simulates submission. In production, this would connect to a backend API.

4. **Dark Mode**: Dark mode is set as default. The toggle component is functional but primarily for demonstration.

5. **Routing**: After "signing in", users are redirected to `/home`. The signup page is at the root `/`.

6. **Content Cards**: The background grid displays sample data. In production, this would be fetched from an API.

## ✨ Additional Features Implemented

1. **Dark Mode Toggle**: Functional dark mode toggle component (though dark mode is default)
2. **Form Validation**: Complete form validation with error messages
3. **Loading States**: Visual feedback during async operations
4. **Accessibility**: Proper semantic HTML, ARIA labels, and keyboard navigation
5. **Smooth Transitions**: Page transitions and micro-interactions throughout
6. **Responsive Navigation**: Mobile-friendly navigation menu
7. **Terms & Privacy Pages**: Complete legal pages linked from the signup modal

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live!

### Manual Build

```bash
npm run build
npm start
```

## 📝 Development Notes

- The project uses Next.js 14 App Router
- All components are client-side rendered where needed (`'use client'`)
- Images are optimized using Next.js Image component
- TailwindCSS is configured with custom colors matching the design
- TypeScript strict mode is enabled for better type safety

## 🐛 Known Limitations

- OAuth integration is simulated (not connected to real providers)
- Form submissions are simulated (no backend integration)
- Image optimization requires external image domains to be configured

## 📄 License

This project is created as part of a frontend assignment.

## 👤 Author

Created as part of the Forescribe AI frontend assignment.

---

**Note**: This is a frontend-only implementation. Backend integration, authentication, and data persistence would need to be implemented separately for a production application.

