import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Jonas Schøn Henriksen",
  initials: "JSH",
  location: "Kolding, Denmark, CET",
  locationLink: "https://www.google.com/maps/place/Kolding",
  about: "Software udvikler.",
  summary:
    "Software udvikler med 3 års erfaring. Multimediedesigner med speciale i webudvikling kombinerer jeg min formelle uddannelse og mange års selvlærte erfaring med app- og spiludvikling samt hjemmesider og design.",
  avatarUrl: "https://jonhen01mmd.github.io/Hjemmeside/assets/Profil-Billede.jpeg",
  personalWebsiteUrl: "https://jonhen01mmd.github.io/Hjemmeside/",
  contact: {
    email: "Jonasschonhenriksen@icloud.com",
    tel: "+4521328035",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jonhen01MMD",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jonas-sch%C3%B8n-henriksen-500b25283/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "IBA Erhvervsakademi Kolding",
      degree: "Multimediedesigner",
      start: "2023",
      end: "2026",
    },
  ],
  work: [
    {
      company: "Mindthemedia",
      link: "https://mindthemedia.com/",
      badges: ["React Native", "Expo", "Statamic",],
      title: "Frontend udvikler",
      start: "2025",
      end: "2026",
      description:
        "Udvikling af kundespecifik software, herunder apps ComeUnity. GOTO Jobmatch",
    },
  ],
  skills: [
    "React/Next.js",
    "TypeScript",
    "Node.js",
    "AI/LLMs",
    "Tailwind CSS",
    "Nativewind",
    "HTML/CSS",
    "JavaScript",
    "Swift",
  ],
  projects: [
    {
      title: "ComeUnity / GOTO Sønderborg",
      techStack: ["React Native", "Nativewind"],
      description: "At samle studielivet i Sønderborg i én platform. Ét sted, hvor studerende kan finde job, opleve byen, engagere sig i fællesskaber og opbygge relationer – både socialt og professionelt.",
      link: {
        label: "comeunity",
        href: "https://mindthemedia.com/cases/comeunity",
      },
    },
    {
      title: "GOTO Jobmatch",
      techStack: ["React Native", "Nativewind"],
      description: "App for studerne i sønderborg kommune så de nemt og hurtigt kan søge jobs",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Moooce",
      techStack: ["React Native", "Nativewind"],
      description: "Moooce er en app, der gør det nemt for Shopify-webshops at øge salget ved at integrere produkter direkte i personlige og autentiske videoer, som kunderne kan shoppe igennem.",
      link: {
        label: "Minimalist CV",
        href: "https://moooce.com/",
      },
    },
  ],
} as const;
