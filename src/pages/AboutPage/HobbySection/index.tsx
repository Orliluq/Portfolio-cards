import ScreenWrapper from "../../../components/ScreenWrapper";
import ImageSwiper from "../../../components/ImageSwiper";
import { hobbyImages } from "../../../types/images.constants";
import './style.scss';

const HobbySection = () => {

  return (
    <ScreenWrapper>
      <div className="hobby-section">
        <div className="hobby-section-info">
          <div className="hobby-section-child hobby-section-text">
            <h1>MIS <span className="text-purple">HOBBIES</span> ?</h1>
            <br/>
            <br/>
            <p>
              Además de codear, me apasiona el <span className="text-yellow">Marketing</span> y he realizado varios cursos y diplomados en la temática Digital.
              Creo que éste lado, contribuye a cumplir con estándares de calidad en mis aplicaciones.
              <br/>
              <br/>
              Amo a mis mascotas <span className="text-purple">(gatos, perros...)</span>. Tengo 4 gatos,  <span className="text-yellow">2 niños y 2 niñas</span>. además de 3 lindos perros.
              <br/>
              <br/>
              Me encanta todo lo que me force a implementar <span className="text-yellow">la lógica</span>. Soy muy <span className="text-purple">creativa</span> y me gusta trabajar el código limpio
              y con buenas prácticas <span className="text-yellow">y me encantaría hacer una Maestría en Ingeniería de Software</span>, y 
              espero que estos conocimientos puedan aplicarse para generar soluciones a los <span className="text-yellow">problemas</span> y <span className="text-yellow">crear aplicaciones coherentes con todas las tecnologías</span>.
            </p>
          </div>
          <div className="hobby-section-child hobby-section-asset">
            <ImageSwiper images={hobbyImages}/>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  )
}

export default HobbySection;
