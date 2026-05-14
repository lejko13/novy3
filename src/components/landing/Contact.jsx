import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import {siteData} from '../../data/headerfooter'

export default function Contact() {
  return (
    <section id="kontakt" className="bg-secondary/40 py-20 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Napíšte nám</p>
          <h2 className="text-3xl lg:text-5xl font-black uppercase text-foreground">Kontakt</h2>
        </motion.div>

        <div className="grid  lg:grid-cols-[auto_1fr] gap-6 h-fit ">
         <div className="">
  <div className="sticky top-20">
     <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-xl p-6 space-y-5 hover:shadow-md transition-all"
          >
            <a href="mailto:cvicsamgym@gmail.com" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors font-medium">cvicsamgym@gmail.com</p>
              </div>
            </a>
            <a href="tel:+421948939074" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Telefón</p>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors font-medium">0948 939 074</p>
              </div>
            </a>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div className="space-y-2  gap-2 flex flex-col">

                  {siteData.navLinks
                    .find(link => link.type === "dropdown" && link.label === "Pobočky")
                    ?.items.map(item => (
                      <div key={item.name}>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                          {item.name.split(",")[0]}
                        </p>
                        <p className="text-sm text-foreground/70">
                          {item.address}
                        </p>
                      </div>
                    ))}
              
              </div>
            </div>
            
            <div className="flex gap-3 pt-2">
              <a href="https://www.facebook.com/profile.php?id=61578983385535" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4 text-primary" />
              </a>
              <a href="https://www.instagram.com/cvic_sam/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4 text-primary" />
              </a>
            </div>
          </motion.div>
  </div>
</div>
         
<div className="w-full h-fit grid gap-6 lg:grid-rows-auto">
  {siteData.navLinks
    .find(link => link.type === "dropdown" && link.label === "Pobočky")
    ?.items.map((item, i) => (
      <motion.div
        key={item.name}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 * i }}
        className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-all h-full"
      >
        {/* HEADER */}
        <div className="p-4 border-b border-border">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            Prevádzka
          </p>
          <p className="text-foreground font-bold text-sm mt-0.5">
            {item.name.split(",")[0]}
          </p>
        </div>

        {/* MAPA */}
        <div className="p-4">
          <iframe
            title={item.name}
            className="w-full h-[260px] rounded-xl border"
            loading="lazy"
            src={item.mapEmbed}
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </motion.div>
    ))}
</div>

          
        </div>
      </div>
    </section>
  );
}