import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../media/image1.jpg";
import Image2 from "../media/pexels-matt-hatchett-2599270.jpg";
import Image3 from "../media/pexels-rachel-claire-4992651.jpg";

function Carrousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={10000}>
          <img className="d-block " src="https://cdn.shopify.com/s/files/1/0105/0622/files/slider_1c950da0-a54e-4dc5-9274-ac9db25cfb7a_1400x.jpg?v=1594308496" alt="First slide" />
        </Carousel.Item>
    
      </Carousel>
    </div>
  );
}

export default Carrousel;
