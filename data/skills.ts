export interface SkillItem {
  name: string;
  note: string;
  appliedIn?: string;
}

export interface SkillCategory {
  id: string;
  number: string;
  label: string;
  tagline: string;
  description: string;
  items: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    number: "01",
    label: "LANGUAGES",
    tagline: "Core programming languages & foundations",
    description:
      "Primary programming languages used for object-oriented software engineering, system scripting, procedural logic, and web platforms.",
    items: [
      { name: "Java", note: "Object-Oriented Programming, Multithreading & Core CS" },
      { name: "Python", note: "Scripting, BiLSTM Neural Core & Automation", appliedIn: "DeepWAF-XAI" },
      { name: "JavaScript", note: "Modern Async/Await, Event Loop & Dynamic Web APIs", appliedIn: "EventHub" },
      { name: "TypeScript", note: "Static Typing, Interface Contracts & Strict Type Safety" },
      { name: "C", note: "Procedural Logic, Pointer Operations & Memory Management" },
      { name: "PHP", note: "Server-Side Scripting, Session Lifecycle & Form Pipelines", appliedIn: "EventHub" },
    ],
  },
  {
    id: "frontend",
    number: "02",
    label: "FRONTEND",
    tagline: "Modern component-based web interfaces",
    description:
      "Building clean, accessible, and responsive client-side interfaces with modern component architecture and performant state synchronization.",
    items: [
      { name: "Next.js", note: "App Router, Server-Side Rendering & Static Optimization", appliedIn: "Job Portal" },
      { name: "React.js", note: "Component Hierarchies, Custom Hooks & Reactive State", appliedIn: "Job Portal" },
      { name: "Tailwind CSS", note: "Utility-First Design Tokens & Rapid Responsive Layouts", appliedIn: "Job Portal" },
      { name: "HTML", note: "Semantic Structure, Web Standards & Accessibility (a11y)", appliedIn: "EventHub" },
      { name: "CSS", note: "Flexbox, CSS Grid, Custom Properties & Animations", appliedIn: "EventHub" },
      { name: "JavaScript", note: "Browser APIs, Event Delegation & Performance Optimization", appliedIn: "EventHub" },
    ],
  },
  {
    id: "backend",
    number: "03",
    label: "BACKEND",
    tagline: "Server runtimes, APIs & authentication",
    description:
      "Engineering resilient backend services, structured REST endpoints, token-based authentication, and role-based access control.",
    items: [
      { name: "Node.js", note: "Asynchronous Event-Driven JavaScript Runtime Engine", appliedIn: "Job Portal" },
      { name: "Express.js", note: "RESTful Endpoints, Middleware Chains & Error Handlers", appliedIn: "Job Portal" },
      { name: "JWT", note: "Signed Tokens, Protected Routes & Stateless Authentication", appliedIn: "Job Portal" },
      { name: "REST APIs", note: "Stateless Resource Design, HTTP Codes & JSON Contracts" },
      { name: "PHP Server APIs", note: "Backend Scripts, Session Validation & Form Pipelines" },
    ],
  },
  {
    id: "databases",
    number: "04",
    label: "DATABASES",
    tagline: "Relational, document & embedded storage",
    description:
      "Designing normalized relational schemas, NoSQL document collections, transactional integrity, and query optimization.",
    items: [
      { name: "SQLite", note: "Embedded State with Strict Python Validation", appliedIn: "DeepWAF-XAI" },
      { name: "MySQL", note: "Relational Schemas, Normalization, Joins & ACID Transactions", appliedIn: "EventHub" },
      { name: "MongoDB", note: "NoSQL Document Modeling, Indexes & Collections", appliedIn: "Job Portal" },
    ],
  },
  {
    id: "tools",
    number: "05",
    label: "TOOLS & FRAMEWORKS",
    tagline: "Developer tooling, state & workflows",
    description:
      "Modern development tooling for version control, state management, remote debugging, and client-server caching.",
    items: [
      { name: "Git", note: "Distributed Version Control, Feature Branching & Merging", appliedIn: "general project workflow" },
      { name: "GitHub", note: "Code Review, Remote Repositories & Collaboration", appliedIn: "general project workflow" },
      { name: "Redux Toolkit", note: "Predictable Centralized Client State Management", appliedIn: "Job Portal" },
      { name: "SWR", note: "Stale-While-Revalidate Caching & Real-Time Sync", appliedIn: "Job Portal" },
      { name: "Postman", note: "API Endpoint Testing, Mocking & Payload Inspection" },
      { name: "VS Code", note: "Primary Development Workspace & Debugging Tooling" },
    ],
  },
  {
    id: "core-cs",
    number: "06",
    label: "CORE CS",
    tagline: "Computer science theory & fundamentals",
    description:
      "Theoretical foundations that inform efficient algorithm selection, robust system architecture, and low-level software stability.",
    items: [
      { name: "Data Structures", note: "Arrays, Linked Lists, Trees, Hash Maps & Graphs" },
      { name: "Algorithms", note: "Searching, Sorting, Recursion & Big-O Complexity" },
      { name: "DBMS Theory", note: "Relational Algebra, Normal Forms & Concurrency Control" },
      { name: "Operating Systems", note: "Processes, Threads, Scheduling & Memory Architecture" },
      { name: "Computer Networks", note: "TCP/IP, HTTP/HTTPS, DNS & Socket Protocols" },
      { name: "OOP Principles", note: "Encapsulation, Inheritance, Polymorphism & Abstraction" },
    ],
  },
];

// Alias for backward compatibility if imported elsewhere
export const skillGroups = skillCategories;
