export const profile = {
  name: "Uday Kiran Akula",
  title: "Senior Software Developer",
  tagline: "React · React Native · Node.js",
  location: "Hyderabad, India",
  email: "udaykiran199715@gmail.com",
  phone: "+91 8106454161",
  github: "https://github.com/udaykiran199715",
  linkedin: "https://www.linkedin.com/in/udaykiranakula/",
  site: "https://portfolio-crl.pages.dev",
  resumeUrl: "/Uday_Kiran_Akula_Resume.pdf",
  summary:
    "Senior Software Developer with 6 years of experience architecting and shipping web and mobile products across project management, logistics, community management, insurance, and e-commerce domains. Deep expertise in React.js, Next.js, React Native, and Node.js, with a track record of owning features end-to-end — from data-modeling and API design to performance-tuned UI and app-store release.",
};

export const skillGroups = [
  {
    label: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "Zustand",
      "Context API",
      "React Query",
      "TailwindCSS",
      "NativeWind",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    label: "Mobile",
    skills: [
      "React Native",
      "Expo",
      "Expo Router",
      "Native Modules",
      "Firebase Cloud Messaging",
      "Secure Storage",
      "EAS Build",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSockets",
      "Prisma",
      "Serverless Architecture",
    ],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQL"],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      "AWS (S3, EC2, Lambda, CloudFront)",
      "Firebase",
      "Jenkins",
      "GitHub Actions",
      "CI/CD Pipelines",
    ],
  },
  {
    label: "Quality & Tooling",
    skills: [
      "React Testing Library",
      "Postman",
      "Git/GitHub",
      "Jira",
      "Performance Optimization",
      "i18n/l10n",
      "RBAC",
    ],
  },
];

export const experience = [
  {
    company: "Omnics Technologies Pvt Ltd",
    role: "Senior Software Developer",
    period: "Aug 2023 – Present",
    highlights: [
      "Architected the state layer for a multi-module sales platform by pairing Redux Toolkit with Zustand and React Query, cutting redundant API calls and eliminating stale-state bugs across 10+ interconnected modules.",
      "Led a mobile app’s repository-pattern data layer so screens stay decoupled from API state — new backend contracts plug in via a single flag with zero screen-level changes.",
      "Took a community-management app through Play Store and App Store release readiness, including EAS Build/Submit pipelines and a documented release runbook.",
      "Virtualized large-scale data grids with React Window, keeping scroll and render performant on datasets of 100,000+ records that previously caused UI freezes.",
    ],
  },
  {
    company: "Azentio Software Pvt Ltd",
    role: "Software Engineer",
    period: "Oct 2021 – Jul 2023",
    highlights: [
      "Extended a production insurance portal to support claims, policy management, fund switching, and beneficiary updates, resolving critical CRs blocking customer-facing releases.",
      "Streamlined multiple customer request workflows, reducing portal friction and improving reliability, while coordinating weekly delivery reporting with stakeholders.",
    ],
  },
  {
    company: "SUGAR Cosmetics",
    role: "Software Developer",
    period: "Sep 2020 – Oct 2021",
    highlights: [
      "Built a mobile-first, SEO-optimized e-commerce storefront (login, cart, wishlist, checkout), integrating with backend checkout-flow APIs.",
      "Built a real-time influencer earnings dashboard with search, filtering, and pagination for high-volume order data, and automated commission payout calculation from a manual reconciliation process.",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  domain: string;
  summary: string;
  role: string;
  tech: string[];
  impact: string[];
};

export const projects: Project[] = [
  {
    slug: "bk-sales-platform",
    name: "BK Sales Platform",
    domain: "Sales & Field Operations · Web + Mobile",
    summary:
      "A sales and field-operations platform spanning a React web console and an Expo/React Native mobile app.",
    role: "Owned the web console state architecture and led the mobile app’s data-layer foundation.",
    tech: [
      "React",
      "Redux Toolkit",
      "Zustand",
      "React Query",
      "Expo",
      "React Native",
      "react-intl",
    ],
    impact: [
      "Cut redundant API calls and eliminated a class of stale-state bugs across 10+ interconnected modules.",
      "Built a drag-and-drop task/scheduling board with an integrated PDF viewer and multilingual UI, enabling simultaneous multi-locale launch.",
      "Standardized environment-driven configuration (Vite env vars) across local, staging, and production builds, eliminating environment-specific bugs before release.",
      "Implemented secure, persistent OAuth authentication with refresh tokens, keeping users logged in across app restarts.",
    ],
  },
  {
    slug: "commcorner",
    name: "CommCorner",
    domain: "Community & Society Management · Native App",
    summary:
      "A native iOS/Android app covering attendance, gate approvals, dues, amenities, staff management, and facility reporting.",
    role: "Owned 15+ feature modules end-to-end across a multi-developer team.",
    tech: [
      "Expo Router",
      "TypeScript",
      "NativeWind",
      "Firebase Cloud Messaging",
      "Notifee",
    ],
    impact: [
      "Structured the codebase into isolated feature domains to keep it mergeable across a multi-developer team.",
      "Integrated PhonePe for society dues collection and built a PDF pipeline for receipts and reports, replacing manual spreadsheet billing.",
      "Implemented push notifications end-to-end and added document scanning and QR-code workflows for gate/visitor approvals.",
      "Took the app through Play Store and App Store release readiness with a documented runbook adopted by the team.",
    ],
  },
  {
    slug: "climova",
    name: "CLIMOVA",
    domain: "Enterprise Project Management",
    summary:
      "A platform for visualizing tasks, timelines, and contract durations across concurrent projects.",
    role: "Built the performance-critical visualization and dashboard layer.",
    tech: ["React", "React Window", "Apex Charts"],
    impact: [
      "Built a high-performance Gantt chart system for tasks, timelines, and contract durations.",
      "Virtualized large-scale data grids, keeping scroll and render performant on 100,000+ record datasets that previously froze the UI.",
      "Designed role-based dynamic dashboards that reconfigure views and permissions per user role.",
      "Integrated real-time solar energy monitoring dashboards with multilingual support.",
    ],
  },
  {
    slug: "logit",
    name: "LOGIT",
    domain: "Logistics Management · Web + Mobile",
    summary:
      "A logistics management solution with geo-spatial tooling, invoicing, and a real-time companion mobile app.",
    role: "Built the geo-spatial estimation tool, invoicing engine, and companion mobile app.",
    tech: ["React", "React Native", "Google Maps API", "Firebase"],
    impact: [
      "Built a geo-spatial tool for drawing custom polygons and auto-calculating item capacity per region, replacing manual area estimation.",
      "Designed a flexible invoicing engine supporting daily/monthly/yearly billing cycles with configurable branding.",
      "Shipped a companion React Native app with real-time Firebase chat between drivers, operators, and management, plus offline-friendly workflows.",
    ],
  },
  {
    slug: "ai-chatbot-interface",
    name: "AI Chatbot Interface",
    domain: "Conversational UI",
    summary:
      "A chat interface supporting code, table, and conversational response formats.",
    role: "Designed the UI and the storage/retrieval layer for conversation history.",
    tech: ["React", "TypeScript"],
    impact: [
      "Designed a chat UI supporting code, table, and conversational response formats, modeled on leading chat product UX patterns.",
      "Built an optimized storage/retrieval layer for fast conversation history search.",
    ],
  },
];

export const achievements = [
  "Secured 3rd position, Masai Hackathon.",
  "Recognized by product management and engineering leadership for consistent on-time, high-quality delivery across multiple production releases.",
];

export const education = {
  degree: "B.Tech",
  school: "JNTUK",
  period: "2014 – 2018",
};
