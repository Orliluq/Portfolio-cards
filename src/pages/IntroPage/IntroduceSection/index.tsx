import ScreenWrapper from "../../../components/ScreenWrapper";
import { FaTwitter, FaInstagram, FaGoogle, FaLinkedinIn } from "react-icons/fa6";
import './style.scss';

const IntroduceSection = () => {

  const openSocialMedia = (url: string) => {
    window.open(url);
  }

  return (
    <ScreenWrapper>
      <div className="introduce-section">
        <div className="introduce-section-info">
          <div className="introduce-section-text">
            <h1>ACERCA DE <span className="text-purple">MI HISTORIA</span></h1>
            <br/>
            <br/>
            <p>
              Luego de ser Licenciada en Administración, con experiencia en el campo desde el <span className="text-purple">(2006)</span> con un título universitario en {" "}
              <span className="text-purple">Finanzas</span> es importante para mí seguir creciendo en lo profesional, lo que me ha ayudado a tener una visión más pragmática del negocio.
              <br/>
              <br/>
              Pero con toda esta experiencia aún me faltaba algo, y lo conseguí en la programación, una nueva experiencia que me reta cada día, nuevos desafíos y
              me emociona que mediante el código, puedo dar soluciones a los problemas cotidianos. Desde finales del 2022 incursioné en el campo tech, y justo ahora estoy graduada de <span className="text-purple">Full Stack Web Developer</span> 🖥️ y esa es mi nueva carrera.
              <br/>
              <br/>
              Desde entonces, he pasado por momentos increíbles, por desafiós complicados, pero sigo acumulando muchas experiencias durante el camino y teniendo la oportunidad de conocer más personas increíbles
              en la industria. ¡Soy positiva sobre el futuro y espero tener más oportunidades de crecer y conocer a más personas!
            </p>
          </div>
        </div>
        <div className="introduce-section-contact">
          <h1>¡Conectémonos! Me encantaría conocerte</h1>
          <br/>
          <div className="introduce-section-contact-box">
            <ul>
              <li className="twitter" onClick={() => openSocialMedia("https://www.twitter.com/orlidun")}><FaTwitter color="black"/></li>
              <li className="instagram" onClick={() => openSocialMedia("https://www.instagram.com/orlidevs/")}><FaInstagram color="black"/></li>
              <li className="google" onClick={() => openSocialMedia("https://mailto:orlibet@gmail.com")}><FaGoogle color="black"/></li>
              <li className="linkedin" onClick={() => openSocialMedia("https://www.linkedin.com/in/orlibetdungonzalez/")}><FaLinkedinIn color="black"/></li>
            </ul>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  )
}

export default IntroduceSection;