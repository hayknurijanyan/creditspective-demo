import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product | CREDITspective",
  description:
    "Explore the CREDITspective product across deal discovery, underwriting, monitoring, and portfolio management.",
};

export default function ProductPage() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Pricing />
    </>
  );
}
