'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Pacifico, serif' }}>
            logo
          </div>
          
          <ul className="hidden md:flex space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('publications')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              >
                Publications
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              >
                Contact
              </button>
            </li>
          </ul>

          <button className="md:hidden text-gray-700 cursor-pointer">
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}