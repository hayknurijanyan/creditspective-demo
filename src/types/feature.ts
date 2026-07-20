import type { JSX } from "react";
export type Feature = {
  id: number;
  icon: JSX.Element;
  title: string;
  summary: string;
  details: string;
  bullets: string[];
  eyebrow: string;
  imageAlt: string;
  imageSrc: string;
};
