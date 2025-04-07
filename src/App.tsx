import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CoreValues from './components/CoreValues';
import Quote from './components/Quote';
import AcademicPrograms from './components/AcademicPrograms';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main className={`flex-grow ${mobileMenuOpen ? 'hidden' : 'block'}`}>
        <Hero />
        <CoreValues />
        <Quote />
        <AcademicPrograms />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
