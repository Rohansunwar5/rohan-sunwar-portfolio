import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rohan Sunwar",
  initials: "RS",
  url: "https://dillion.io",
  location: "Bangalore, Karnataka",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer. I love building things and helping people. Very active on Twitter.",
  summary:
    "I am a Software Engineer with expertise in backend development. I previously founded Vesitora, worked on high-impact projects for startups and government NDA initiatives, and completed numerous freelance projects with consistently satisfactory reviews. These experiences have honed my ability to deliver efficient, scalable solutions tailored to diverse requirements.",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQF-5KapOAbQYg/profile-displayphoto-shrink_800_800/B56ZPfQsxHHoAg-/0/1734617517589?e=1740009600&v=beta&t=-NetUar_SD8ZmYSusPR5BBwK_QS_kvrmHUuyzq9ctO8",
  skills: [
    "Javascript",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "AWS",
    "Go",
    "Postgres",
    "Docker",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Rohansunwar5",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rohan-sunwar-828b7b216/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/fg_rohnn",
        icon: Icons.x,

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
      company: "Workplay Studio",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Backend Engineer",
      logoUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQE7oR4g67V9zw/company-logo_200_200/company-logo_200_200/0/1630638997540?e=1742428800&v=beta&t=5tzulNCWkRCG9YOhYy6sFMlGkrkvcDCZ3q63Ks0sM_k",
      start: "Aug 2024",
      end: "Present",
      description:
        "Developed scalable backend architecture that supports game transferability, allowing developers to easily integrate and expand game ecosystem across different web environments. Developed comprehensive admin panel with advanced analytics, delivering actionable insights into user engagement and platform performance metrics. Executed successfully managing a complex code rollback, demonstrating advanced troubleshooting skills and effective cross-team communication during high-pressure technical challenge.",
    },
    {
      company: "Government contract",
      badges: [],
      href: "",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/",
      start: "April 2024",
      end: "December 2024",
      description:
      "Architected and executed breakthrough performance optimization strategy, dramatically reducing API response time by 90% – transforming execution from a cumbersome 39 seconds to a lightning-fast 3 seconds, significantly enhancing system responsiveness and user experience.  Engineered comprehensive backend redesign, implementing advanced scalability protocols and architectural patterns to optimize web application infrastructure and development efficiency . Developed cutting-edge data extraction ecosystem using Node.js and Puppeteer, creating robust web scraping solutions with precision-driven, real-time data retrieval",
    },
    {
      company: "Breathing Ai",
      href: "https://nvidia.com/",
      badges: [],
      location: "New York, USA",
      title: "Software Engineer Intern",
      logoUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQHhj9UUWLrJ-w/company-logo_200_200/company-logo_200_200/0/1728505420632/breathingai_logo?e=1742428800&v=beta&t=h3RHfwYDxrYWxGzfmlyAEK4IrDmKAvwKOVdGySknUQ0",
      start: "May 2023",
      end: "July 2020",
      description:
        "Conducted comprehensive backend architecture diagnostic, strategically identifying and eliminating critical performance bottlenecks to optimize system efficiency and responsiveness. Developed sophisticated multi-layered caching infrastructure, strategically reducing database load and implementing intelligent data retrieval mechanisms that dramatically accelerated system performance",
    },
    {
      company: "Jain IT",
      href: "https://splunk.com",
      badges: [],
      location: "Bangalore, Karnataka",
      title: "Software Engineer Intern",
      logoUrl: "https://media.licdn.com/dms/image/v2/C560BAQFl1P_Atk4SqA/company-logo_200_200/company-logo_200_200/0/1630665075814/jaindeemedtobeuniversity_logo?e=1742428800&v=beta&t=KajahVmBC7dxT-PgtisOpMwd2HCmLq5XywFi50s4k1E",
      start: "January 2022",
      end: "April 2022",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Node.js. Leveraged the Admin API to develop the Analytics part",
    },
  ],
  education: [
    
   
    {
      school: "Jain Deemed-to-be University",
      href: "https://uwaterloo.ca",
      degree: "Masters of Computer Application (MCA)",
      logoUrl: "https://media.licdn.com/dms/image/v2/C560BAQFl1P_Atk4SqA/company-logo_200_200/company-logo_200_200/0/1630665075814/jaindeemedtobeuniversity_logo?e=1742428800&v=beta&t=KajahVmBC7dxT-PgtisOpMwd2HCmLq5XywFi50s4k1E",
      start: "2024",
      end: "2026",
    },

    {
      school: "Jain Deemed-to-be University",
      href: "https://buildspace.so",
      degree: "Bachelor's of Computer Application (BCA)",
      logoUrl: "https://media.licdn.com/dms/image/v2/C560BAQFl1P_Atk4SqA/company-logo_200_200/company-logo_200_200/0/1630665075814/jaindeemedtobeuniversity_logo?e=1742428800&v=beta&t=KajahVmBC7dxT-PgtisOpMwd2HCmLq5XywFi50s4k1E",
      start: "2021",
      end: "2024",
    },
    {
      school: "DAV",
      href: "https://wlu.ca",
      degree: "High School (Science)",
      logoUrl: "http://www.davsiliguri.com/images/header_logo.png",
      start: "2019",
      end: "2020",
    },
    
  ],
  projects: [
    {
      title: "Synthify",
      href: "https://synthify-virid.vercel.app",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Developed a cutting-edge SaaS productivity platform. Synthify enables users to create private and collaborative workspaces with features like real-time cursor tracking and live editing for seamless collaboration. Inspired by Notion but enhanced with instant updates and dynamic teamwork capabilities, Synthify redefines productivity and team collaboration.",
      technologies: [
        "Next.js",
        "Typescript",
        "Drizzle",
        "Supabase",
        "Sockets",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://synthify-virid.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Rohansunwar5/syn",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Synthify.png",
      video:
        "",
    },
    {
      title: "Rocket Sleeves",
      href: "https://magicui.design",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "Designed, developed and solid animated UI components for my client.",
      technologies: [
        "React",
        "Typescript",
        "MongoDb",
        "Node.js",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://rocketsleeves.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/RocketSleeves.png",
      video: "",
    },
    {
      title: "Nomads Lane",
      href: "https://llm.report",
      dates: "November 2024 - December 2024",
      active: true,
      description:
        "I developed a sleek and user-friendly static website for a travel agency client, designed to showcase their services, destinations, and travel packages. The site features an intuitive layout, vibrant imagery, and responsive design, ensuring seamless navigation across devices. It highlights key destinations, customer testimonials, and contact information, creating an engaging experience for potential travelers.",
      technologies: [
        "Nextjs",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Acertinity UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://travel-website-uipg.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Rohansunwar5/travel-website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/NomadsLane.png",
      video: "",
    },
    {
      title: "Crowd-Funding",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an CrowdFunding platform where users can donate to campaigns using crypto, with the help of Meta Mask",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "Solidity",
        "Clerk",
        "Meta Mask",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Rohansunwar5/fundraiser",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/CrowdFunding.png",
      video:
        "",
    },
  ],
  hackathons: [
   
  ],
} as const;
