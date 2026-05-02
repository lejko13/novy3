import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ReservationCTA() {
  return (
    <section id="rezervacia" className="bg-white py-24 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="border border-hairline p-10 lg:p-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Začnite ešte dnes
            </p>
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight text-foreground">
              Rezervujte si
              <br className="hidden lg:block" /> svoj termín
            </h2>
            <p className="text-base text-muted-foreground mt-6 max-w-lg mx-auto leading-relaxed">
              Vyberte si pobočku, dátum a čas. Celý proces trvá menej ako 60 sekúnd.
            </p>
            <div className="mt-10">
              <a
                href="#"
                className="group relative inline-flex items-center gap-3 bg-foreground text-background px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:px-14"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-full">
                  Rezervovať termín
                </span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                  Teraz
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}