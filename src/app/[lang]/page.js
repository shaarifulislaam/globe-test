import AboutCard from "@/components/HomePage/AboutCard";
import ActionCard from "@/components/HomePage/ActionCard";
import FaqSection from "@/components/HomePage/FaqSection";
import HeroSection from "@/components/HomePage/HeroSection";
import LogoSliderSection from "@/components/HomePage/LogoSliderSection";
import React from "react";
import { getDictionary } from "./dictionaries/dictionaries";

export default async function Home({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <>
      <HeroSection lang={dict} />
      <LogoSliderSection />
      <ActionCard />
      <AboutCard />
      <FaqSection />
    </>
  );
}
