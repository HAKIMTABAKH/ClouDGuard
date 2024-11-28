import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Technology from './pages/Technology';
import ContactUs from './pages/ContactUs';
import GetStarted from './pages/get-started';

function App() {
  return (
    <Router> {/* Ensure that Router wraps the entire application */}
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/get-started" element={<GetStarted />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
