const REPO = "https://github.com/Arashad-Ahamad/FRONTEND-LEARNING-JOURNEY/tree/main/18-reactjs-nextjs-typescript-project/";

export const profile = {
  name: "Arashad Ahamad",
  role: "Front-End Developer",
  tagline: "I build clean, responsive web apps with React & Next.js",
  email: "96arashad@gmail.com",
  location: "Noida, India",
  site: "https://arashad.vercel.app",
  github: "https://github.com/Arashad-Ahamad",
  linkedin: "https://www.linkedin.com/in/arashad-ahamad-768935337/",
  twitter: "https://x.com/ArashadAhamad10",
  resume: "https://drive.google.com/uc?export=download&id=1is9B3UFIVNy8vQW2K5z-2_AKxNhqLkmO",
};

export const stats = [
  { value: "6+", label: "Projects built" },
  { value: "3 Months", label: "Internship completed" },
  { value: "200+ Days", label: "Of consistent coding" },
];

export const skills = [
  { group: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"] },
  { group: "React", items: ["React.js", "Hooks", "Custom Hooks", "Context API", "React Router"] },
  { group: "Next.js", items: ["App Router", "Server Components", "Client Components", "Server Actions", "SSR / SSG", "Metadata API", "Image Optimization"] },
  { group: "State & Data", items: ["Redux Toolkit", "createAsyncThunk", "REST APIs", "Fetch API", "Axios", "localStorage"] },
  { group: "Styling & UI", items: ["Tailwind CSS", "Shadcn UI", "Framer Motion", "SwiperJS", "Responsive Design"] },
  { group: "Forms & Validation", items: ["Zod", "useActionState"] },
  { group: "Tools & Workflow", items: ["Git & GitHub", "npm", "Vite", "ESLint", "Prettier", "Husky"] },
  { group: "Deployment", items: ["Vercel", "Netlify"] },
];

export type Project = {
  name: string; description: string; tech: string[]; features: string[];
  live?: string; github: string; image?: string;
};

// Leave `live` empty to hide the Live Demo button until the app is deployed.
export const projects: Project[] = [
  {
    name: "DevBoard",
    description: "Responsive admin dashboard with data tables, charts and a theme toggle.",
    tech: ["Next.js 16", "TypeScript", "Redux Toolkit", "Framer Motion"],
    features: [
      "Products table with search, sort and pagination",
      "Collapsible sidebar and flicker-free theme toggle",
      "Type-safe Redux slices and API responses",
    ],
    github: `${REPO}/02-devboard`,
    live: "https://devboard-arashad.vercel.app/",
    image: "/images/davboard.png",
  },
  {
    name: "TaskFlow",
    description: "Task manager built on Next.js Server Actions, with no API routes.",
    tech: ["Next.js 16", "TypeScript", "Server Actions", "Zod", "Shadcn UI"],
    features: [
      "Add, toggle and delete tasks through Server Actions",
      "Zod validation on both client and server",
      "useActionState for loading and error states",
    ],
    github: `${REPO}/01-taskflow`,
    live: "https://taskflow-arashad.vercel.app/",
    image: "/images/taskflow.png",
  },
  {
    name: "E-Commerce App",
    description: "E-commerce app with cart management, product detail pages and a light/dark theme.",
    tech: ["Next.js 15", "TypeScript", "Redux Toolkit", "Shadcn UI", "Tailwind CSS"],
    features: [
      "Cart with quantity updates, persisted in localStorage",
      "Light, dark and system theme built on Shadcn UI",
      "Server-rendered product pages with loading and error states",
    ],
    live: "https://ecommerce-arashad.vercel.app/",
    github: "https://github.com/Arashad-Ahamad/ecommerce-app",
    image: "/images/shophub.webp",
  },
  {
    name: "Portfolio",
    description: "Dark-first personal portfolio with smooth navigation, SEO and a dynamic OG image.",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    features: [
      "Dark-first design with light mode toggle using next-themes",
      "SEO with metadata, OpenGraph, Twitter cards and a dynamic OG image",
      "Accessible, fully responsive and type-safe with modular sections",
    ],
    live: "https://arashad.vercel.app",
    github: "https://github.com/Arashad-Ahamad/portfolio-next",
    image: "/images/portfolio.png",
  },
  {
    name: "WorldAtlas",
    description: "Country explorer with live data from the REST Countries API.",
    tech: ["React", "React Router", "Axios", "REST Countries API"],
    features: [
      "Search by name and filter by region",
      "Sort countries by different fields",
      "Detail page for every country",
    ],
    live: "https://world-atlas-arashad.netlify.app/",
    github: "https://github.com/Arashad-Ahamad/react-world-atlas",
    image: "/images/world-atlas.webp",
  },
  {
    name: "React CRUD App",
    description: "Posts manager covering create, read, update and delete.",
    tech: ["React", "Axios", "JSONPlaceholder", "CSS3"],
    features: [
      "Full CRUD against a REST API",
      "Reusable form for add and edit",
      "Responsive on mobile and desktop",
    ],
    live: "https://react-crud-app-arashad.netlify.app/",
    github: "https://github.com/Arashad-Ahamad/react-crud-app",
    image: "/images/crud-app.webp",
  }, 
];
export const experience = [
  {
    title: "Web Development Intern", org: "Genicminds", meta: "Feb 2026 – May 2026 · Noida, India",
    bullets: [
      "Built responsive front-end interfaces with React.js and Tailwind CSS.",
      "Developed reusable React components to improve maintainability.",
      "Improved mobile responsiveness and UI consistency across web applications.",
      "Collaborated with the team using Git and GitHub, following clean-code practices.",
    ],
    tags: ["React.js", "Tailwind CSS", "Git & GitHub"],
  },
  {
  title: "Self-Taught Front-End Journey", org: "Independent", meta: "2025 – Present",
  bullets: [
    "Learned HTML5, CSS3, JavaScript (ES6+), Git & GitHub and npm, then moved to React.js, Redux Toolkit, TypeScript and Next.js 16.",
    "Built 6+ projects, including TaskFlow (Server Actions + Zod) and DevBoard (Redux Toolkit + Framer Motion).",
    "Completed #100DaysOfCode and #200DaysOfCode, and earned freeCodeCamp and ProCodrr certifications.",
  ],
  tags: ["React", "Redux Toolkit", "TypeScript", "Next.js", "Tailwind CSS"],
},
  {
    title: "Bachelor of Arts (Geography)", org: "Veer Bahadur Singh Purvanchal University, Jaunpur", meta: "Completed",
    bullets: [] as string[], tags: [] as string[],
  },
];

export const certifications = [
  { name: "Responsive Web Design", issuer: "freeCodeCamp", url: "https://www.freecodecamp.org/certification/arashad-ahamad/responsive-web-design" },
  { name: "The Complete JavaScript Course", issuer: "ProCodrr", url: "https://drive.google.com/file/d/1iiOR0yrH7sttF1tSepyvYwSvOspSh6ix/view" },
];
