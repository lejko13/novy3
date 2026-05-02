import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';

const LOGO_URL = "https://media.base44.com/images/public/user_69dcd0ab7f89db2e942fbb31/77c707a77_civim-logo-modra.png";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={LOGO_URL} alt="Cvič Sám" className="h-10 mb-4" />
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
            <div className="space-y-2">
              {[
                { label: "Domov", href: "#hero" },
                { label: "Ako to funguje", href: "#ako-to-funguje" },
                { label: "Cenník", href: "#cennik" },
                { label: "Galéria", href: "#galeria" },
                { label: "Kontakt", href: "#kontakt" },
              ].map(l => (
                <a key={l.label} href={l.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</a>
              ))}
              <Link to="/faq" className="block text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Pobočky</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-foreground/70">Martina Benku, Prešov</p>
                <p className="text-xs text-muted-foreground">Martina Benku 7887/1A, 080 01 Prešov</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground/70">Šváby, Prešov</p>
                <p className="text-xs text-muted-foreground">Švábska 41/A, 080 05 Prešov</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground/70">Lazovná BB</p>
                <p className="text-xs text-muted-foreground">Lazovná ul., 974 01 Banská Bystrica</p>
              </div>
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