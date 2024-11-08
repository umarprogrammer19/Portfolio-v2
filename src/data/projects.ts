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
    name: "Many Games",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/manyGamesDark.webp",
      "/images/projects/manyGamesLight.webp",
      "/images/projects/manyGames2048.webp",
      "/images/projects/manyGamesPuzzle.webp",
      "/images/projects/manyGamesWordle.webp",
    ],
    description:
      "Many short and fun games using Reactjs, Typescript and Tailwindcss with collaboration with other developers",
    sourceCodeHref: "https://github.com/BUMBAIYA/ManyGames",
    liveWebsiteHref: "https://manygames.vercel.app",
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
    name: "Covid Tracker",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/covidTracker.webp",
      "/images/projects/covidTrackerMap.webp",
      "/images/projects/covidTrackerTable.webp",
    ],
    description:
      "Get latest covid related stats in a table where user can filter using country and cases. It also has a map which show every countries data for quick view. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
    sourceCodeHref: "https://github.com/BUMBAIYA/CovidTracker",
    liveWebsiteHref: "https://bumbaiya.github.io/CovidTracker",
  },
  {
    name: "Stock predictor",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/stockPredictor.webp",
      "/images/projects/stockPredictorCandleChart.webp",
      "/images/projects/stockPredictorCompareChart.webp",
      "/images/projects/stockPredictorLineChart.webp",
    ],
    description:
      "Get prediction of opening and closing price of stocks price. Frontend is made using Reactjs and backend is made using Flask and Machine learning model are trained using Tensorflow",
    sourceCodeHref: "https://github.com/Rohrschachh/Stock-Market-Predictor",
  },
];
