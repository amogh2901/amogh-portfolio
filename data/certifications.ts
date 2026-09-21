export interface Certification {
  id: string;
  name: string;
  platform: string;
  year: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    id: "mscit",
    name: "MS-CIT",
    platform: "MKCL",
    year: "2022",
    description:
      "Certified in fundamental IT systems, database essentials, computing automation, and productivity technologies.",
  },
  {
    id: "ai-training",
    name: "Artificial Intelligence Training",
    platform: "Acmegrade",
    year: "2024–2025",
    description:
      "Specialized training covering neural networks, predictive modeling, and applied machine learning architectures.",
  },
  {
    id: "kotlin",
    name: "Introduction to Kotlin Programming",
    platform: "C.K. Thakur College",
    year: "2024",
    description:
      "Core programming in Kotlin, functional paradigms, and modern Android mobile application architecture.",
  },
  {
    id: "klic",
    name: "KLIC Video Editing",
    platform: "KLIC",
    year: "2023",
    description:
      "Hands-on digital media production, multi-track audio-video editing, timeline management, and content post-production.",
  },
  {
    id: "personality-dev",
    name: "Personality Development & Interview Skills",
    platform: "C.K. Thakur College",
    year: "2023–2024",
    description:
      "Technical communication, corporate placement readiness, professional problem-solving, and mock interview training.",
  },
];
