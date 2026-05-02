import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, ChevronLeft, ChevronRight, X, Check, Calendar } from 'lucide-react';
import { LOCATIONS } from '../lib/locationsData';

export default function GymDetail() {
  const { slug } = useParams();
  const gym = LOCATIONS.find(l => l.slug === slug);
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  if (!gym) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4 pt-20">
        <p className="text-2xl font-black uppercase text-foreground">Pobočka nenájdená</p>
        <Link to="/#pobocky" className="text-primary hover:underline text-sm">← Späť na pobočky</Link>
      </div>
    );
  }

  const prevImg = () => setActiveImg(i => (i - 1 + gym.gallery.length) % gym.gallery.length);
  const nextImg = () => setActiveImg(i => (i + 1) % gym.gallery.length);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img
          src={gym.gallery[activeImg]}
          alt={gym.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />

        {/* Gallery nav buttons */}
        <button onClick={prevImg}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-2.5 rounded-full transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={nextImg}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-2.5 rounded-full transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {gym.gallery.map((_, i) => (
            <button key={i} onClick={() => setActiveImg(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${i === activeImg ? 'bg-primary w-4' : 'bg-white/40'}`} />
          ))}
        </div>

        {/* Breadcrumb */}
        <div className="absolute top-20 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <Link to="/#pobocky" className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-primary transition-colors">
              <ChevronLeft className="w-4 h-4" /> Všetky pobočky
            </Link>
          </div>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">
                {gym.city}
              </p>
              <h1 className="text-3xl lg:text-6xl font-black uppercase text-foreground tracking-tight">
                {gym.title}
              </h1>
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                {gym.address}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {gym.gallery.map((src, i) => (
              <button key={i} onClick={() => { setActiveImg(i); setLightbox(i); }}
                className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  i === activeImg ? 'border-primary' : 'border-transparent opacity-50 hover:opacity-80'
                }`}>
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">

          {/* Left — Equipment + Features */}
          <div className="lg:col-span-2 space-y-14">

            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">O pobočke</p>
              <h2 className="text-2xl lg:text-3xl font-black uppercase text-foreground">Váš súkromný priestor</h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                {gym.desc} Rezervujte si 75-minútový slot a celý priestor máte len pre seba.
                Bez čakania, bez davov — len vy a váš tréning.
              </p>
            </motion.div>

            {/* Equipment */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Vybavenie</p>
              <h2 className="text-2xl lg:text-3xl font-black uppercase text-foreground mb-6">Čo tu nájdete</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {gym.equipment.map((item) => (
                  <div key={item.label}
                    className="bg-card border border-border rounded-xl p-4 flex items-center gap-4 hover:border-primary/40 hover:shadow-sm transition-all">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-sm font-bold text-foreground uppercase tracking-wide">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Špeciality</p>
              <h2 className="text-2xl lg:text-3xl font-black uppercase text-foreground mb-6">Čo nás odlišuje</h2>
              <div className="space-y-3">
                {gym.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Mapa</p>
              <h2 className="text-2xl lg:text-3xl font-black uppercase text-foreground mb-6">Kde nás nájdete</h2>
              <div className="rounded-xl overflow-hidden border border-border">
                <iframe
                  title={gym.title}
                  src={gym.mapEmbed}
                  width="100%"
                  height="320"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
              <p className="text-sm text-muted-foreground mt-3 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                {gym.address}
              </p>
            </motion.div>
          </div>

          {/* Right — Sticky CTA card */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-24 space-y-4"
            >
              <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-lg">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Pobočka</p>
                <h3 className="text-xl font-black uppercase text-foreground">{gym.title}</h3>
                <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3 text-primary" />
                  {gym.address}
                </div>

                <div className="border-t border-border my-5" />

                <div className="space-y-3 mb-6">
                  {[
                    { label: "Dĺžka slotu", value: "75 minút" },
                    { label: "Rezervácia", value: "Gymify" },
                    { label: "Vstup", value: "QR kód" },
                    { label: "Prevádzkové hodiny", value: "24/7" },
                  ].map(row => (
                    <div key={row.label} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{row.label}</span>
                      <span className="text-foreground font-semibold">{row.value}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={gym.bookHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3.5 rounded-xl text-sm uppercase tracking-wide transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Rezervovať tento gym
                </a>

                <Link to="/#pobocky"
                  className="flex items-center justify-center gap-1.5 mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <ChevronLeft className="w-4 h-4" /> Všetky pobočky
                </Link>
              </div>

              {/* Other locations */}
              <div className="bg-card border border-border rounded-2xl p-5">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Ďalšie pobočky</p>
                <div className="space-y-2">
                  {LOCATIONS.filter(l => l.slug !== slug).map(l => (
                    <Link key={l.slug} to={`/pobocky/${l.slug}`}
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted transition-colors group">
                      <img src={l.img} alt={l.name} className="w-10 h-10 rounded-lg object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{l.name}</p>
                        <p className="text-xs text-muted-foreground/60">{l.city}</p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-primary ml-auto transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}>
            <button onClick={e => { e.stopPropagation(); setLightbox(i => (i - 1 + gym.gallery.length) % gym.gallery.length); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-10">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <motion.img key={lightbox} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              src={gym.gallery[lightbox]} alt="" className="max-h-[85vh] max-w-full object-contain rounded-lg"
              onClick={e => e.stopPropagation()} />
            <button onClick={e => { e.stopPropagation(); setLightbox(i => (i + 1) % gym.gallery.length); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-10">
              <ChevronRight className="w-5 h-5" />
            </button>
            <button onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full">
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}