import { useState } from "react";
import { IExperienceImage } from "../../types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./style.scss";

interface ICarouselProps {
  images: IExperienceImage[];
}

const Carousel = ({images}: ICarouselProps) => {

  const [display, setDisplay] = useState<number>(0);

  const onMoveImage = (index: number): void => {
    if (index === images.length) {
      setDisplay(0);
    } else if (index === -1) {
      setDisplay(images.length - 1);
    } else {
      setDisplay(index);
    }
  }

  return (
    <div className="carousel-container">
        <div className="carousel-arrow carousel-arrow-right">
            <IoIosArrowBack className="carousel-arrow-icon" onClick={() => onMoveImage(display-1)}/>
        </div>
        <div className="carousel-arrow carousel-arrow-left">
            <IoIosArrowForward className="carousel-arrow-icon" onClick={() => onMoveImage(display+1)}/>
        </div>

      {images.map((value, index) => {
        return (
          <div 
            key={index}
            className={`carousel-slide carousel-fade ${index===display ? "carousel-slide-active" : ""}`}
            style={{
            backgroundImage: `url(${value.imageUrl})`
          }}>
            <div className="carousel-text">
              <div className="carousel-text-placeholder">
                <h4>
                  Ver más
                </h4>
              </div>
              <div className="carousel-text-content">
                <h1>
                  {value.companyName}
                </h1>
                <p className="carousel-text-header">
                  {value.position}
                  <br/>
                  {value.timeLine}  
                </p>
                <p>
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Carousel;