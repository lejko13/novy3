import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../lib/ThemeContext'


import { useNavigate } from 'react-router-dom';



const navLinks = [
  { label: "Domov", id: "hero" },
  { label: "Ako to funguje", id: "ako-to-funguje" },
  // { label: "Cenník", id: "cennik" },
  { label: "Trénerka", id: "trenerka" },
  { label: "Galéria", id: "galeria" },
  { label: "Kontakt", id: "kontakt" },
];
const locations = [
  { name: "Martina Benku", href: "/pobocky/martina-benku" },
  { name: "Šváby", href: "/pobocky/svaby" },
  { name: "Lazovná BB", href: "/pobocky/lazovna-bb" },
];

export default function Header() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [locDropOpen, setLocDropOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const isDark = theme === 'dark';



  useEffect(() => {

    if (isDark) {
    console.log("teraz");
    
  }
  },[isDark])
  

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Check if a location sub-page is active
  const isPobockyActive = location.pathname.startsWith('/pobocky');
  const activeSlug = location.pathname.replace('/pobocky/', '');
const logo_tmave = '/svetle.png'
const logo_svetla = '/tmave.png'
  return (


    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
        : 'bg-background/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">

         {isDark ?<img src={logo_tmave} alt="Cvič Sám" className="h-9" /> :  <img src={logo_svetla} alt="Cvič Sám" className="h-9" />}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => {
                navigate("/");

                setTimeout(() => {
                  document.getElementById(link.id)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }, 100);
              }}
              className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              {link.label}
            </button>
            ))}

            {/* Pobočky dropdown */}
            <div className="relative"
              onMouseEnter={() => setLocDropOpen(true)}
              onMouseLeave={() => setLocDropOpen(false)}>

              <button className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                isPobockyActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}>
                Pobočky <ChevronDown className={`w-3.5 h-3.5 transition-transform ${locDropOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {locDropOpen && (
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-52 bg-popover border border-border rounded-lg shadow-xl overflow-hidden">
                    {locations.map(loc => {
                      const isActive = location.pathname === loc.href;
                      return (
                        <Link key={loc.name} to={loc.href}
                          className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${
                            isActive
                              ? 'text-primary bg-primary/8 font-semibold'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                          }`}>
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />}
                          {loc.name}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/faq"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/faq' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}>
              FAQ
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            {/* Theme toggle */}
            <button onClick={toggle}
              className="w-9 h-9 rounded-md border border-border hover:bg-muted flex items-center justify-center transition-colors"
              title={isDark ? 'Prepnúť na svetlý režim' : 'Prepnúť na tmavý režim'}>
              {isDark
                ? <Sun className="w-4 h-4 text-muted-foreground" />
                : <Moon className="w-4 h-4 text-muted-foreground" />
              }
            </button>
            <a href="https://gymify.sk/gyms/cvic-sam/booking" target="_blank" rel="noopener noreferrer"
              className="text-sm font-bold bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded-md transition-colors">
              REZERVOVAŤ
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-foreground">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-popover border-t border-border overflow-hidden">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(link => (
                <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors">
                  {link.label}
                </a>
              ))}
              <div className="border-t border-border pt-2 mt-2 space-y-1">
                {locations.map(loc => {
                  const isActive = location.pathname === loc.href;
                  return (
                    <Link key={loc.name} to={loc.href} onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-2.5 text-sm rounded-md transition-colors ${
                        isActive ? 'text-primary bg-primary/8 font-semibold' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}>
                      📍 {loc.name}
                    </Link>
                  );
                })}
              </div>
              <div className="flex gap-2 pt-3 pb-1">
                <button onClick={() => { toggle(); setMobileOpen(false); }}
                  className="flex-shrink-0 w-10 h-10 border border-border rounded-md flex items-center justify-center hover:bg-muted transition-colors">
                  {isDark ? <Sun className="w-4 h-4 text-muted-foreground" /> : <Moon className="w-4 h-4 text-muted-foreground" />}
                </button>
                <a href="https://gymify.sk/gyms/cvic-sam/booking" target="_blank" rel="noopener noreferrer"
                  className="flex-1 block text-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2.5 rounded-md transition-colors text-sm">
                  REZERVOVAŤ
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}