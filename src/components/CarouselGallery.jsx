import Carousel from 'react-bootstrap/Carousel';
import picturesJSON from "../data/pictures.json"

function CarouselGallery() {
  return (
    <Carousel data-bs-theme="dark">
      {picturesJSON.map(picture=>(
        <Carousel.Item key={picture.src}>
          <img
          src= {picture.src}
          alt= {picture.alt}
          />
        <Carousel.Caption>
          <h5>{picture.header}</h5>
          <p>{picture.text}</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
     
    </Carousel>
  );
}

export default CarouselGallery;