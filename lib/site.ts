/**
 * Single source of truth for site-wide content, links and SEO values.
 * Set NEXT_PUBLIC_SITE_URL in production so canonical / OG URLs are absolute and correct.
 */
export const siteConfig = {
  name: "Rao Abdul Hai",
  shortName: "RAO",
  role: "Frontend & Full-Stack Web Developer",
  tagline: "Frontend Developer with a Cybersecurity edge",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://raoabdulhaireact.web.app").replace(/\/$/, ""),
  locale: "en_US",
  description:
    "Rao Abdul Hai — Frontend & Full-Stack Web Developer with a cybersecurity background. Building fast, secure and responsive websites, React / Next.js apps and WooCommerce e-commerce platforms.",
  bio: "I build responsive, secure and user-centric web applications with React, Next.js, JavaScript, Node.js and WordPress. With 1.5+ years of hands-on experience and a degree in Cybersecurity, I bring both craft and security-first thinking to every project.",
  keywords: [
    "Rao Abdul Hai",
    "Frontend Developer",
    "Full-Stack Web Developer",
    "React Developer",
    "Next.js Developer",
    "WordPress Developer",
    "WooCommerce Developer",
    "Cybersecurity",
    "Web Developer Portfolio",
    "E-commerce Website Development",
    "Sviluppatore Web",
  ],
  cv: {
    it: {
      href: "/assets/cv/CV_Rao_Abdul_Hai_Europass_IT.pdf",
      label: "Scarica CV (IT)",
      shortLabel: "CV IT",
      ariaLabel: "Scarica il CV Europass in italiano (PDF)",
      lang: "it",
    },
    en: {
      href: "/assets/cv/Rao_Abdul_Hai_Europass_CV.pdf",
      label: "Download CV (EN)",
      shortLabel: "CV EN",
      ariaLabel: "Download the English Europass CV (PDF)",
      lang: "en",
    },
  },
  socials: {
    github: "https://github.com/RaoHai29",
    linkedin: "https://www.linkedin.com/in/rao-abdul-hai-87aa9b1b4/",
    facebook: "https://www.facebook.com/raohai10",
    x: "https://x.com/RaoAbdulHai4",
  },
  // EmailJS public credentials (safe to expose; they are restricted by allowed origins in the EmailJS dashboard).
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_6diuipz",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_qybfpv8",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "VPL7TUkyqdCG2uBAS",
  },
} as const;

export const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const stats = [
  { value: "12+", label: "Projects delivered" },
  { value: "9+", label: "Happy clients" },
  { value: "1.5+", label: "Years experience" },
  { value: "12+", label: "Technologies" },
] as const;

export const services = [
  {
    icon: "code",
    title: "Web Development",
    description:
      "Modern, responsive websites and web apps built with current best practices — from landing pages to full e-commerce platforms.",
    tech: ["React", "Next.js", "JavaScript", "WordPress", "WooCommerce", "Node.js"],
  },
  {
    icon: "chart",
    title: "Data Analysis",
    description:
      "Turning raw data into actionable insight with clean pipelines, analysis and clear visual reporting.",
    tech: ["Python", "Pandas", "NumPy", "SQL", "Excel", "Tableau"],
  },
  {
    icon: "shield",
    title: "Cybersecurity",
    description:
      "Security-first development, hardening and vulnerability assessment to protect your digital assets.",
    tech: ["Linux", "Kali Linux", "Wireshark", "Python", "C++", "C"],
  },
] as const;

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "WordPress",
  "WooCommerce",
  "PHP",
  "Bootstrap",
  "MongoDB",
  "MySQL",
  "Python",
  "Pandas",
  "NumPy",
  "C++",
  "Linux",
  "Git",
  "Photoshop",
] as const;
