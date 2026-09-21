export interface EngineeringFeature {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  number: string;
  name: string;
  tagline: string;
  type: string;
  year?: string; // DeepWAF-XAI must NOT have a year
  statusBadge?: string;
  context: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  engineeringFeatures?: EngineeringFeature[];
  technologies: string[];
  architecture?: {
    frontend?: string;
    ml?: string;
    database?: string;
    deployment?: string;
  };
  developmentFocus: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "deepwaf-xai",
    number: "01",
    name: "DeepWAF-XAI",
    tagline: "Explainable AI-Driven Web Application Firewall",
    type: "AI / CYBERSECURITY / WEB APPLICATION FIREWALL",
    statusBadge: "CURRENTLY WORKING",
    context: "MCA FINAL-YEAR CAPSTONE",
    overview:
      "DeepWAF-XAI is a production-grade, Explainable AI-driven Web Application Firewall engineered to detect and mitigate zero-day web attacks in real-time. Moving beyond traditional rule-based security, the framework utilizes deep learning for threat classification while maintaining a strict Zero-Trust architecture to manage user access and telemetry. It is currently being developed as the final-year MCA capstone project.",
    problem:
      "Conventional Web Application Firewalls rely on static regex signatures that fail against mutated zero-day exploits, while opaque black-box neural networks prevent security engineers from understanding why a payload was flagged.",
    solution:
      "DeepWAF-XAI integrates a Character-Level BiLSTM neural model for raw HTTP payload anomaly detection paired with Explainable AI (XAI) transparent decision reasoning. Enforces a strict three-tier Zero-Trust RBAC, routes ambiguous requests to a Level 2 Quarantine Queue, and restricts detailed telemetry exclusively to Admin SOC operators.",
    architecture: {
      frontend: "Streamlit Dashboard",
      ml: "Character-Level BiLSTM",
      database: "SQLite with strict Python validation",
      deployment: "Ngrok",
    },
    engineeringFeatures: [
      {
        title: "Zero-Trust 3-tier RBAC",
        description: "Three-tier authorization enforcing least-privilege role separation between Operators/Users, Security Auditors, and SuperAdmins.",
      },
      {
        title: "Secondary SOC passkeys",
        description: "Out-of-band secondary cryptographic authentication required for high-privilege IAM controls and firewall rule modifications.",
      },
      {
        title: "Level 2 Quarantine Queue",
        description: "Inspection staging buffer for low-confidence or ambiguous payloads awaiting manual SuperAdmin review and disposition.",
      },
      {
        title: "Admin SOC telemetry",
        description: "Information disclosure prevention: client responses are sanitized while complete XAI reasoning telemetry stays strictly within Admin SOC.",
      },
      {
        title: "SQLite/database deduplication",
        description: "Cached payload signature hashing preventing redundant neural inference on identical incoming request streams.",
      },
      {
        title: "Concurrency protection",
        description: "Thread-safe database transactions and atomic state locks protecting against request bursts and spam.",
      },
      {
        title: "Adversarial sandbox",
        description: "Payload mutation testbed for automated boundary testing evaluating BiLSTM detection resilience against evasion attacks.",
      },
    ],
    features: [
      "Zero-Trust 3-tier RBAC isolating Operators, Auditors, and SuperAdmins",
      "Secondary SOC passkeys for privileged IAM and policy changes",
      "Level 2 Quarantine Queue for human-in-the-loop review of ambiguous payloads",
      "Admin SOC telemetry preventing threat attribution information leakage",
      "SQLite/database deduplication caching payload hashes against redundant inference",
      "Concurrency protection ensuring transactional integrity under burst loads",
      "Adversarial sandbox evaluating BiLSTM resilience against mutated payloads",
    ],
    technologies: [
      "Python",
      "Character-Level BiLSTM",
      "Streamlit",
      "SQLite",
      "Explainable AI (XAI)",
      "Zero-Trust RBAC",
      "Ngrok",
    ],
    developmentFocus:
      "Currently in active development. Engineering focus centers on BiLSTM payload preprocessing, secondary SOC passkey validation, Level 2 quarantine review state management, and real-time inference latency optimization.",
    githubUrl: "https://github.com/amogh2901/DeepWAF-XAI",
  },
  {
    id: "eventhub",
    number: "02",
    name: "EventHub",
    tagline: "Event Booking & Service Management Application",
    type: "Web Application / Event Management",
    year: "2024–2025",
    context: "BSc IT FINAL-YEAR PROJECT",
    overview:
      "EventHub is an event booking and service management application engineered to streamline event planning. It allows customers to browse, book, and coordinate comprehensive event services—including banquet halls, catering, decoration, photography, cakes, music, and lighting—within a unified web workflow.",
    problem:
      "Organizing personal and corporate events traditionally required coordinating across multiple independent vendors through phone inquiries and manual paper receipts, causing communication delays and scheduling confusions.",
    solution:
      "Developed a database-driven web application featuring multi-vendor catalog browsing, an integrated service cart, booking scheduling, reservation updates, payment status tracking, and automated receipt generation.",
    features: [
      "Multi-vendor event service selection (Halls, Catering, Decoration, Photography, Cakes, Music, Lighting)",
      "Dynamic in-app cart management with multi-vendor service aggregation",
      "Database-driven reservation scheduling with date validation",
      "Customer booking status tracking and detailed reservation history logs",
      "Automated receipt generation and booking confirmation",
      "Structured relational database schema with ACID transaction support",
      "Responsive user interface optimized for cross-device accessibility",
    ],
    technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    developmentFocus:
      "Relational schema normalization, SQL injection prevention via prepared statements, server-side session management in PHP, dynamic cart interaction with JavaScript, and responsive layout styling.",
    githubUrl: "https://github.com/amogh2901",
  },
  {
    id: "job-portal",
    number: "03",
    name: "Job Portal System",
    tagline: "Recruitment & Online Interview Platform",
    type: "Full Stack Web Application",
    year: "2025",
    context: "MCA MINI PROJECT",
    overview:
      "A modern recruitment and online interview management platform designed to connect job seekers with recruiters. Built with a full-stack JavaScript architecture featuring JWT authentication, role-based dashboards, applicant tracking, and real-time state synchronization.",
    problem:
      "Disparate job boards separate candidate job search from application tracking and employer screening, resulting in slow communication and poor applicant visibility.",
    solution:
      "Engineered an integrated solution featuring JWT authentication, role-based workflows for job seekers and employers, SWR real-time cache revalidation, Redux Toolkit client state, and a robust Node.js/MongoDB backend.",
    features: [
      "Role-based user authentication and JWT session validation",
      "Job posting, detailed listings, search, and domain filtering",
      "Applicant job bookmarking and full application status tracking",
      "Employer management dashboard for tracking posted jobs and candidate lists",
      "Application review workflow with accept/reject decisions and status updates",
      "Responsive UI built with Next.js, React.js, and Tailwind CSS",
      "State management using Redux Toolkit and real-time cache revalidation with SWR",
      "RESTful API backend powered by Node.js, Express.js, and MongoDB",
    ],
    technologies: [
      "Next.js / React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "SWR",
      "JWT",
    ],
    developmentFocus:
      "REST API design, role-based route protection, state management in React, NoSQL document modeling for dynamic application schemas, and modular component reusability.",
    githubUrl: "https://github.com/amogh2901",
  },
];
