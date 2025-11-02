'use client';

import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { ProductDemo } from '@/components/sections/ProductDemo';
import { Stats } from '@/components/sections/Stats';
import { Integrations } from '@/components/sections/Integrations';
import { Pricing } from '@/components/sections/Pricing';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { FAQ } from '@/components/sections/FAQ';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ProductDemo />
      <Stats />
      <Integrations />
      <Pricing />
      <Testimonials />
      <CTA />
      <FAQ />
    </>
  );
}
