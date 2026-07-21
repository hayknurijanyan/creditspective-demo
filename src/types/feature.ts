import type { JSX } from "react";
export type Feature = {
  id: number;
  anchor: string;
  icon: JSX.Element;
  title: string;
  summary: string;
  details: string;
  bullets: string[];
  eyebrow: string;
  imageAlt: string;
  imageSrc: string;
};
