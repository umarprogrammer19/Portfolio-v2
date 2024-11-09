import Head from "next/head";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Umar Farooq | Fullstack Developer</title>
        <meta
          name="description"
          content="Explore the professional portfolio of Umar Farooq, a skilled Fullstack Developer with 1 year of hands-on experience. Discover innovative projects, expertise in modern web technologies, and a passion for creating seamless user experiences."
        />
        <link rel="canonical" href="https://uf-portfolio-v2.vercel.app" />
        <meta
          name="google-site-verification"
          content="_YJlO90eSoye2AQOhbkRAzNbejzCGiTgAD4RNR3NtHc"
        />
        <meta
          name="keywords"
          content="React Developer, Fullstack Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Portfolio, UI/UX, React.js, Frontend Development, Web Development, JavaScript Developer, Responsive Design"
        />
      </Head>
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
