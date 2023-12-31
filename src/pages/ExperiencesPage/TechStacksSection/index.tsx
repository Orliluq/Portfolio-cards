import ScreenWrapper from "../../../components/ScreenWrapper";
import "./style.scss";
import programmingLanguages from "../../../types/languages.constants";
import GridBox from "../../../components/GridBox";
import GlowingBox from "../../../components/GlowingBox";

const TechStacksSection = () => {

  return (
    <ScreenWrapper>
      <div className="techstacks-section">
        <div className="techstacks-section-title-box">
          <h1>
            <span className="text-yellow">Mis Tecnologías</span>
          </h1>
        </div>
        <br/>
        <GridBox className="techstacks-section-grid-container">
          {programmingLanguages.map(value => {
            return (
              <GlowingBox className="techstacks-section-grid-item">
                <value.icon className="techstacks-section-grid-img" color="white" />
              </GlowingBox>
            );
          })}
        </GridBox>
      </div>
    </ScreenWrapper>
  )
}

export default TechStacksSection;