import ScreenWrapper from "../../../components/ScreenWrapper";
import { TypeAnimation } from 'react-type-animation';
import { CoderGif } from "../../../assets";
import './style.scss';

const WelcomTextSection = () => {

  return (
    <ScreenWrapper>
      <div className="welcome-section">
        <div className="welcome-section-child welcome-section-text">
          <p color="white">
            <i>Hola !!!</i>
          </p>
          <p>
            Mi nombre es <span className="text-purple">Orli Dun</span>
          </p>
          <br/>
          <br/>
          <p>Y soy {" "}
            <span>
              <TypeAnimation
                className="welcome-section-p text-purple"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Full Stack Developer',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Backend Developer',
                  1000,
                  'Frontend Developer',
                  1000,
                  'Desarrolladora Web',
                  1000,
                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
              />
            </span>
          </p>
        </div>
        <div className="welcome-section-child welcome-section-asset">
          <img src={CoderGif} className="welcome-section-asset-img" alt="coder-gif"/>
        </div>
      </div>
    </ScreenWrapper>
  )
}

export default WelcomTextSection
