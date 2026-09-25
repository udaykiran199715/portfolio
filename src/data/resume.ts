export const profile = {
  name: "Uday Kiran Akula",
  title: "Senior Software Developer",
  tagline: "React · Next.js · React Native · Node.js",
  location: "Hyderabad, India",
  email: "udaykiran199715@gmail.com",
  phone: "+91 8106454161",
  github: "https://github.com/udaykiran199715",
  linkedin: "https://www.linkedin.com/in/udaykiranakula/",
  site: "https://portfolio-crl.pages.dev",
  resumeUrl: "/Uday_Kiran_Akula_Resume.pdf",
  summary:
    "Senior Software Developer with 6+ years building production web and mobile applications using React.js, Next.js, React Native, TypeScript, and Node.js. Experienced in data-heavy dashboards, dynamic forms and workflows, virtualized data grids, Gantt charts, real-time charts, PDF generation, and mobile app releases to the App Store and Google Play. Worked across solar energy, logistics, CRM, community management, insurance, and e-commerce products.",
  languages: ["English", "Telugu", "Hindi"],
};

export const skillGroups = [
  {
    label: "Frontend",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "React.js",
      "Next.js (SSR, SSG, ISR)",
      "Redux",
      "Redux Toolkit (RTK)",
      "Zustand",
      "React Query (TanStack Query)",
      "React Hooks",
      "Context API",
      "Tailwind CSS",
      "Material UI (MUI)",
      "Bootstrap",
      "shadcn/ui",
      "Responsive Design",
    ],
  },
  {
    label: "Forms & UI Libraries",
    skills: [
      "Formik",
      "Yup",
      "Zod",
      "react-window (virtualization)",
      "ApexCharts",
      "Gantt Charts",
      "react-dnd",
      "Craft.js",
      "Google Maps API",
      "Turf.js",
      "PDF Generation",
    ],
  },
  {
    label: "Mobile",
    skills: [
      "React Native (CLI & Expo)",
      "Expo Router",
      "EAS Build",
      "NativeWind",
      "Native Modules",
      "Camera",
      "Document Scanner",
      "Signature Capture",
      "Push Notifications (Firebase Cloud Messaging)",
      "Expo Secure Store",
      "OTA Updates (expo-updates)",
      "WebView",
      "Xcode",
      "Android Studio",
      "App Store & Google Play Releases",
    ],
  },
  {
    label: "Architecture",
    skills: [
      "Reusable Component Libraries",
      "Atomic Design",
      "Repository Pattern",
      "Feature-Based Folder Structure",
      "Performance Optimization (virtualization, server-state caching)",
    ],
  },
  {
    label: "Backend & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Sequelize ORM",
      "Cron Jobs",
      "Third-Party API Integration",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: ["AWS (Lambda, S3, CloudFront)", "Firebase", "Jenkins", "GitLab CI/CD", "Git"],
  },
  {
    label: "AI",
    skills: [
      "LLM / RAG Application Frontend",
      "Chat UI",
      "AI-Assisted Development (Claude Code, GitHub Copilot)",
    ],
  },
  {
    label: "Testing & Quality",
    skills: [
      "React Testing Library",
      "Unit / Integration / End-to-End Testing",
      "Code Reviews",
      "Quality Assurance",
    ],
  },
  {
    label: "Practices",
    skills: [
      "Internationalization (i18n)",
      "RBAC",
      "Theming",
      "Core Web Vitals",
      "SEO",
      "Agile/Scrum",
      "Jira",
      "Postman",
      "Technical Documentation",
      "Client Communication",
    ],
  },
];

