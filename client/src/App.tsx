import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import PremiumNavigation from './components/PremiumNavigation';
import Footer from './components/Footer';
import ChatbotWidget from './components/ChatbotWidget';
import PremiumHome from './pages/PremiumHome';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Testimonials from './pages/Testimonials';
import Resources from './pages/Resources';
import Analytics from './pages/Analytics';
import Contact from './pages/Contact';
import './App.css';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen transition-colors duration-300
          light:bg-light-bg light:text-light-text
          dark:bg-dark-bg dark:text-dark-text">
          <PremiumNavigation />
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
          </Routes>
          <Footer />
          <ChatbotWidget />
        </div>
      </Router>
    </ThemeProvider>
  );
}
