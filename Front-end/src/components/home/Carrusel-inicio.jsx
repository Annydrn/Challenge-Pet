import Carousel from 'react-bootstrap/Carousel';


function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="src/assets/img/walkdog.jpg"
          alt="First slide"
        />
        <Carousel.Caption >
          <h2>Paseo de Mascotas</h2>
          <h5>Las acompañaeremos y cuidaremos el tiempo que necesites</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="src/assets/img/kittys.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h2>Peluqueria</h2>
          <h5>Contamos con personal capacitado para otorgarles la mejor experiencia</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="src/assets/img/dogplay.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h2>Acompañamiento a domicilio</h2>
          <h5>Podemos ir a tu domicilio a cuidarlos si lo deseas ¡Dejalo en nuestras patas!</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;