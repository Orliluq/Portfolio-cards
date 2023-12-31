import ScreenWrapper from "../../../components/ScreenWrapper";
import ImageSwiper from "../../../components/ImageSwiper";
import { personalImages } from "../../../types/images.constants";
import './style.scss';

const AboutSection = () => {

  return (
    <ScreenWrapper>
      <div className="about-section">
        <div className="about-section-info">
          <div className="about-section-child about-section-text">
            <h1>SOBRE <span className="text-purple">MI</span></h1>
            <br/>
            <br/>
            <p>
              Hola! Mi nombre es <span className="text-yellow">Orli Dun</span>
              <br/>
              Y soy  <span className="text-yellow">Full Stack Developer</span> y Licenciada en <span className="text-yellow">Administración</span>.
              <br/>
              <br/>
              Estoy familiarizada con un stack de tecnologías en el <span className="text-yellow">Backend</span> pero, soy <span className="text-yellow">Fullstack</span> {" "}
              por ende, también me divierto y trabajo del lado <span  className="text-yellow">Frontend</span> del desarrollo web.
              <br/>
              <br/>
              Ya tengo tiempo de graduada desarrollando <span className="text-yellow"> aplicaciones Web</span>, e incursionando en el mundo de las<span className="text-yellow"> aplicaciones Móviles</span>, para seguir creciendo profesionalmente y presentar a mis clientes aplicaciones de calidad y que cumplan con sus requerimientos!
            </p>
            <br/>
            <p className="quote">
              <span className="text-purple">"Igual, sigo aprendiendo y formándome en el código"</span> - <span className="text-yellow">porque me encanta programar 👨🏻‍💻</span>
            </p>
          </div>
          <div className="about-section-child about-section-asset">
            <ImageSwiper images={personalImages}/>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  )
}

export default AboutSection;
