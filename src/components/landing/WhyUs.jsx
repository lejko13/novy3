import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Dumbbell, Baby, Users } from 'lucide-react';

const reasons = [
  { icon: Lock, title: "Fitko len pre vás", desc: "Cvičíte úplne sami, s trénerom alebo maximálne s dvoma kamarátmi. Žiadny hluk, žiadne pohľady z okolia." },
  { icon: Dumbbell, title: "Moderné vybavenie", desc: "K dispozícii sú kvalitné stroje, činky a pomôcky pre rôzne typy tréningov. Nechýba ani kávovar." },
  { icon: Baby, title: "Aj pre rodičov s deťmi", desc: "Deti si môžete vziať so sebou. Priestor je súkromný a bez cudzích ľudí." },
  { icon: Users, title: "Traja za cenu jedného", desc: "So sebou môžete vziať partnera, priateľov alebo osobného trénera bez príplatku." },
];

export default function WhyUs() {
  return (
    <section className="bg-background py-20 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Výhody</p>
          <h2 className="text-3xl lg:text-5xl font-black uppercase text-foreground">Prečo Cvič Sám?</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Súkromný priestor mení celý tréning. Prídete vo vlastnom čase, cvičíte bez davov.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground uppercase tracking-wide">{r.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}