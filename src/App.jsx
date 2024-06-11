import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Vision from './components/Vision/Vision';
import ServiceCarousel from './components/ServiceCarousel/ServiceCarousel';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

const Home = () => (
  <>
    <Hero />
    <Services />
    <Vision />
    <ServiceCarousel />
    <ContactForm />
    <Footer />
  </>
);
const Servicios = () => <div>Servicios</div>;
const Nosotros = () => <div>Nosotros</div>;
const Testimonios = () => <div>Testimonios</div>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/testimonios" element={<Testimonios />} />
      </Routes>
    </Router>
  );
};

export default App;
