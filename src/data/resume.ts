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
    "Senior Software Developer with 6+ years building production web and mobile applications using React.js, React Native, Next.js, TypeScript, and Node.js. Built data-driven dashboards, real-time features, and end-to-end product functionality across project management, logistics, and e-commerce platforms.",
  languages: ["English", "Telugu", "Hindi"],
};

export const skillGroups = [
  {
    label: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "Zustand",
      "Context API",
      "React Query / TanStack Query",
      "TailwindCSS",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
  },
  {
    label: "Mobile Development",
    skills: [
      "React Native",
      "Expo",
      "Expo Router",
      "NativeWind",
      "iOS & Android",
      "Native Modules",
      "Firebase Cloud Messaging",
      "Push Notifications",
      "App Store & Play Store Deployment (EAS Build)",
    ],
  },
  {
    label: "Backend & Data",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSockets",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "SQL",
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: ["AWS (S3, EC2, Lambda, CloudFront)", "Firebase", "Jenkins"],
  },
  {
    label: "DevOps & Tooling",
    skills: ["GitHub Actions", "CI/CD Pipelines", "Git", "Technical Documentation"],
  },
  {
    label: "AI / LLM",
    skills: ["Conversational / Chat UI", "AI-Assisted Development (Claude Code, GitHub Copilot)"],
  },
  {
    label: "Testing & Quality",
    skills: [
      "React Testing Library",
      "Unit / Integration Testing",
      "Code Reviews",
      "Performance Optimization",
    ],
  },
  {
    label: "Tools & Process",
    skills: ["Git/GitHub", "Jira", "Postman", "Agile/Scrum", "i18n/l10n", "RBAC"],
  },
];

export const experience = [
  {
    company: "Omnics Technologies Pvt Ltd",
    location: "Hyderabad, India",
    role: "Senior Software Developer — React.js & React Native",
    period: "Aug 2023 – Present",
    highlights: [
      "Owns the state architecture (Redux Toolkit, Zustand, React Query) for BK Sales Platform's web console and its companion Expo/React Native app.",
      "Built 15+ feature modules and shipped CommCorner, a community-management app, to both the App Store and Google Play via EAS Build.",
      "Built the Gantt-chart and 100,000+ record data-grid system (React Window) for CLIMOVA, an enterprise project-management platform.",
      "Built the geo-spatial logistics tooling and driver-facing React Native app for LOGIT.",
    ],
  },
  {
    company: "Azentio Software Pvt Ltd",
    location: "Bengaluru, India",
    role: "Software Engineer",
    period: "Oct 2021 – Jul 2023",
    highlights: [
      "Extended a production insurance portal (FWD Insurance Portal) to support claims, policy management, fund switching, and beneficiary updates, resolving critical CRs blocking releases.",
      "Streamlined multiple customer request workflows, improving reliability and portal efficiency.",
      "Coordinated weekly/monthly delivery reporting with stakeholders.",
    ],
  },
  {
    company: "SUGAR Cosmetics",
    location: "Mumbai, India",
    role: "Software Developer",
    period: "Sep 2020 – Oct 2021",
    highlights: [
      "Built a mobile-first, SEO-optimized e-commerce storefront (login, cart, wishlist, checkout) integrated with backend APIs and checkout flow.",
      "Built a real-time influencer earnings dashboard with search, filtering, and pagination for high-volume order data.",
      "Automated commission payout calculation from promo codes and order tracking, replacing manual reconciliation.",
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
      "Built the web console's state layer using Redux Toolkit, Zustand, and React Query across 10+ interconnected modules, cutting out redundant API calls and stale-state bugs.",
      "Built a drag-and-drop task/scheduling board with an integrated PDF viewer and multilingual UI, enabling simultaneous multi-locale launch.",
      "Built the mobile app's data layer using a repository pattern, decoupling screens from API state so new backend contracts plug in via a single flag with no screen-level changes.",
      "Implemented persistent OAuth authentication (password + refresh-token grant) using Expo Secure Store and AsyncStorage, keeping sessions alive across app restarts.",
    ],
  },
  {
    slug: "commcorner",
    name: "CommCorner",
    domain: "Community & Society Management · Native App",
    summary:
      "A native iOS/Android app covering attendance, gate approvals, dues, amenities, staff management, and facility reporting.",
    role: "Owned 15+ feature modules end-to-end across a multi-developer team.",
    tech: ["Expo Router", "TypeScript", "NativeWind", "Firebase Cloud Messaging", "Notifee"],
    impact: [
      "Structured the codebase into isolated feature domains to keep it mergeable across a multi-developer team.",
      "Integrated PhonePe for society dues collection and built a PDF pipeline for receipts and reports, replacing manual spreadsheet billing.",
      "Implemented push notifications end-to-end and added document scanning and QR-code workflows for gate/visitor approvals.",
      "Took the app through Play Store and App Store release readiness using EAS Build/Submit pipelines and config-plugin-based native builds, and wrote the release runbook the team uses going forward.",
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
    tech: ["React", "Node.js", "React Native", "Google Maps API", "Firebase"],
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
    role: "Designed the UI and the retrieval layer for conversation history.",
    tech: ["React", "Node.js"],
    impact: [
      "Designed a chat UI supporting code, table, and conversational response formats, modeled on leading chat product UX patterns.",
      "Built an optimized retrieval layer for fast conversation history search.",
    ],
  },
  {
    slug: "fwd-insurance-portal",
    name: "FWD Insurance Portal",
    domain: "Insurance · Enterprise Web Portal",
    summary:
      "Enterprise insurance portal supporting claims, policy management, fund switching, and beneficiary management.",
    role: "Extended a production insurance portal to support critical customer-facing workflows.",
    tech: ["React", "Node.js"],
    impact: [
      "Extended a production insurance portal to support claims, policy management, fund switching, and beneficiary updates, resolving critical CRs blocking releases.",
      "Streamlined multiple customer request workflows, improving reliability and portal efficiency.",
      "Coordinated weekly/monthly delivery reporting with stakeholders.",
    ],
  },
  {
    slug: "ecommerce-influencer-dashboard",
    name: "E-Commerce Platform & Influencer Dashboard",
    domain: "E-Commerce · Web Platform",
    summary:
      "Mobile-first storefront plus a real-time influencer earnings dashboard with automated commission payouts.",
    role: "Built the storefront and a companion analytics dashboard for the marketing team.",
    tech: ["React", "Node.js", "AWS"],
    impact: [
      "Built a mobile-first, SEO-optimized e-commerce storefront (login, cart, wishlist, checkout) integrated with backend APIs and checkout flow.",
      "Built a real-time influencer earnings dashboard with search, filtering, and pagination for high-volume order data.",
      "Automated commission payout calculation from promo codes and order tracking, replacing manual reconciliation.",
    ],
  },
];

export const achievements = [
  "Secured 3rd position, Masai Hackathon.",
  "Recognized by product management and engineering leadership for consistent on-time, high-quality delivery across multiple production releases.",
];

export const education = {
  degree: "B.Tech, Computer Science",
  school: "JNTUK",
  period: "2014 – 2018",
};
