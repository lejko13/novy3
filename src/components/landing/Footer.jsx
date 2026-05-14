import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';

import { useTheme } from '../../lib/ThemeContext'

import {siteData} from '../../data/headerfooter'
import { useNavigate } from 'react-router-dom';

const LOGO_URL = "https://media.base44.com/images/public/user_69dcd0ab7f89db2e942fbb31/77c707a77_civim-logo-modra.png";



 const logo_tmave = '/svetle.png'
const logo_svetla = '/tmave.png'


console.log(siteData);





export default function Footer() {
  const navigate = useNavigate();

   const { theme, toggle } = useTheme();


    const isDark = theme === "dark";
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
             {isDark ?<img src={logo_tmave} alt="Cvič Sám" className="h-10 mb-4" /> :  <img src={logo_svetla} alt="Cvič Sám" className="h-10 mb-4" />}
            {/* <img src={LOGO_URL} alt="Cvič Sám"  /> */}
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Súkromná posilňovňa iba pre vás. Bez čakania, bez davov. Otvorené 24/7.
            </p>
            <div className="flex gap-2 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61578983385535" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-background border border-border hover:border-primary/40 flex items-center justify-center transition-colors">
                <Facebook className="w-3.5 h-3.5 text-primary" />
              </a>
              <a href="https://www.instagram.com/cvic_sam/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-background border border-border hover:border-primary/40 flex items-center justify-center transition-colors">
                <Instagram className="w-3.5 h-3.5 text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Navigácia</h4>
<nav className="flex flex-col items-center gap-2  items-start">
  {siteData.navLinks.map(link => {

    // 🔹 SCROLL SEKCIE (FIXED)
    if (link.type === "scroll") {
      return (
        <button
      
          key={link.label}
          onClick={() => {
            const scrollToSection = () => {
              document.getElementById(link.id)?.scrollIntoView({
                behavior: "smooth",
              });
            };

            // ak si už na home → scroll hneď
            if (location.pathname === "/") {
              scrollToSection();
              return;
            }

            // ak nie si na home → najprv naviguj, potom scroll
            navigate("/");

            setTimeout(() => {
              scrollToSection();
            }, 150);
          }}
          className="text-sm text-muted-foreground  w-full  flex items-start hover:text-foreground font-medium transition-colors"
        >
          {link.label}
        </button>
      );
    }

    // 🔹 ROUTE (napr. FAQ)
    if (link.type === "route") {
      const isActive = location.pathname === link.href;

      return (
        <Link
          key={link.label}
          to={link.href}
          className={`text-sm font-medium transition-colors   w-full  flex items-start ${
            isActive
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {link.label}
        </Link>
      );
    }

    return null; // 👈 dropdown (Pobočky) odstránený
  })}
</nav>


            
          </div>

         <div>
  <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
    Pobočky
  </h4>

        <div className="space-y-3 gap-2 flex flex-col">
          {siteData.navLinks
            .find(link => link.type === "dropdown" && link.label === "Pobočky")
            ?.items.map(item => (
              <Link key={item.name} to={item.href}>
                <div>
                  <p className="text-sm font-semibold text-foreground/70">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.address}
                  </p>
                </div>
              </Link>
            ))}
        </div>
</div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Cvič Sám. Všetky práva vyhradené.</p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Obchodné podmienky</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Ochrana súkromia</a>
          </div>
        </div>
      </div>
    </footer>
  );
}