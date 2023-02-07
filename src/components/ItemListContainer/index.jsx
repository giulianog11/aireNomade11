import React from "react";
import { Carousel, Image} from "react-bootstrap";
import car1 from '../../assets/images/Car1.png';
import car2 from '../../assets/images/Car2.png';
import car3 from '../../assets/images/Car3.png';


const ItemListContainer = () => {
  return (
    // <div className="saludo" style={{textAlign: "center", fontSize: "2rem"}}>
    //     {saludo}
    //     </div>
    <Carousel fade>
      <Carousel.Item className="carousel-img">
        <img
          className="d-block w-100 car-img"
          src={car1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-img">
        <img
          className="d-block w-100 car-img"
          src={car2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-img">
        <img
          className="d-block w-100 car-img"
          src={car3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export { ItemListContainer };
