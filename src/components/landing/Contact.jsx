import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

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

        <div className="grid lg:grid-cols-3 gap-6">
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
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Martina Benku</p>
                  <p className="text-sm text-foreground/70">Martina Benku 7887/1A, 080 01 Prešov</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Šváby</p>
                  <p className="text-sm text-foreground/70">Švábska 41/A, 080 05 Prešov</p>
                </div>
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

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-all"
          >
            <div className="p-4 border-b border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Prevádzka</p>
              <p className="text-foreground font-bold text-sm mt-0.5">Martina Benku</p>
            </div>
            <iframe title="Martina Benku" width="100%" height="260" style={{ border: 0 }} loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.8!2d21.255!3d49.001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473eed0c743b96e3%3A0x40b38bed512e6860!2sMartina%20Benku%207887%2F1A%2C%20080%2001%20Pre%C5%A1ov!5e0!3m2!1ssk!2ssk!4v1700000000000" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-all"
          >
            <div className="p-4 border-b border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Prevádzka</p>
              <p className="text-foreground font-bold text-sm mt-0.5">Šváby</p>
            </div>
            <iframe title="Šváby" width="100%" height="260" style={{ border: 0 }} loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630!2d21.27!3d49.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473eeda4fc470121%3A0xa7c254f896b81052!2sŠv%C3%A1bska%2041%2FA%2C%20080%2005%20Pre%C5%A1ov!5e0!3m2!1ssk!2ssk!4v1700000000001" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}