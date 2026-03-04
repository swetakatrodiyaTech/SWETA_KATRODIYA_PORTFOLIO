// Navigation links
export const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Contact"];

// Skills data
export const SKILLS = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "HTML5", "CSS3"] },
  { category: "Framework", items: ["ReactJS", "Next.js"] },
  { category: "UI Libraries", items: ["Chakra UI", "Tailwind CSS", "Bootstrap", "Material-UI"] },
  { category: "Backend", items: ["Node.js", "REST APIs", "Socket.io", "Express"] },
  { category: "Tools", items: ["Git", "GitHub", "Vite", "npm", "Figma"] },
  { category: "Deployment", items: ["Netlify", "Vercel", "Render"] },
];

// Experience data (company names retained, project details generic)
export const EXPERIENCE = [
  {
    role: "Junior Frontend Developer",
    company: "iboon Technologies (Curebits Techlabs)",
    period: "May 2024 – Present",
    points: [
      "Developed responsive web applications for desktop, tablet, and mobile using ReactJS.",
      "Integrated REST APIs to enhance functionality and real-time data synchronization.",
      "Built reusable and scalable React components following modern best practices.",
      "Maintained clean code practices using Git version control and participated in code reviews.",
      "Collaborated with backend team to optimize API response structures for frontend efficiency."
    ],
  },
  {
    role: "ReactJS Trainee",
    company: "Phonix Digital Solutions",
    period: "Jan 2024 – Apr 2024",
    points: [
      "Developed responsive UI components using ReactJS and Bootstrap.",
      "Improved cross-browser compatibility and mobile responsiveness across multiple client projects.",
      "Assisted in debugging and optimizing React component re-renders for better performance."
    ],
  },
  {
    role: "ReactJS Trainee",
    company: "200 OK Solutions",
    period: "May 2023 – Jan 2024",
    points: [
      "Built responsive web interfaces using ReactJS and JavaScript.",
      "Collaborated with senior developers to implement design systems and component libraries.",
      "Participated in daily stand-ups and agile development processes."
    ],
  },
];

// Education data
export const EDUCATION = [
  {
    degree: "B.E. in Computer Engineering",
    institution: "Om Engineering College (GTU)",
    period: "2020 – 2024",
    cgpa: "8.10",
    color: "#93C5FD"
  }
];

// Achievement data
export const ACHIEVEMENTS = [
  {
    title: "Winner — Smart India Hackathon 2022",
    description: "Dairy Development & Management Portal · KL University, Vijayawada",
    emoji: "🏆"
  }
];

// Projects data - COMPANY PROJECTS ANONYMIZED (only domain area shown)
export const PROJECTS = [
  {
    domain: "Legal Tech",
    type: "Digital Signature Platform",
    tech: ["ReactJS", "Node.js", "REST APIs", "Email Integration"],
    desc: "Secure document signing workflows supporting 1-to-1, 1-to-many, and group signing with email notifications, timestamping, and audit trails.",
    emoji: "✍️",
    color: "#6EE7B7",
  },
  {
    domain: "Social Media",
    type: "Image Detection & Sharing",
    tech: ["ReactJS", "Node.js", "Socket.io", "REST APIs"],
    desc: "Real-time photo sharing application with custom folders, personal photo section, and instant album sharing via Socket.io.",
    emoji: "📸",
    color: "#93C5FD",
  },
  {
    domain: "HealthTech",
    type: "Healthcare Platform",
    tech: ["ReactJS", "REST APIs", "Authentication"],
    desc: "Role-based portal for patients and doctors with integrated authentication and medical APIs for user management and healthcare data.",
    emoji: "🏥",
    color: "#FCA5A5",
  },
  {
    domain: "HealthTech",
    type: "Healthcare Portal",
    tech: ["ReactJS", "Tailwind CSS", "REST APIs"],
    desc: "User-friendly medical UI for appointment scheduling and patient data management with smooth API integration.",
    emoji: "💊",
    color: "#FDE68A",
  },
  {
    domain: "Retail Tech",
    type: "E-Commerce Platform",
    tech: ["ReactJS", "Chakra UI", "REST APIs", "Payment Integration"],
    desc: "Responsive e-commerce platform with product catalog, custom support services, and payment gateway integration.",
    emoji: "🛒",
    color: "#C4B5FD",
  },
];

// Contact information
export const CONTACT = {
  email: "ceswetakatrodiya@gmail.com",
  phone: "+91 8758539431",
  linkedin: "https://www.linkedin.com/in/sweta-katrodiya",
  location: "Ahmedabad, Gujarat",
  github: "https://github.com/sweta-katrodiya", // Add if you have one
};

// Personal info
export const PERSONAL_INFO = {
  name: "Sweta Katrodiya",
  title: "Frontend Developer",
  shortBio: "Frontend Developer with 1.5+ years of experience building responsive, scalable web apps with ReactJS. Passionate about growing into a Fullstack / MERN Stack Developer — driven to craft end-to-end digital experiences.",
  stats: [
    { value: "1.5+", label: "Years Exp" },
    { value: "8", label: "Projects" },
    { value: "8.10", label: "CGPA" },
    { value: "🏆", label: "SIH 2022 Winner" }
  ]
};
