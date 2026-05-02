import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Check } from 'lucide-react';

const specialties = [
  "Naberanie svalovej hmoty", "Redukcia telesnej hmotnosti",
  "Mobilita a držanie tela", "Formovanie postavy",
  "Stravovacie plány", "Zdravé stravovanie",
];

export default function Trainer() {
  return (
    <section id="trenerka" className="bg-secondary/40 py-20 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img src="https://cvicsam.sk/wp-content/uploads/2025/11/foto_fitko-009-1-scaled.jpg"
                alt="Trénerka Michaela"
                className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary rounded-xl p-4 hidden lg:block">
              <p className="text-primary-foreground text-xs font-bold uppercase tracking-widest">Certifikovaná</p>
              <p className="text-primary-foreground/80 text-xs">trénerka 1. stupňa</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Trénerka</p>
            <h2 className="text-3xl lg:text-5xl font-black uppercase text-foreground">Michaela</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Michaela je certifikovaná trénerka 1. stupňa so zameraním na ženskú klientelu.
              Pomáha ženám budovať silu, formovať postavu a vytvárať zdravší životný štýl bez extrémov.
            </p>
            <blockquote className="mt-5 border-l-2 border-primary pl-4 text-muted-foreground italic text-sm">
              „Pomôžem ti vytvoriť tvoje zdravšie ja po fyzickej aj mentálnej stránke."
            </blockquote>
            <div className="grid grid-cols-2 gap-2 mt-6">
              {specialties.map(s => (
                <div key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" /> {s}
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-8">
              <a href="https://www.instagram.com/michell.coach/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-card border border-border hover:border-primary/40 text-foreground px-4 py-2.5 rounded-md text-sm font-medium transition-colors hover:shadow-sm">
                <Instagram className="w-4 h-4 text-primary" /> @michell.coach
              </a>
              <a href="mailto:michell.onlinecoach@gmail.com"
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2.5 rounded-md text-sm font-medium transition-colors">
                <Mail className="w-4 h-4" /> Kontaktovať
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}