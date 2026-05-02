import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { LOCATIONS } from '../../lib/locationsData';

export default function Locations() {
  return (
    <section id="pobocky" className="bg-secondary/40 py-20 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Naše prevádzky</p>
          <h2 className="text-3xl lg:text-5xl font-black uppercase text-foreground">Pobočky</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden group flex flex-col hover:shadow-lg transition-all"
            >
              <div className="relative h-52 overflow-hidden flex-shrink-0">
                <img src={loc.img} alt={loc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 dark:opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                {loc.slug === 'lazovna-bb' && (
                  <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                    Nová!
                  </span>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-black uppercase text-foreground">{loc.title}</h3>
                <div className="flex items-center gap-2 mt-1.5 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3 text-primary flex-shrink-0" />
                  {loc.address}
                </div>
                <p className="text-sm text-muted-foreground mt-2.5 leading-relaxed flex-1">{loc.desc}</p>
                <div className="flex gap-2 mt-4">
                  <Link to={`/pobocky/${loc.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-secondary hover:bg-secondary/80 border border-border text-secondary-foreground font-semibold px-4 py-2.5 rounded-md text-xs uppercase tracking-wide transition-colors">
                    Detail <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a href={loc.bookHref} target="_blank" rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-4 py-2.5 rounded-md text-xs uppercase tracking-wide transition-colors">
                    Rezervovať
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}