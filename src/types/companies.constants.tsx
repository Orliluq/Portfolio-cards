import { IExperienceImage } from ".";
import { 
  DiumGif,
  DevsLatamGif,
  TryCatchtvGif,
  DlcaGif,
  FreelanceGif
} from "../assets";

const experienceImages: IExperienceImage[] = [
  {
    imageUrl: DiumGif,
    companyName: "DIUM",
    position: "Associated Web Developer",
    timeLine: "Octubre 2023 - ",
    description: `Prácticas Profesionales. Desarrollo de aplicaciones Web. Desarrollo Full Stack Developer.


      `
  },
  {
    imageUrl: DevsLatamGif,
    companyName: "Devs Latam",
    position: "Full Stack Developer Voluntaria",
    timeLine: "June 2023 - ",
    description: `Desarrollo de aplicaciones Web. Desarrollo Full Stack Developer en proyectos Open Source.


    `
  },
  {
    imageUrl: TryCatchtvGif,
    companyName: "Try Catch.tv",
    position: "Full Stack Developer Voluntaria",
    timeLine: "June 2023 - ",
    description: `Desarrollo de aplicaciones Web. Desarrollo Full Stack Developer en proyectos Open Source.


    `
  },
  {
    imageUrl: DlcaGif,
    companyName: "DLCA Technology",
    position: "Marketing Digital",
    timeLine: "Febrero 2014 - ",
    description: `Manejo de redes sociales. Desarrollo Web en proceso.


    `
  },
  {
    imageUrl: FreelanceGif,
    companyName: "Freelance",
    position: "Full Stack Web Developer",
    timeLine: "Noviembre 2023 - ",
    description: `Desarrollo de aplicaciones Web SPA, E-commerce de forma freelance.

    
    `
  }
]

export {
  experienceImages
}