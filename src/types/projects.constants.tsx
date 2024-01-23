import { IProjectImage } from ".";
import {
  ProjectCreativeFashion,
  ProjectPortfolioCreative,
  ProjectDlcaTechnology,
  ProjectEcommerce,
  ProjectRdnews,
  ProjectTechi,
  ProjectTodolist,
  ProjectWeather,
  ProjectPortfolio,
  ProjectPortfolioGlass,
  ProjectCitasync
} from "../assets";

const projectImages: IProjectImage[] = [
  {
    title: "Creative Fashion",
    github: "https://github.com/Orliluq/Creative-Fashion",
    demo: "https://creative-fashion.vercel.app",
    content: `eShop ropa creativa Frontend: JS, React, Redux. `,
    image: ProjectCreativeFashion
  },
  {
    title: "Portfolio Creative",
    github: "https://github.com/Orliluq/Portfolio-creative",
    demo: "https://portfolio-creative-six.vercel.app/",
    content: `Portfolio Creativo implementando Vue, Html, CSS, JS`,
    image: ProjectPortfolioCreative
  },
  {
    title: "Dlca Technology",
    github: "https://github.com/Orliluq/PF-DLCA-technology",
    demo: "https://pf-dlca-technology.vercel.app",
    content: `E-commerce de computación y accesorios Frontend: JS, React, Redux. Backend: JS, Sequelize, ExpressJs, PostgreSQL`,
    image: ProjectDlcaTechnology
  },
  {
    title: "Ecommerce eXpress",
    github: "https://github.com/Orliluq/Ecommerce-Express",
    demo: "https://ecommerce-express-mu.vercel.app/",
    content: `E-commerce venta de productos de computación HTML, CSS y JS, React`,
    image: ProjectEcommerce
  },
  {
    title: "Rdnews",
    github: "https://github.com/Orliluq/RdNews",
    demo: "https://rd-news-dddalc17v-orliluq.vercel.app",
    content: `Plataforma de noticias con API de New York Times HTML, CSS y JS`,
    image: ProjectRdnews
  },
  {
    title: "Ecommerce Techi",
    github: "https://github.com/Orliluq/Ecommerce-Techi",
    demo: "https://ecommerce-techi.vercel.app/",
    content: `Plataforma de ventas HTML, CSS y JS, React.`,
    image: ProjectTechi
  },
  {
    title: "Todolist App",
    github: "https://github.com/Orliluq/TodoList",
    demo: "https://todo-list-six-gules.vercel.app/",
    content: `App TodoList HTML, CSS y JS.`,
    image: ProjectTodolist
  },
  {
    title: "Weather App",
    github: "https://github.com/Orliluq/Weather_App",
    demo: "https://weather-app-eta-henna.vercel.app/",
    content: `App Weather HTML, CSS y JS`,
    image: ProjectWeather
  },
  {
    title: "Portfolio css",
    github: "https://github.com/Orliluq/Portfolio-responsive-new",
    demo: "https://portfolio-responsive-new-delta.vercel.app",
    content: `Portfolio con HTML, CSS y JavaScript.`,
    image: ProjectPortfolio
  },
  {
    title: "Portfolio Glass",
    github: "https://github.com/Orliluq/Project-portfolio-glass",
    demo: "https://project-portfolio-glass.vercel.app/",
    content: `Portfolio Glassmorphing con HTML, CSS y JS.`,
    image: ProjectPortfolioGlass
  },
  {
    title: "Citasync",
    github: "https://github.com/Trycatch-tv/f1it2-team-10-Frontend",
    demo: "https://github.com/Trycatch-tv/f1it2-Team-10-Backend",
    content: `CRUD Agenda de Citas Frontend: JS y React Backend: Java y Spring Boot, BD: MySQL`,
    image: ProjectCitasync
  },
]

export { projectImages };