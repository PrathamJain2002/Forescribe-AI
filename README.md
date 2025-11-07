# Forescribe AI - Frontend Assignment

A high-quality, responsive, and interactive frontend interface built with Next.js, TypeScript, and TailwindCSS. This project implements a modern signup/login interface with smooth animations and a multi-page structure.

## 🌐 Live Demo

The project is deployed and available at: **[https://forescribe-ai-taupe.vercel.app/](https://forescribe-ai-taupe.vercel.app/)**

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
│   ├── BackgroundGrid.tsx    # Background grid with random Group images
│   ├── DarkModeToggle.tsx    # Dark mode toggle component
│   ├── Logo.tsx              # Logo component
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
- **Background Grid**: 5-column responsive grid displaying random Group images (13 different images) that dim when the modal is open
  - Staggered layout: odd columns start at top, even columns start at middle of odd rows
  - Images scale responsively to fill screen vertically
  - Grid positioned at 70% from top, allowing rows to be cut off at top/bottom
- **Gradient Overlay**: Translucent gradient from #000000 (top-left) to #8B3DFF (bottom-right)
- **Fixed Header**: Logo positioned absolutely at top-left (43px from top, 120px from left)
- **Centered Modal**: Welcome modal with:
  - Animated Forescribe logo (GIF)
  - "Welcome to Forescribe" title (Poppins font, 22px, weight 600)
  - "Continue with Google" button (#8B3DFF background) with Google logo
  - "Continue with Microsoft" button (#4A4A4A background) with Microsoft logo
  - Individual loading states for each button (only clicked button shows spinner)
  - Legal text positioned below modal with links to Terms & Conditions and Privacy Policy
  - Blur effect applied to background directly behind modal

### Animations
- **Hover Effects**: Buttons scale on hover (1.02x) and tap (0.98x)
- **Page Transitions**: Smooth fade-in/out transitions between pages using Framer Motion
- **Content Reveals**: Staggered animations for background grid items (0.05s delay between items)
- **Form Interactions**: Focus ring animations on input fields
- **Loading States**: Individual spinner animations for each signup button (only the clicked button shows loader)
- **Modal Animations**: Scale and fade-in animations for modal appearance
- **Header Animations**: Fade-in and slide-down animation for header logo

## 🔧 Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Hook Form**: Form validation and management
- **Lucide React**: Icon library (for future enhancements)

## 📱 Responsive Breakpoints

- **Background Grid**: Always 5 columns (one centered, 2 on each side)
  - Images scale responsively based on screen width
  - Extra rows added for mobile/tablet to ensure full screen coverage
  - Mobile (< 768px): 5 extra rows
  - Tablet (768px - 1024px): 3 extra rows
  - Desktop (> 1024px): 2 extra rows
- **Contact Page**: Scrollable content with sticky header
- **Modal**: Centered with max-width constraints for all screen sizes

## 🎯 Assumptions Made

1. **Authentication**: The signup buttons simulate authentication. In a production environment, you would integrate with actual OAuth providers (Google, Microsoft).

2. **Image Sources**: Background grid uses 13 Group images (Group 39685.png through Group 39701.png) from the public folder. Each grid item randomly selects one of these images when rendered.

3. **Form Submission**: The contact form simulates submission. In production, this would connect to a backend API.

4. **Dark Mode**: Dark mode is set as default. The toggle component is functional but primarily for demonstration.

5. **Routing**: After "signing in", users are redirected to `/home`. The signup page is at the root `/`.

6. **Background Grid**: The background grid displays a 5-column layout (one centered, 2 on each side) with random Group images. Odd columns start at the top, even columns start at the middle of odd rows, creating a staggered visual effect. Images are scaled responsively (1.3x scale factor) and positioned at 70% from the top to ensure full screen coverage.
7. **Non-scrollable Background**: The signup page background is fixed and non-scrollable. Only the contact page has scrolling enabled.
8. **Button Alignment**: Both signup buttons have their logos and text aligned to start at the same horizontal position while being centered within the button.

## ✨ Additional Features Implemented

1. **Individual Button Loading States**: Each signup button (Google/Microsoft) shows its own loading spinner independently
2. **Random Image Selection**: Background grid randomly selects from 13 Group images for visual variety
3. **Staggered Grid Layout**: Odd and even columns are offset vertically for visual interest
4. **Gradient Overlay**: Custom gradient overlay with adjustable opacity for better modal visibility
5. **Blur Effect**: Localized blur effect applied only to the area behind the modal
6. **Form Validation**: Complete form validation with error messages using react-hook-form
7. **Scroll Management**: Contact page has scrolling enabled while signup page remains fixed
8. **Accessibility**: Proper semantic HTML, ARIA labels, keyboard navigation (ESC to close modal)
9. **Responsive Image Scaling**: Background images scale dynamically to fill screen without cutting off
10. **Terms & Privacy Pages**: Complete legal pages linked from the signup modal

## 🚀 Deployment

### Live Demo

The project is deployed on Vercel and accessible at: **[https://forescribe-ai-taupe.vercel.app/](https://forescribe-ai-taupe.vercel.app/)**

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
- Logo component uses Next.js Image component with unoptimized prop
- Background grid uses regular `<img>` tags for better control over responsive sizing
- TailwindCSS is configured with custom colors matching the design
- TypeScript strict mode is enabled for better type safety
- All comments have been removed from the codebase for production readiness
- Gradient overlay uses inline styles for precise color control
- Modal uses backdrop-filter for blur effect (with webkit prefix for browser compatibility)

## 🐛 Known Limitations

- OAuth integration is simulated (not connected to real providers)
- Form submissions are simulated (no backend integration)

## 📄 License

This project is created as part of a frontend assignment.

## 👤 Author

Created as part of the Forescribe AI frontend assignment.

---

**Note**: This is a frontend-only implementation. Backend integration, authentication, and data persistence would need to be implemented separately for a production application.

