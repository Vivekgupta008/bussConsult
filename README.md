# 🌐 Business Consultancy Website

A sleek, modern, and interactive website for a Business Consultancy Firm built with React.js, featuring stunning animations, responsive design, and premium user experience.

## ✨ Features

### 🎨 Modern Design
- **Glassmorphism Effects**: Beautiful glass-like UI elements with backdrop blur
- **Gradient Backgrounds**: Eye-catching gradient designs throughout
- **Dark/Light Mode**: Smooth theme switching with animated transitions
- **Responsive Design**: Perfectly optimized for desktop, tablet, and mobile

### 🚀 Interactive Components
- **Hero Section**: Animated background with particle effects and smooth CTAs
- **About Us**: Interactive timeline with company history and team cards
- **Services**: Expandable service cards with 3D hover effects
- **Portfolio**: Interactive case study slider with detailed results
- **Testimonials**: Swiper.js carousel with auto-play and manual navigation
- **Contact Form**: Interactive form with floating labels and validation

### 🎭 Advanced Animations
- **Framer Motion**: Smooth page transitions and scroll-triggered animations
- **GSAP**: Advanced scroll animations and parallax effects
- **Custom Animations**: Hover effects, loading screens, and micro-interactions
- **Scroll Effects**: Elements animate in as you scroll down the page

### 📱 User Experience
- **Sticky Navigation**: Navigation bar that changes style on scroll
- **Smooth Scrolling**: Seamless navigation between sections
- **Loading Screen**: Animated preloader with company branding
- **Scroll to Top**: Animated button for easy navigation
- **Form Validation**: Real-time form validation with success states

## 🛠️ Tech Stack

- **React.js** - Core framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Swiper.js** - Touch slider component
- **React Router** - Client-side routing
- **Lucide React** - Modern icon library
- **AOS** - Animate on scroll library

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd business-consultancy-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy!

3. **Your site will be live at**: `https://your-project-name.vercel.app`

### Deploy on Other Platforms

- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions
- **Firebase Hosting**: Use Firebase CLI
- **AWS S3**: Upload `dist` folder to S3 bucket

### Environment Variables

No environment variables are required for this project. All configurations are handled client-side.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Hero.jsx        # Hero section with animations
│   ├── About.jsx       # About section with timeline
│   ├── Services.jsx    # Services with expandable cards
│   ├── Portfolio.jsx   # Case studies slider
│   ├── Testimonials.jsx # Client testimonials carousel
│   ├── Contact.jsx     # Contact form and information
│   ├── Navigation.jsx  # Sticky navigation bar
│   ├── Footer.jsx      # Footer with links and info
│   ├── LoadingScreen.jsx # Animated loading screen
│   └── ScrollToTop.jsx # Scroll to top button
├── hooks/              # Custom React hooks
│   └── useTheme.js     # Theme context and management
├── assets/             # Static assets
│   ├── images/         # Image files
│   ├── videos/         # Video files
│   └── icons/          # Icon files
├── App.jsx            # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎯 Key Sections

### 1. Hero Section
- Animated background with particle effects
- Compelling tagline and call-to-action buttons
- Smooth scroll-down arrow animation
- Key statistics display

### 2. About Us
- Interactive timeline of company history
- Team member cards with hover animations
- Statistics counters with animations
- Company achievements showcase

### 3. Services
- Grid layout of service offerings
- Expandable cards with detailed information
- 3D hover effects and smooth transitions
- Service features and benefits

### 4. Portfolio/Case Studies
- Interactive slider with case study details
- Before/after results with animated metrics
- Client success stories
- Industry-specific examples

### 5. Testimonials
- Swiper.js carousel with client reviews
- Auto-play functionality with manual controls
- Animated star ratings
- Client information and company details

### 6. Contact Us
- Interactive contact form with validation
- Contact information cards
- Map integration placeholder
- Form submission with success states

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Blue gradient
- Secondary colors: Slate grays
- Accent colors: Various gradients

### Animations
- Modify animation durations in component files
- Adjust scroll trigger points
- Customize hover effects

### Content
- Update text content in component files
- Replace placeholder images with actual assets
- Modify contact information and links

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌟 Performance Features

- **Lazy Loading**: Images and components load as needed
- **Optimized Animations**: Smooth 60fps animations
- **Efficient Bundling**: Vite's optimized build process
- **Minimal Dependencies**: Only essential libraries included

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support and questions, please contact:
- Email: hello@businessconsultancy.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ for business success