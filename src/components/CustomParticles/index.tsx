import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container, Engine } from "tsparticles-engine";
import particleOptions from "./particleConfig"
import "./style.scss";

interface ICustomParticles {
  className: string;
}

const CustomParticles = ({ className }: ICustomParticles) => {
  const particlesInit = async (engine: Engine) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets 
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready 
    // starting from v2 you can add only the features you need reducing the bundle size 
    await loadFull(engine);
  };

  const particlesLoaded = async (container?: Container | undefined): Promise<void> => {};

  return (
    <Particles
      className={className}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleOptions}
    />
  );
}
export default CustomParticles; 