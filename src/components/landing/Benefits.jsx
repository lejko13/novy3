import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Dumbbell, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: "100% Súkromie",
    desc: "Celý priestor je len váš. Žiadne čakanie, žiadne davy.",
  },
  {
    icon: Dumbbell,
    title: "Špičkové stroje",
    desc: "Profesionálne vybavenie pre každý typ tréningu.",
  },
  {
    icon: Clock,
    title: "Otvorené 24/7",
    desc: "Trénujte kedykoľvek chcete. Ráno, v noci, o polnoci.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-stone py-24 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Prečo Cvič Sám
          </p>
          <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight text-foreground">
            Výhody
          </h2>
        </motion.div>

        <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-stone p-10 lg:p-14 text-center group hover:bg-white transition-colors duration-500"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 border border-hairline bg-white group-hover:bg-foreground transition-colors duration-500">
                <b.icon className="w-6 h-6 text-foreground group-hover:text-background transition-colors duration-500" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider mt-6">
                {b.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-3 max-w-xs mx-auto leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}