import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Blog Application",
    href: "/projects",
    tags: ["Reactjs", "Tailwindcss", "Firebase", "Vercel"],
    image: {
      LIGHT: "/images/projects/blog-app.png",
      DARK: "/images/projects/blog-app.png",
    },
  },
  {
    index: 1,
    title: "E-Commerce",
    href: "/projects",
    tags: [
      "NextJs",
      "Tailwindcss",
      "Redux",
      "API",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/e-commerce.png",
      DARK: "/images/projects/e-commerce.png",
    },
  },
  {
    index: 2,
    title: "Crypto Site",
    href: "/projects",
    tags: ["HTML", "CSS", "Javascript"],
    image: {
      LIGHT: "/images/projects/crypto.png",
      DARK: "/images/projects/crypto.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Blog Application",
    favicon: "/images/projects/logos/blog.png",
    imageUrl: [
      "/images/projects/blog-1.png",
      "/images/projects/blog-2.png",
    ],
    description:
      "I developed a blog application with a modern, responsive UI that enables users to read, create, and comment on posts. It integrates dynamic content handling using React state for the comments section, offering a seamless experience for engaging with blog content.",
    sourceCodeHref: "https://github.com/umarprogrammer19/React-Blogging-App",
    liveWebsiteHref: "https://uf-react-blogging-app.vercel.app/",
  },
  {
    name: "E-Commerce Site",
    favicon: "/images/projects/logos/e-logo.png",
    imageUrl: [
      "/images/projects/e-1.png",
      "/images/projects/e-2.png",
      "/images/projects/e-3.png",
    ],
    description:
      "I created a sleek e-commerce platform designed for an intuitive shopping experience. With features like product browsing, filtering, and a streamlined checkout process, the app ensures smooth navigation and functionality.",
    sourceCodeHref: "https://github.com/umarprogrammer19/next-e-commerce",
    liveWebsiteHref: "https://uf-next-e-commerce.vercel.app",
  },
  {
    name: "Cryptex",
    favicon: "/images/projects/logos/crypto.png",
    imageUrl: [
      "/images/projects/cr1.png",
      "/images/projects/cr2.png",
      "/images/projects/cr3.png",
      "/images/projects/cr4.png",
    ],
    description:
      "I built a crypto web app that offers live price tracking and market insights, providing users with an intuitive way to stay updated on cryptocurrency trends.",
    sourceCodeHref: "https://github.com/umarprogrammer19/Crypto-Site",
    liveWebsiteHref: "https://uf-new-crypto.netlify.app",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/p1.png",
      "/images/projects/p2.png",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/umarprogrammer19/portfolio-v2",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Todo Application",
    favicon: "/images/projects/logos/to-do-list.jpeg",
    imageUrl: [
      "/images/projects/t1.png",
      "/images/projects/t2.png",
      "/images/projects/t3.png",
    ],
    description:
      "A to-do app with built-in authentication, allowing users to securely create and manage personalized task lists. With a clean design and easy login, it offers a secure and organized way to handle daily tasks.",
    sourceCodeHref: "https://github.com/umarprogrammer19/React-Firebase-Todo",
    liveWebsiteHref: "https://uf-react-firebase-todo.vercel.app/",
  },
  {
    name: "Banking User Interface",
    favicon: "/images/projects/logos/crypto.png",
    imageUrl: [
      "/images/projects/bs1.png",
      "/images/projects/bs2.png",
      "/images/projects/bs3.png",
      "/images/projects/bs4.png",
    ],
    description:
      "I crafted a modern UI for a banking site, emphasizing clarity and ease of navigation. The design allows users to smoothly interact with account information, transaction history, and other banking features, providing a streamlined and visually appealing experience",
    sourceCodeHref: "https://github.com/umarprogrammer19/React-Bank-Site",
    liveWebsiteHref: "https://uf-bank-site.vercel.app/",
  },
];
