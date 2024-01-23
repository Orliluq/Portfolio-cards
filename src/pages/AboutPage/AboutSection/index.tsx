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
              Me encanta trabajar con tecnología<span className="text-yellow"> tanto en el Backend como del lado del Frontend </span> así que, soy <span className="text-yellow">Fullstack</span> {" "}
               y mi especialidad es el desarrollo web  <span  className="text-yellow">Interfaz de usuario</span> trabajar con API REST y hasta un poco de UI UX.
              <br/>
              <br/>
              <br/>
              Ya tengo tiempo de graduada desarrollando <span className="text-yellow"> aplicaciones Web </span> y estoy siempre buscando nuevas formas de aprender y seguir creciendo profesionalmente <span className="text-yellow"> dándole al cliente, una experiencia única</span>, con aplicaciones de calidad y que cumplan con sus requerimientos!
            </p>
            <br/>
            <p className="quote">
            <span className="text-purple">"Sigo formándome en el código"</span> - <span className="text-yellow">porque me encanta programar 👨🏻‍💻</span>
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
