import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Priyanshu Ranjan",
  initials: "PR",
  url: "https://priyanshu.io",
  location: "Ranchi, India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Full stack developer based in India. Tech enthusiast, Problem solver, Quick learner and Collaborative team player",
  summary:
    "I am a final-year B.Tech student at IIIT Ranchi, specializing in cutting-edge technology and passionate about innovation. With hands-on experience in projects and strong problem-solving skills, I am eager to contribute to impactful tech solutions. I thrive in collaborative environments and am driven to continuously learn and grow in the ever-evolving field of technology.",
  avatarUrl: "me.jpg",
  skills: [
    // 
    "React.js",
    "Next.js",
    "Typescript",
    "Node.js",
    "Javascript",
    "Express.js",
    "CSS",
    "HTML",
    "MongoDB",
    "MySQL",
    "PostgresSQL",
    "Docker",
    "AWS",
    "Cloudflare",
    "C",
    "C++",
    "Git",
    "Github",
    "Postman",
    "Figma",
     "Bootstrap",
  ],
  
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://drive.google.com/file/d/1GPJ-X0Z_bLn-CzJhODRTI1zHgXZLHY6u/view?usp=drive_link" , icon: NotebookIcon, label: "Resume" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/priyanshuranjan16",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/priyanshu-ranjan-27a74224a/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/priyanshu_1_6",
        icon: Icons.x,

        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/blade_xd", 
        icon: Icons.leetcode, 
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "priyanshu.iiitr@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Alpixn Technologies Private Limited",
      href: "https://www.linkedin.com/company/alpixn",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/alpixnlogo.jpeg",
      start: "May 2025",
      end: "June 2025",
      description:
        "Contributed to transforming UI/UX design prototypes into fully responsive, production-ready interfaces, ensuring  precision and responsiveness. Worked closely with senior developers to implement UI components and fix bugs, gaining hands-on experience with modern frontend workflows.",
    },
   
  ],
  education: [
    {
      school: "Indian Institute of Information Technology, Ranchi",
      href: "https://iiitranchi.ac.in/",
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      logoUrl: "/iiitlogo.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Jawahar Vidya Mandir, Shyamali",
      href: "http://www.jvmshyamali.com/",
      degree: "Intermediate",
      logoUrl: "/jvmlogo.png",
      start: "2019",
      end: "2021",
    },
    
    
  ],
  projects: [
    {
      title: "SensAi",
      href: "https://sens-ai-five.vercel.app/",
      dates: "June 2025",
      active: true,
      description:
        "Developed an AI-powered career coach that helps users explore career paths, build resumes, and prepare for interviews by offering personalized guidance and resources.",
      technologies: [
        "Next.js",
        "Node.js",
        "Inngest",
        "Prisma",
        "Neondb",
        "Clerk Auth",
        "TailwindCSS",
        "Shadcn UI",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://sens-ai-five.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/priyanshuranjan16/SensAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sensai_bg.jpg",
      video:
        "",
    },
    {
      title: "Fitron-AI",
      href: "https://fitronai.vercel.app/",
      dates: "May 2025",
      active: true,
      description:
        "An AI-based fitness and diet plan generator that creates personalized workout routines and meal plans based on user goals and fitness requirements.",
      technologies: [
        "Next.js",
        "Node.js",
        "Convex",
        "Vapi AI",
        "Gemini AI",
        "Clerk Auth",
        "TailwindCSS",
        "Shadcn UI",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://fitronai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/priyanshuranjan16/Fitron-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fitron_bg.jpg",
      video: "",
    },
    {
      title: " Trimrr",
      href: "https://trimrr-coral.vercel.app/",
      dates: "May 2025",
      active: true,
      description:
        "A simple and efficient URL shortener app that lets users create short, shareable links from long URLs. Built with a clean interface and tracks basic analytics like click count.",
      technologies: [
       "React.js",
       "Node.js",
       "Supabase",
       "OAuth",
       "Reacharts",
       "Yup",
       "TailwindCSS",
       "ShadcnUI",
      ],
      links: [
        {
          type: "Website",
          href: "https://trimrr-coral.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/priyanshuranjan16/Trimrr",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/trimrr_bg.jpg",
      video: "",
    },
    {
      title: "Chessly",
      href: "https://chessly-2.onrender.com/",
      dates: "April 2025",
      active: true,
      description:
        "A minimal multiplayer chess website where users can join or create a game room and play chess in real time with another player, using a clean and responsive interface.",
      technologies: [
        "Next.js",
        "React.js",
        "Typescript",
        "Websockets",
        "TailwindCSS",
        "Chess.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://chessly-2.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/priyanshuranjan16/chessly",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chessly_bg.jpg",
      video:
        "",
    },
  ],
 
} as const;
