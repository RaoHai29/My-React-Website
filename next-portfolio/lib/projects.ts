import type { StaticImageData } from "next/image";

import griffin from "@/assets/images/griffin-ghost-writing.webp";
import gtLuxury from "@/assets/images/gt-luxury-watersports.webp";
import photon from "@/assets/images/photon-electronics.webp";
import onlineTutors from "@/assets/images/online-tutors-hub.webp";
import paidlance from "@/assets/images/paidlance.webp";
import unifiedArc from "@/assets/images/unified-arc.webp";
import gdsc from "@/assets/images/gdsc-duet.webp";
import bscs from "@/assets/images/bscs-duet.webp";
import ecommerce from "@/assets/images/ecommerce-platform.webp";
import duet from "@/assets/images/duet-portal.webp";
import dawood from "@/assets/images/dawood-project.webp";
import myPortfolio from "@/assets/images/my-portfolio.webp";
import academicPortfolio from "@/assets/images/academic-portfolio.webp";

export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tech: string[];
  /** Live URL. Omit for projects that are not publicly deployed. */
  url?: string;
  /** Screenshot. When omitted, the card renders a styled browser-frame preview. */
  image?: StaticImageData;
};

/**
 * Featured client project.
 * To use a real screenshot: save it as assets/images/grace-stole-hijab.webp,
 * import it above and set `image` below.
 */
export const featuredProject: Project = {
  slug: "grace-stole-hijab",
  title: "Grace Stole & Hijab",
  url: "https://gracestoleandhijab.com/",
  category: "E-Commerce / Full-Stack Web Development",
  tech: ["WordPress", "WooCommerce", "Custom CSS/PHP", "LiteSpeed Cache", "Responsive UI"],
  description:
    "Developed a complete, responsive e-commerce web platform tailored for modest fashion wear. Integrated end-to-end shopping cart functionality, secure checkout flows, product inventory management, and performance-optimized server caching for seamless browsing across all mobile and desktop devices.",
};

export const projects: Project[] = [
  {
    slug: "griffin-ghost-writing",
    title: "Griffin Ghost Writing",
    description: "Professional ghostwriting services platform with a modern UI and seamless user experience.",
    image: griffin,
    url: "https://www.griffinghostwriting.com/",
    tech: ["HTML5/CSS3", "JavaScript", "EmailJS"],
    category: "Books & Writing",
  },
  {
    slug: "gt-luxury-watersports",
    title: "GT Luxury Watersports",
    description: "Premium watersports booking platform with availability enquiries and a polished brand experience.",
    image: gtLuxury,
    url: "https://gtluxurywatersports.com/",
    tech: ["HTML5/CSS3", "JavaScript", "EmailJS"],
    category: "Boating & Watersports",
  },
  {
    slug: "photon-electronics",
    title: "Photon Electronics",
    description: "Solar energy solutions website presenting products and services with clear calls to action.",
    image: photon,
    url: "https://www.photonsolars.com/",
    tech: ["HTML5/CSS3", "JavaScript", "EmailJS"],
    category: "Solar Energy",
  },
  {
    slug: "online-tutors-hub",
    title: "Online Tutors Hub",
    description: "Educational platform connecting students with qualified tutors worldwide.",
    image: onlineTutors,
    url: "https://www.onlinetutors-hub.com/",
    tech: ["HTML5/CSS3", "JavaScript", "EmailJS"],
    category: "Education",
  },
  {
    slug: "paidlance",
    title: "Paidlance Project",
    description: "Freelancing marketplace concept with project management and payment flows.",
    image: paidlance,
    url: "https://paidlanceproject.web.app/",
    tech: ["React", "Material UI", "JavaScript"],
    category: "Marketplace",
  },
  {
    slug: "unified-arc",
    title: "Unified Arc",
    description: "Architecture firm portfolio showcasing projects and services.",
    image: unifiedArc,
    url: "https://unified-arc.web.app/",
    tech: ["React", "Bootstrap", "JavaScript"],
    category: "Architecture",
  },
  {
    slug: "gdsc-duet",
    title: "GDSC DUET",
    description: "Google Developer Student Clubs community platform for tech enthusiasts.",
    image: gdsc,
    url: "https://gdsc-duet-karachi.web.app/",
    tech: ["HTML5/CSS3", "JavaScript"],
    category: "University Community",
  },
  {
    slug: "bscs-duet",
    title: "BSCS DUET",
    description: "Computer Science department portal with student-facing information.",
    image: bscs,
    url: "https://bscs-duet.web.app/",
    tech: ["HTML5/CSS3", "JavaScript"],
    category: "Education",
  },
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Full-featured e-commerce solution with payment gateway and inventory management.",
    image: ecommerce,
    tech: ["WordPress", "Elementor", "EmailJS"],
    category: "E-commerce",
  },
  {
    slug: "duet-portal",
    title: "DUET Portal",
    description: "University portal with student services and academic information.",
    image: duet,
    tech: ["HTML5/CSS3", "JavaScript"],
    category: "Education",
  },
  {
    slug: "dawood-project",
    title: "Dawood Project",
    description: "Custom web application with a modern, responsive design.",
    image: dawood,
    tech: ["HTML5/CSS3", "JavaScript"],
    category: "Web Development",
  },
  {
    slug: "my-portfolio",
    title: "Portfolio v1",
    description: "The previous version of my personal portfolio, built with React.",
    image: myPortfolio,
    url: "https://raohaiwb.web.app/",
    tech: ["React", "CSS3", "JavaScript"],
    category: "Portfolio",
  },
  {
    slug: "academic-portfolio",
    title: "Academic Portfolio",
    description: "Professional portfolio website for an academic professional.",
    image: academicPortfolio,
    tech: ["HTML5/CSS3", "JavaScript"],
    category: "Portfolio",
  },
];
