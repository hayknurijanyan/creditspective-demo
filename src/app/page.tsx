import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Integration from "@/components/Integration";
import Features from "@/components/Features";
import HomeHero from "@/components/Hero/HomeHero";
import HomeInstitutionalQuotes from "@/components/HomeInstitutionalQuotes";
import MemoryAsAlpha from "@/components/MemoryAsAlpha";
import HomeWorkflowFeatures from "@/components/HomeWorkflowFeatures";
import ProblemsWeSolve from "@/components/ProblemsWeSolve";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import WhatYouGet from "@/components/WhatYouGet";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CREDITspective | The Entire Credit Workflow, Unified",
  description:
    "CREDITspective is an agentic AI platform for deal discovery, underwriting, monitoring, and portfolio management, grounded in your firm's institutional memory.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <HomeHero />
      <HomeInstitutionalQuotes />
      <Video />
      <Integration />
      <MemoryAsAlpha />
      <HomeWorkflowFeatures />
      <ProblemsWeSolve />
      <WhatYouGet />
      <Brands />
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
