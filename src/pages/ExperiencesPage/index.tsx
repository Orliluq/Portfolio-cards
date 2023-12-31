import BasePage from "../BasePage";
import TechStacksSection from "./TechStacksSection";
import WorkExperienceSection from "./WorkExperienceSection";
import ProjectSection from "./ProjectSection";


const ExperiencesPage = () => {
  return (
    <BasePage>
      <WorkExperienceSection />
      <ProjectSection />
      <TechStacksSection />
    </BasePage>
  )
}

export default ExperiencesPage;