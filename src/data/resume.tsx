import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
{/*https://cdn.llm.report/openai-demo.mp4 */}

export const DATA = {
  name: "Raghav Ghulyani",
  initials: "RG",
  description:
    "Software Engineer. Turning coffee into code since 2023.",
  summary:
    "I am pursuing my Bachelors in Software Engineering from Delhi Technological University. I have been working as a Software Engineer for over a year now. I have worked with various technologies like React, Next.js, Typescript, Node.js, Postgres, Docker, C++, and many more. Have also worked at two startups about which I explain below.",
  avatarUrl: "/me2.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "Node.js",
    "Postgres",
    "MongoDB",
    "Prisma",
    "Docker",
    "Terraform",
    "Azure",
    "Linux",
    "Git",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "raghav77g@gmail.com",
    tel: "+91 7838031228",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vahghar",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/raghav-g-6856a4249/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Nocage.in",
      href: "https://nocage.in/",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/suitcase.png",
      start: "October 2024",
      end: "November 2024",
      description:
        "Architected and deployed 15+ REST API endpoints with Node.js, TypeScript, and Prisma, managing 10K+ daily requests. Created API documentation with Swagger, reducing onboarding time by 25%. Integrated backend services with MongoDB for seamless data storage and enhanced front-end interfaces using React and TypeScript for two platforms.",
    },
    {
      company: "3poch Labs",
      href: "https://www.neuravaults.xyz/",
      badges: [],
      location: "Remote",
      title: "Backend Developer",
      logoUrl: "/suitcase.png",
      start: "August 2025",
      end: "October 2025",
      description:
        "Extracted and processed on-chain data from Solidity smart contracts across 3 DeFi lending protocols on HyperEVM chains to calculate real-time APY metrics for yield optimization. Built a Python FastAPI backend hosting a 24/7 Telegram bot service for continuous platform monitoring. Designed automated alert system to push real-time notifications for yield opportunities and rebalancing events directly to users via Telegram",
    },
  ],
  education: [
    {
      school: "Ahlcon Public School",
      degree: "CBSE",
      logoUrl: "/graduate.png",
      start: "2009",
      end: "2022",
    },
    {
      school: "Delhi Technological University",
      degree: "Bachelor's Degree of Software Engineering ",
      logoUrl: "/graduate.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "BrowserSQL",
      href: "https://sql-on-browser-zeta.vercel.app/",
      dates: "November 2025",
      active: true,
      description:
        "A client-side SQL query tool for instant, in-browser data analysis of CSV and Excel files.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Papaparse",
        "Alasql"
      ],
      links: [
        {
          type: "Website",
          href: "https://sql-on-browser-zeta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/browser_sql.mp4",
    },
    {
      title: "CommitSense",
      href: "https://github.com/vahghar/project-one-start",
      dates: "January 2025",
      active: true,
      description:
        "A platform where you can summarize commits and ask questions about them. Get important flashcards for meetings",
      technologies: [
        "Next.js",
        "Typescript",
        "tRPC",
        "NeonDB",
        "Postgres",
        "Assembly AI",
        "Gemini AI",
        "Groq AI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vahghar/realtime-chat-app",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://git-helper-seven.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/git_proj.png",
      video:
        "",
    },
    {
      title: "Chat Easy",
      href: "https://github.com/vahghar/realtime-chat-app",
      dates: "December 2024",
      active: true,
      description:
        "A simple chat platform enabling real-time communication. Built with a responsive UI, it is powered by WebSockets using socket.io for low-latency updates, it ensures a smooth and engaging user experience, ideal for personal and professional interactions.",
      technologies: [
        "React.js",
        "Javascript",
        "MongoDB",
        "Node.js",
        "TailwindCSS",
        "Magic UI",
        "Socket.io",
        "E2EE"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vahghar/realtime-chat-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/chat_easy.mp4",
    },
    /*{
      title: "Content Sphere",
      href: "https://github.com/vahghar/ContentSphere",
      dates: "October 2024",
      active: true,
      description:
        "Developed a website where an admin can create a queue of music/videos which is chosen by the users and the content plays according to the upvotes given by the users. A saas for music/video streaming.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Stripe",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vahghar/ContentSphere",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/content_sphere.png",
      video: "",
    },*/
    /*{
      title: "Auth Boilerplate",
      href: "https://website-boilerplate-with-auth.vercel.app/",
      dates: "November 2024",
      active: true,
      description:
        "Developed a website Boilerplate with authentication and authorization.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Github OAuth",
      ],
      links: [
        {
          type: "Website",
          href: "https://website-boilerplate-with-auth-git-master-vahghars-projects.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vahghar/website-boilerplate-with-auth",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/bp_1.png",
      video:
        "",
    },*/
  ],

} as const;
