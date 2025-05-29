import AboutCard from "@/components/HomePage/AboutCard";
import ActionCard from "@/components/HomePage/ActionCard";
import FaqSection from "@/components/HomePage/FaqSection";
import HeroSection from "@/components/HomePage/HeroSection";
import LogoSliderSection from "@/components/HomePage/LogoSliderSection";
import React from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoSliderSection />
      <ActionCard />
      <AboutCard />
      <FaqSection />
    </>
  );
}
