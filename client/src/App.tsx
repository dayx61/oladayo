import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Components
import PremiumNavigation from './components/PremiumNavigation';
import Footer from './components/Footer';
import ChatbotWidget from './components/ChatbotWidget';

// Pages - Lazy loaded for code splitting
const PremiumHome = React.lazy(() => import('./pages/PremiumHome'));
const About = React.lazy(() => import('./pages/About'));
const Experience = React.lazy(() => import('./pages/Experience'));
const Skills = React.lazy(() => import('./pages/Skills'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Testimonials = React.lazy(() => import('./pages/Testimonials'));
const Resources = React.lazy(() => import('./pages/Resources'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Chat = React.lazy(() => import('./pages/Chat'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-premium-accent"></div>
  </div>
);

// Styles
import './App.css';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen transition-colors duration-300 light:bg-light-bg light:text-light-text dark:bg-dark-bg dark:text-dark-text">
          <PremiumNavigation />
          <main className="pt-16">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<PremiumHome />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/chat" element={<Chat />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ChatbotWidget />
        </div>
      </Router>
    </ThemeProvider>
  );
}
