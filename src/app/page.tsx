import { CallToAction } from "@/sections/CallToAction";
import { FAQ } from "@/sections/FAQ";
import { Features } from "@/sections/Features";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import Pricing from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import { UsesCases } from "@/sections/UsesCases";
import React from "react";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction />
      <Pricing />
      <UsesCases />
      <FAQ />
      <Footer />
    </>
  );
}
