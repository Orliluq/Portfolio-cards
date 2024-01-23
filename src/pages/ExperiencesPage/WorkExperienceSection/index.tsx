import Carousel from "../../../components/Carousel";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { experienceImages } from "../../../types/companies.constants";
import "./style.scss";

const WorkExperienceSection = () => {

  return (
    <ScreenWrapper>
      <div className="workexperience-section">
        <div className="workexperience-section-title-box">
          <h1>
            <span className="text-yellow">Experiencia</span>
          </h1>
        </div>
        <br/>
        <div className="workexperience-section-main">
          <Carousel images={experienceImages}/>
        </div>
      </div>
    </ScreenWrapper>
  )
}

export default WorkExperienceSection;