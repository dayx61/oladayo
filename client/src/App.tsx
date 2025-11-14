import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PremiumNavigation from './components/PremiumNavigation';
import Footer from './components/Footer';
import ChatbotWidget from './components/ChatbotWidget';
import PremiumHome from './pages/PremiumHome';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Analytics from './pages/Analytics';
import Contact from './pages/Contact';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-premium-darker text-white">
        <PremiumNavigation />
        <Routes>
          <Route path="/" element={<PremiumHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ChatbotWidget />
      </div>
    </Router>
  );
}
