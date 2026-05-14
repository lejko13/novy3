import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
    "/benko/martinbenka1.jpg",
  "/benko/martinbenka2.jpg",

  "/benko/martinbenka4.jpg",

  "/benko/martinbenka6.jpg",
   "/svaby/sva1.jpg",

  "/svaby/sva3.jpg",
 
  "/svaby/sva5.jpg",

  "/svaby/sva7.jpg",
];



export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const prev = () => setLightboxIdx(i => (i - 1 + photos.length) % photos.length);
  const next = () => setLightboxIdx(i => (i + 1) % photos.length);

  return (
    <section id="galeria" className="bg-background py-20 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Naše priestory</p>
          <h2 className="text-3xl lg:text-5xl font-black uppercase text-foreground">Galéria</h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Pozrite si reálne priestory Cvič Sám. Čisté vybavenie, súkromie a tréningové zóny.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3">
          {photos.map((src, i) => (
            <motion.button key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              onClick={() => setLightboxIdx(i)}
              className="relative aspect-square overflow-hidden rounded-lg group border border-border hover:border-primary/40 transition-colors">
              <img src={src} alt={`Cvič Sám ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxIdx(null)}>
            <button onClick={e => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-10">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <motion.img key={lightboxIdx} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              src={photos[lightboxIdx]} alt="" className="max-h-[85vh] max-w-full object-contain rounded-lg"
              onClick={e => e.stopPropagation()} />
            <button onClick={e => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-10">
              <ChevronRight className="w-5 h-5" />
            </button>
            <button onClick={() => setLightboxIdx(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full">
              <X className="w-4 h-4" />
            </button>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-sm">
              {lightboxIdx + 1} / {photos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}