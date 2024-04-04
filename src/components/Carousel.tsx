import { useState } from "react";
// import './Carousel.css';

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const items = ["Elemento1", "Elemento2", "Elemento3"]; // Reemplaza con tus elementos

  const next = () => {
    setCurrent(current === items.length - 1 ? 0 : current + 1);
  };

  const prev = () => {
    setCurrent(current === 0 ? items.length - 1 : current - 1);
  };

  return (
    <div className="carousel-container">
      <div className="button-container">{current > 0 && <button onClick={prev}>Anterior</button>}</div>
      <div className="carousel-item">{items[current]}</div>
      <div className="button-container">
        {current < items.length - 1 && (
          <button onClick={next}>Siguiente</button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
