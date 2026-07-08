import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Beyond the Chat Window and the Point Tool",
    paragraph:
      "Credit investors often miscategorize AI platforms by comparing them to general assistants or point tools, a framing that misses true workflow value.",
    image: "/images/blog/finance-0.webp",
    author: {
      name: "CREDITspective Research",
      image: "/images/blog/author-03.png",
      designation: "Global Economics Group",
    },
    tags: ["blog"],
    publishDate: "2026",
  },
  {
    id: 2,
    title: "Why General and Single-Function AI Fall Short",
    paragraph:
      "This paper highlights limitations in credit-specific expertise, workflow automation, data security, and vendor sprawl from fragmented AI tooling.",
    image: "/images/blog/finance-1.webp",
    author: {
      name: "Credit Strategy Team",
      image: "/images/blog/author-02.png",
      designation: "Global Economics Group",
    },
    tags: ["analysis"],
    publishDate: "2026",
  },
  {
    id: 3,
    title: "The Case for Full-Lifecycle Credit AI",
    paragraph:
      "Purpose-built platforms deliver durable underwriting and accuracy advantages by eliminating manual tasks while compounding institutional knowledge.",
    image: "/images/blog/finance-2.jpeg",
    author: {
      name: "AI Product Team",
      image: "/images/blog/author-03.png",
      designation: "CREDITspective",
    },
    tags: ["insight"],
    publishDate: "2026",
  },
];
export default blogData;
