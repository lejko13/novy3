import React from 'react';
import { motion } from 'framer-motion';

import { useTheme } from '../../lib/ThemeContext'

export default function Hero() {

    const { theme, toggle } = useTheme();


    const isDark = theme === "dark";

 const logo_tmave = '/svetle.png'
const logo_svetla = '/tmave.png'

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background gym photo */}
      <div className="absolute inset-0">
        
        <img
          src="https://cvicsam.sk/wp-content/uploads/2025/11/foto_fitko-002-scaled.jpg"
          alt="Cvič Sám - súkromná posilňovňa"
          className="w-full h-full object-cover opacity-20 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left */}
          <div>
            {isDark ?   <motion.img
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              src={logo_tmave}
              alt="Cvič Sám"
              className="h-16 mb-8"
            /> : 
            <motion.img
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              src={logo_svetla}
              alt="Cvič Sám"
              className="h-16 mb-8"
            />
             }
          
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-[1.0] tracking-tight text-foreground"
            >
              SÚKROMNÁ
              <br />POSILŇOVŇA
              <br /><span className="text-primary">IBA PRE VÁS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 text-base lg:text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Rezervujete si termín, otvoríte dvere cez aplikáciu a celý priestor máte len pre seba.
              Bez čakania na stroje, bez preplnenej šatne a bez rušivých pohľadov.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              <a href="https://gymify.sk/gyms/cvic-sam/booking" target="_blank" rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 rounded-md text-sm uppercase tracking-wide transition-colors">
                REZERVOVAŤ MARTINA BENKU
              </a>
              <a href="https://gymify.sk/gyms/cvic-sam-svaby/booking?reservable=238" target="_blank" rel="noopener noreferrer"
                className="bg-secondary hover:bg-secondary/80 border border-border text-secondary-foreground font-bold px-6 py-3 rounded-md text-sm uppercase tracking-wide transition-colors">
                REZERVOVAŤ ŠVÁBY
              </a>
            </motion.div>
          </div>

          {/* Right info card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:justify-self-end w-full lg:max-w-sm"
          >
            <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-lg">
              <h2 className="text-xl lg:text-2xl font-black uppercase text-foreground leading-tight">
                75 MINÚT. VLASTNÝ ČAS. VLASTNÝ PRIESTOR.
              </h2>
              <p className="text-sm text-muted-foreground mt-3">
                Ideálne na samostatný tréning, tréning vo dvojici alebo tréning s osobným trénerom.
              </p>
              <div className="mt-6 space-y-0 divide-y divide-border">
                {[
                  { label: "Rezervácia", value: "Gymify" },
                  { label: "Vstup", value: "QR kód" },
                  { label: "Miesto", value: "Prešov / BB" },
                ].map(item => (
                  <div key={item.label} className="flex justify-between items-center py-3">
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <span className="text-sm font-semibold text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}