import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion'
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "./components/ui/accordion";

const faqs = [
  { q: "Ako sa dostanem dnu?", a: "Po rezervácii obdržíte unikátny QR kód, ktorým otvoríte dvere v čase vašej rezervácie." },
  { q: "Koľko stojí tréning?", a: "Jednorazový vstup je 7,50 €. Dostupné sú aj výhodné balíky — 3 vstupy za 22,05 €, 5 vstupov za 35 € alebo 10 vstupov za 60 €." },
  { q: "Ako dlho trvá jeden slot?", a: "Každý rezervovaný slot trvá 75 minút. V tomto čase máte celý priestor len pre seba." },
  { q: "Môžem trénovať s kamarátom?", a: "Áno! So sebou môžete vziať maximálne dve ďalšie osoby. Za ďalšie osoby neplatíte žiadny príplatok." },
  { q: "Ako prebieha platba?", a: "Platba prebieha bezpečne online platobnou kartou cez aplikáciu Gymify." },
  { q: "Kde sa nachádzajú pobočky?", a: "Máme dve pobočky v Prešove: Martina Benku 7887/1A a Švábska 41/A." },
  { q: "Aké vybavenie je k dispozícii?", a: "K dispozícii sú profesionálne stroje, činky a pomôcky pre rôzne typy tréningov. Nechýba ani kávovar." },
  { q: "Je možné cvičiť s deťmi?", a: "Áno, priestor je súkromný a bez cudzích ľudí. Deti si môžete vziať so sebou." },
  { q: "Čo ak prídem neskoro?", a: "Váš čas začína a končí podľa rezervácie. Odporúčame prísť načas, aby ste využili celých 75 minút." },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Pomoc</p>
          <h1 className="text-3xl lg:text-5xl font-black uppercase text-foreground">Často kladené otázky</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-xl px-5 overflow-hidden hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-white py-4 hover:no-underline hover:text-brand transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-white/50 leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-all"
        >
          <p className="text-foreground font-semibold">Nenašli ste odpoveď?</p>
          <p className="text-sm text-muted-foreground mt-1">Napíšte nám na email alebo zavolajte.</p>
          <div className="flex justify-center gap-3 mt-4">
            <a href="mailto:cvicsamgym@gmail.com" className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-md text-sm font-bold transition-colors">
              Napísať email
            </a>
            <a href="tel:+421948939074" className="bg-background border border-border hover:border-primary/40 text-foreground px-5 py-2.5 rounded-md text-sm font-medium transition-colors">
              Zavolať
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}