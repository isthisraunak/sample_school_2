import { useState, useEffect } from 'react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Campus Life', href: '#campus' },
    { name: 'Faith', href: '#faith' },
  ];

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center text-primary">
          <div className="h-10 w-10 relative border-2 border-primary flex items-center justify-center bg-white">
            <span className="font-serif font-bold text-xl">GL</span>
          </div>
          <div className="ml-2 leading-tight">
            <div className="font-serif font-bold text-lg">Golden Light</div>
            <div className="text-xs uppercase tracking-wider text-primary-light">Christian Academy</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-gray-600 hover:text-primary transition duration-150"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-md transition duration-150"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-md text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 pt-20 px-6">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-medium text-gray-600 hover:text-primary transition duration-150"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              className="w-full text-center py-3 text-white bg-primary hover:bg-primary-dark rounded-md transition duration-150"
              onClick={handleContactClick}
            >
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
