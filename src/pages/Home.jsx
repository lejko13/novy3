import React from 'react';
import Hero from '../components/landing/Hero';
import HowItWorks from '../components/landing/HowItWorks';
import WhyUs from '../components/landing/WhyUs';
import Locations from '../components/landing/Locations';
import Pricing from '../components/landing/Pricing';
import Trainer from '../components/landing/Trainer';
import Gallery from '../components/landing/Gallery';
import Contact from '../components/landing/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhyUs />
      <Locations />
      <Pricing />
      <Trainer />
      <Gallery />
      <Contact />
    </>
  );
}