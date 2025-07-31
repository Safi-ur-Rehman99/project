# 🧸 Kids Corner - Sustainable Pre-Loved Toys E-commerce Platform

> **Giving toys a second chance to bring joy while building a sustainable future for our children**

Kids Corner is a modern, full-featured e-commerce platform specializing in curated, high-quality pre-loved children's toys. Built with React and Firebase, this platform combines sustainability with affordability, making quality toys accessible to families across Pakistan while promoting environmental consciousness.

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Latest-orange.svg)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-4.x-646CFF.svg)](https://vitejs.dev/)

---

## ✨ Features

### 🛍️ **E-commerce Functionality**
- **Product Catalog**: Browse curated pre-loved toys with detailed information
- **Smart Filtering**: Filter by category, condition, price range, and more
- **Shopping Cart**: Persistent cart with real-time updates and quantity management
- **Product Search**: Intelligent search across product names and descriptions
- **Responsive Views**: Grid and list view options for product browsing

### 🔐 **Authentication & User Management**
- **Firebase Authentication**: Secure user registration and login
- **Social Login**: Google and Facebook authentication (ready for integration)
- **User Profiles**: Personalized user experience with profile management
- **Protected Routes**: Secure access to user-specific features

### 🎨 **Modern UI/UX**
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Gradient Design System**: Beautiful pink and teal color scheme
- **Interactive Elements**: Smooth animations and hover effects
- **Toast Notifications**: Real-time feedback for user actions
- **Accessibility**: WCAG compliant design patterns

### 🌱 **Sustainability Focus**
- **Condition Indicators**: Clear labeling of toy conditions (Like New, Pre-loved, Good)
- **Environmental Messaging**: Promotes circular economy and waste reduction
- **Quality Assurance**: Emphasis on safety and quality checks

### 📱 **User Experience**
- **Mobile-First**: Optimized mobile experience with touch-friendly interactions
- **Fast Loading**: Vite-powered development with optimized builds
- **SEO Friendly**: Structured markup and semantic HTML
- **Progressive Enhancement**: Works across different browser capabilities

---

## 🏗️ **Technical Architecture**

### **Frontend Stack**
- **React 18.2.0** - Modern component-based UI library
- **React Router DOM** - Client-side routing and navigation
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable SVG icons
- **Vite** - Fast build tool and development server

### **Backend & Services**
- **Firebase Authentication** - User management and security
- **Firebase Realtime Database** - Data storage and real-time sync
- **Firebase Hosting** - Static site hosting and CDN

### **State Management**
- **React Context API** - Global state management for cart and auth
- **useReducer Hook** - Complex state logic for shopping cart
- **Custom Hooks** - Reusable logic abstraction

### **Development Tools**
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **Git** - Version control with semantic commits

---

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 16.x or higher
- npm or yarn package manager
- Firebase account and project setup

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/kids-corner.git
   cd kids-corner
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_API_KEY=your_firebase_api_key
   VITE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_PROJECTID=your_firebase_project_id
   VITE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_MESSAGE_SENDER_ID=your_firebase_messaging_sender_id
   VITE_APP_ID=your_firebase_app_id
   VITE_DATABASE_URL=your_firebase_database_url
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

---

## 📁 **Project Structure**

```
src/
├── components/          # Reusable UI components
│   ├── Footer.jsx      # Site footer with newsletter signup
│   ├── Navbar.jsx      # Navigation with auth integration
│   ├── ProductCard.jsx # Product display component
│   └── Toast.jsx       # Notification system
├── context/            # React Context providers
│   ├── AuthContext.jsx # Authentication state management
│   └── CartContext.jsx # Shopping cart state management
├── data/               # Static data and mock content
│   └── products.js     # Product catalog and categories
├── pages/              # Route components
│   ├── About.jsx       # About page with company info
│   ├── Cart.jsx        # Shopping cart and checkout
│   ├── Contact.jsx     # Contact form and information
│   ├── Home.jsx        # Landing page with featured content
│   ├── Login.jsx       # User authentication
│   ├── ProductDetail.jsx # Individual product pages
│   ├── Shop.jsx        # Product catalog with filtering
│   └── Signup.jsx      # User registration
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
├── index.css           # Tailwind CSS imports
└── firebase.config.js  # Firebase configuration
```

---

## 🔧 **Configuration**

### **Firebase Setup**
1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password provider
3. Set up Realtime Database with appropriate security rules
4. Copy your Firebase config values to the `.env` file

### **Tailwind CSS Configuration**
The project uses a custom Tailwind configuration with:
- Custom color palette (primary teal, secondary pink)
- Extended animations and keyframes
- Custom font families
- Responsive breakpoints optimization

### **Build Configuration**
Vite configuration includes:
- React plugin for JSX support
- Optimized dependency handling
- Development server with HMR

---

## 🛠️ **Available Scripts**

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically

# Deployment
npm run deploy       # Deploy to Firebase Hosting (requires setup)
```

---

## 🎨 **Design System**

### **Color Palette**
- **Primary**: `#1e7a96` (Teal) - Trust, reliability, sustainability
- **Secondary**: `#f472b6` (Pink) - Playfulness, joy, warmth
- **Accent**: `#a7c7d4` (Light blue) - Calm, serenity
- **Success**: Green tones for positive actions
- **Warning**: Yellow/orange for alerts
- **Error**: Red tones for errors

### **Typography**
- **System fonts** for optimal performance
- **Font weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Responsive sizing** with mobile-first approach

### **Components**
All components follow consistent patterns:
- Rounded corners (8px, 12px, 16px)
- Subtle shadows and gradients
- Smooth transitions (200ms duration)
- Accessible focus states