export const experience = [
  {
    company: "Omnics Technologies Pvt Ltd",
    location: "Hyderabad, India",
    role: "Senior Software Developer",
    period: "Aug 2023 – Present",
    highlights: [
      "Built virtualized data grids handling 100,000+ records and an interactive Gantt chart with task dependencies for a solar project management platform.",
      "Built a React Native driver app with signature capture, document scanning, and on-device PDF generation for a logistics platform.",
      "Built a CRM platform with configurable pipelines, phases, steps, and fields, plus drag-and-drop boards, a Craft.js email template editor, and a React Native (Expo) project management app.",
      "Built a community management app for iOS and Android and shipped it to the App Store and Google Play using Expo EAS Build, Xcode, and Android Studio, with OTA updates for releasing fixes without a store resubmission.",
      "Built the frontend of an internal LLM/RAG document platform with a chat UI that renders code, tables, and conversational responses.",
      "Structured mobile codebases using Atomic Design and a repository pattern, and built reusable component libraries delivered in TypeScript with i18n, theming, RBAC, and a focus on performance.",
    ],
  },
  {
    company: "Azentio Software Pvt Ltd",
    location: "Bengaluru, India",
    role: "Engineer — Application Management",
    period: "Oct 2021 – Jul 2023",
    highlights: [
      "Built frontend and backend features for an insurance customer portal where users view their policies, buy new policies, and raise claims, using React, Redux, Node.js, Express.js, and Sequelize.",
      "Built multi-step policy and claim forms with questionnaires, rider selection, bank details, and document uploads, plus draft saving and status tracking (draft, submitted, in progress, approved, rejected).",
      "Built APIs that store customer requests and pass them to the client's insurance systems, with cron jobs that sync claim and policy status updates back to the portal.",
      "Built a React Native app (native login with WebView) and handled App Store and Play Store releases; managed Jenkins and GitLab CI/CD builds across SIT, UAT, Pre-Prod, and Prod.",
      "Ran weekly client calls, prepared minutes of meetings, wrote technical documents for change requests, and resolved CRs and bugs tracked in Jira.",
    ],
  },
  {
    company: "SUGAR Cosmetics",
    location: "Mumbai, India",
    role: "Software Developer",
    period: "Sep 2020 – Oct 2021",
    highlights: [
      "Built the e-commerce website frontend end-to-end in Next.js — homepage, collections, product pages, cart, checkout, and payment — with fully responsive layouts.",
      "Improved page performance and SEO using SSR, SSG, and ISR along with Core Web Vitals optimization.",
      "Built a CMS dashboard to manage homepage banners, product content, and images, including multiple homepage layouts, with image handling through AWS Lambda and CloudFront.",
      "Built an influencer earnings dashboard, frontend and backend (Node.js, AWS Lambda, MySQL), showing orders placed per promo code and each influencer's earnings for the marketing team.",
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
    domain: "CRM · Web + Mobile",
    summary:
      "A CRM platform with configurable pipelines, phases, steps, and fields, plus a React Native (Expo) project management app.",
    role: "Built the configurable pipeline engine, drag-and-drop boards, email template editor, and the mobile app foundation.",
    tech: ["React", "Craft.js", "react-dnd", "React Query", "React Native", "Expo"],
    impact: [
      "Built configurable pipelines, phases, steps, and fields, where deals move between phases only after mandatory fields are validated.",
      "Built drag-and-drop boards and a Craft.js email template editor.",
      "Built a React Native (Expo) project management app.",
      "Structured the mobile codebase using Atomic Design (atoms, molecules, organisms) and a repository pattern for the API layer, so backend changes plug in without touching screens.",
      "Implemented secure OAuth login with token refresh using Expo Secure Store, and used React Query for server-state caching to cut redundant API calls.",
    ],
  },
  {
    slug: "commcorner",
    name: "CommCorner",
    domain: "Community & Society Management · React Native App",
    summary:
      "A React Native (Expo) app for iOS and Android covering attendance, gate approvals, dues, amenities, and staff management.",
    role: "Built the app end-to-end, from feature modules to store releases.",
    tech: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "NativeWind",
      "Firebase Cloud Messaging",
      "Razorpay",
      "expo-updates",
    ],
    impact: [
      "Integrated Razorpay payments for dues collection and built PDF generation and viewing for receipts.",
      "Implemented push notifications (Firebase Cloud Messaging) and QR-code workflows for gate and visitor approvals.",
      "Shipped to the App Store and Google Play using Expo EAS Build, Xcode, and Android Studio.",
      "Added OTA updates (expo-updates) for releasing fixes without a store resubmission.",
    ],
  },
  {
    slug: "climova",
    name: "CLIMOVA",
    domain: "Solar Project Management · Gantt Chart",
    summary:
      "A solar energy project management platform with project, phase, task, and subtask workflows and an interactive Gantt chart.",
    role: "Built the workflow engine, virtualized data grids, Gantt chart, and real-time energy dashboards.",
    tech: ["React", "Gantt Chart", "react-window", "ApexCharts"],
    impact: [
      "Built a project, phase, task, and subtask workflow with AND/OR task dependencies and completion checks on mandatory fields across nearly 300 configurable location fields.",
      "Implemented virtualized data grids with react-window to display 100,000+ records across thousands of locations.",
      "Built an interactive Gantt chart with dependency arrows and status colors (to-do, in progress, overdue, completed).",
      "Built real-time energy charts with ApexCharts refreshed every minute (solar generation, consumer distribution, grid import/export), KPI reports with Excel export, and a partner contracts module for one-time and recurring contracts.",
    ],
  },
  {
    slug: "logit",
    name: "LOGIT",
    domain: "Logistics & Rental Management · Web + Mobile",
    summary:
      "A logistics and rental management platform covering item movements, tours, and the sales flow from offer to order to invoice, with a React Native driver app.",
    role: "Built the rental and sales workflows, the map-based area planner, and the driver app.",
    tech: ["React", "React Native", "Google Maps API", "Turf.js"],
    impact: [
      "Built item movements between projects and warehouses, tours, and the sales flow from offer to order to invoice, with configurable PDF layouts for each document.",
      "Implemented rental invoice calculations (daily, weekly, monthly, yearly billing, excluded dates, weekend rules).",
      "Built a Google Maps area planner using Turf.js that estimates item counts from a drawn polygon.",
      "Built a React Native driver app with a step-by-step tour flow (vehicle check, loading, unloading), camera capture, document scanning, signature capture, and on-device PDF generation with download and share.",
    ],
  },
  {
    slug: "llm-rag-document-platform",
    name: "LLM / RAG Document Platform",
    domain: "AI · Conversational UI",
    summary:
      "The frontend of an internal LLM/RAG document platform with a chat UI that renders code, tables, and conversational responses.",
    role: "Built the frontend and the chat UI.",
    tech: ["React", "TypeScript"],
    impact: [
      "Built the frontend of an internal LLM/RAG document platform.",
      "Built a chat UI that renders code, tables, and conversational responses.",
    ],
  },
  {
    slug: "fwd-insurance-portal",
    name: "FWD Insurance Portal",
    domain: "Insurance · Enterprise Web Portal",
    summary:
      "An insurance customer portal where users view their policies, buy new policies, and raise claims.",
    role: "Built frontend and backend features and handled client delivery for change requests.",
    tech: ["React", "Redux", "Node.js", "Express.js", "Sequelize"],
    impact: [
      "Built multi-step policy and claim forms with questionnaires, rider selection, bank details, and document uploads, plus draft saving and status tracking (draft, submitted, in progress, approved, rejected).",
      "Built APIs that store customer requests and pass them to the client's insurance systems, with cron jobs that sync claim and policy status updates back to the portal.",
      "Built a React Native app (native login with WebView) and handled App Store and Play Store releases; managed Jenkins and GitLab CI/CD builds across SIT, UAT, Pre-Prod, and Prod.",
      "Ran weekly client calls, prepared minutes of meetings, wrote technical documents for change requests, and resolved CRs and bugs tracked in Jira.",
    ],
  },
  {
    slug: "ecommerce-influencer-dashboard",
    name: "E-Commerce Platform & Influencer Dashboard",
    domain: "E-Commerce · Next.js Web Platform",
    summary:
      "A fully responsive Next.js e-commerce storefront with a CMS dashboard and an influencer earnings dashboard.",
    role: "Built the storefront, the CMS dashboard, and the influencer earnings dashboard.",
    tech: ["Next.js", "Node.js", "AWS Lambda", "CloudFront", "MySQL"],
    impact: [
      "Built the storefront end-to-end in Next.js — homepage, collections, product pages, cart, checkout, and payment — with fully responsive layouts.",
      "Improved page performance and SEO using SSR, SSG, and ISR along with Core Web Vitals optimization.",
      "Built a CMS dashboard to manage homepage banners, product content, and images, including multiple homepage layouts, with image handling through AWS Lambda and CloudFront.",
      "Built an influencer earnings dashboard, frontend and backend (Node.js, AWS Lambda, MySQL), showing orders placed per promo code and each influencer's earnings.",
    ],
  },
];

export const achievements = [
  "Completed the Full Stack Web Development Program at Masai School (2020).",
  "Secured 3rd position, Masai Hackathon.",
];

export const education = {
  degree: "B.Tech",
  period: "2014 – 2018",
};
