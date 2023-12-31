import GlowingBox from "../../../components/GlowingBox";
import GridBox from "../../../components/GridBox";
import ScreenWrapper from "../../../components/ScreenWrapper";
import "./style.scss";
import Button from "../../../components/Button";
import { FaGithub } from "react-icons/fa6"
import { MdLiveTv } from "react-icons/md";
import { projectImages } from "../../../types/projects.constants";

const ProjectSection = () => {

  const openGithubLink = (github: string | null) => {
    if (github) {
      window.open(github);
    }
  }

  return (
    <ScreenWrapper className="project-section-screen-wrapper">
      <div className="project-section">
        <div className="project-section-title-box">
          <h1> <span className="text-yellow">Mis Proyectos</span></h1>
        </div>
        <div className="project-section-content">
          <GridBox>
            {projectImages.map(value => {
              return (
                <GlowingBox className="project-section-card">
                  <img alt={value.title} className="project-section-card-img" src={value.image}/>
                  <div className="project-section-card-details">
                    <h1><span className="text-purple">{value.title}</span></h1>
                    <p>{value.content}</p>
                  </div>
                  <div className="project-section-card-button-group">
                    <Button icon={<FaGithub className="project-section-card-button-icon"/>} onClick={() => openGithubLink(value.github)} title="Github"/>
                    <Button icon={<MdLiveTv className="project-section-card-button-icon"/>} onClick={() => openGithubLink(value.demo)} title="Demo"/>
                  </div>
                </GlowingBox>
              )
            })}
          </GridBox>
        </div>
      </div>
    </ScreenWrapper>
  )
}

export default ProjectSection;