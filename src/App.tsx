import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import BrandDesigning from './pages/BrandDesigning';
import VisualCommunication from './pages/VisualCommunication';
import Videos from './pages/Videos';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brand-designing" element={<BrandDesigning />} />
            <Route path="/visual-communication" element={<VisualCommunication />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
