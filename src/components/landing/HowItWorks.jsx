import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: "01", title: "Registrácia", desc: "V aplikácii Gymify si vytvoríte účet a zvolíte si Cvič Sám ako svoju posilňovňu." },
  { num: "02", title: "Kredit", desc: "Dobijete si kredit platobnou kartou alebo si vyberiete vstupový balík." },
  { num: "03", title: "Rezervácia", desc: "Vyberiete si voľný čas. Jeden tréningový slot trvá 75 minút." },
  { num: "04", title: "Tréning", desc: "V čase rezervácie otvoríte fitko QR kódom a cvičíte v úplnom súkromí." },
];

export default function HowItWorks() {
  return (
    <section id="ako-to-funguje" className="bg-secondary/40 py-20 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Postup</p>
          <h2 className="text-3xl lg:text-5xl font-black uppercase text-foreground">Ako to funguje</h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Proces je jednoduchý a samoobslužný. Všetko vybavíte v aplikácii Gymify, od registrácie až po otvorenie dverí.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-md transition-all group"
            >
              <span className="text-5xl font-black text-primary/20 group-hover:text-primary/40 transition-colors leading-none">
                {step.num}
              </span>
              <h3 className="text-lg font-bold text-foreground mt-3 uppercase tracking-wide">{step.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}