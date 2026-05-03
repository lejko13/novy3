import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    count: "3", unit: "vstupy", price: "22,05 €", perVisit: "7,35 € za jeden vstup",
    features: ["3 samostatné rezervácie po 75 minút", "Vhodné pre samostatný aj párový tréning"],
    note: null, highlight: false,
    href: "https://gymify.sk/gyms/cvic-sam/booking",
  },
  {
    count: "5", unit: "vstupov", price: "35 €", perVisit: "7,00 € za jeden vstup",
    features: ["5 rezervácií po 75 minút", "Flexibilné využitie podľa rozvrhu"],
    note: null, highlight: true,
    href: "https://client.gymify.app/sk?activeTab=register&gymUuid=a25632ae-e362-4c5a-85fc-26586eb3f2f5&gymName=Cvi%C4%8D%20S%C3%A1m",
  },
  {
    count: "10", unit: "vstupov", price: "60 €", perVisit: "6,00 € za jeden vstup",
    features: ["Štandardná cena 65 €", "Akciová cena 60 €", "Akcia platí do 30. 4. 2026"],
    note: "AKCIA", highlight: false,
    href: "https://client.gymify.app/sk?activeTab=register&gymUuid=a25632ae-e362-4c5a-85fc-26586eb3f2f5&gymName=Cvi%C4%8D%20S%C3%A1m",
  },
];

export default function Pricing({borderTop = 1}) {
  return (
    <section 
    id="cennik" 
     className={`bg-background border-border ${
  borderTop ? "border-t py-20 lg:py-32" : ""
}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Ceny</p>
          <h2 className="text-3xl lg:text-5xl font-black uppercase text-foreground">Cenník</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Vyberte si jednorazový vstup alebo výhodný balík. Každý slot trvá 75 minút a vstup riešite cez Gymify.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.count}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-xl border p-6 lg:p-8 flex flex-col ${
                plan.highlight
                  ? 'bg-primary border-primary shadow-2xl shadow-primary/20 scale-105'
                  : 'bg-card border-border hover:border-primary/40 hover:shadow-md transition-all'
              }`}
            >
              {plan.note && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {plan.note}
                </span>
              )}
              <div className="text-center mb-6">
                <div className={`text-6xl font-black ${plan.highlight ? 'text-white' : 'text-primary'}`}>{plan.count}</div>
                <div className={`text-sm uppercase tracking-widest font-semibold mt-1 ${plan.highlight ? 'text-white/80' : 'text-muted-foreground'}`}>{plan.unit}</div>
                <div className={`text-3xl font-black mt-4 ${plan.highlight ? 'text-white' : 'text-foreground'}`}>{plan.price}</div>
                <div className={`text-xs mt-1 ${plan.highlight ? 'text-white/70' : 'text-muted-foreground'}`}>{plan.perVisit}</div>
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-white' : 'text-primary'}`} />
                    <span className={plan.highlight ? 'text-white/80' : 'text-muted-foreground'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={plan.href} target="_blank" rel="noopener noreferrer"
                className={`block text-center font-bold py-3 rounded-md text-sm uppercase tracking-wide transition-colors ${
                  plan.highlight ? 'bg-white text-primary hover:bg-white/90' : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                }`}>
                Kúpiť balík
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 hover:shadow-md transition-all"
        >
          <div>
            <p className="text-foreground font-semibold">Jednorazový vstup bez balíka</p>
            <p className="text-muted-foreground text-sm mt-0.5">Platba prebieha bezpečne online cez Gymify</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-black text-foreground">7,50 €</span>
            <a href="https://gymify.sk/gyms/cvic-sam/booking" target="_blank" rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-5 py-2.5 rounded-md text-sm uppercase tracking-wide transition-colors whitespace-nowrap">
              Rezervovať
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}