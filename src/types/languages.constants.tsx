import { IconType } from "react-icons";
import { FaGithub, FaJava, FaVuejs, FaAngular, FaPython, FaReact, FaNpm, FaBootstrap, FaMarkdown, FaHtml5, FaCss3, FaGitAlt, FaPhp } from "react-icons/fa6";
import { SiJavascript, SiMysql, SiSwagger, SiRedux, SiPostgresql, SiSequelize, SiTailwindcss, SiPostman, SiTypescript } from "react-icons/si";
import { BiLogoSpringBoot, BiLogoNodejs } from "react-icons/bi";
import { TbBrandNextjs, TbBrandVite, TbBrandReactNative } from "react-icons/tb";

interface IProgrammingLanguage {
    name: string;
    icon: IconType;
}

const programmingLanguages: IProgrammingLanguage[] = [
  {
    name: "HTML",
    icon: FaHtml5
  },
  {
    name: "CSS",
    icon: FaCss3
  },
  {
    name: "Javascript",
    icon: SiJavascript
  },
  {
    name: "Java",
    icon: FaJava
  },
  {
    name: "Python",
    icon: FaPython
  },
  {
    name: "Typescript",
    icon: SiTypescript
  },
  {
    name: "PHP",
    icon: FaPhp
  },
  {
    name: "Github",
    icon: FaGithub
  },
  {
    name: "ReactJS",
    icon: FaReact
  },
  {
    name: "NPM",
    icon: FaNpm
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap
  },
  {
    name: "Markdown",
    icon: FaMarkdown
  },
  
  {
    name: "Sequelize",
    icon: SiSequelize
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss
  },
  {
    name: "Vue",
    icon: FaVuejs
  },
  {
    name: "Vite",
    icon: TbBrandVite
  },
  {
    name: "Swagger",
    icon: SiSwagger
  },
  {
    name: "Angular",
    icon: FaAngular
  },
  {
    name: "React Native",
    icon: TbBrandReactNative
  },
  {
    name: "MySQL",
    icon: SiMysql
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql
  },
  {
    name: "Redux",
    icon: SiRedux
  },
  {
    name: "SpringBoot",
    icon: BiLogoSpringBoot
  },
  {
    name: "NextJS",
    icon: TbBrandNextjs
  },
  {
    name: "Git",
    icon: FaGitAlt
  },
  {
    name: "NodeJS",
    icon: BiLogoNodejs
  },
  {
    name: "Postman",
    icon: SiPostman
  }
]

export default programmingLanguages;