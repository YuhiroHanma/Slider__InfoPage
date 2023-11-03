import React, { useState } from 'react';
import { images } from "../data_slider/sliderData";
import './slider.css'; // Importa el archivo CSS para el estilo
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"


const Slider = () => {
  const [showImage, setShowImage] = useState(0);

  const nextView = () => {
    setShowImage((showImage + 1) % images.length);
  };

  const prevView = () => {
    setShowImage((showImage - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slider-image ${index === showImage ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${image.img})`,
            }}
          ></div>
        ))}
      </div>
     <div className='buttoms'>
     <div onClick={prevView} className="prev-button">
    <ArrowBackIosIcon/>
      </div>
     
      <div onClick={nextView} className="next-button">  
      <ArrowForwardIosIcon/>
      </div>
     </div>
    </div>
  );
}

export default Slider;
