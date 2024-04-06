import { useState } from "react";
import { useDataContext } from "../context/dataContext";
import LeftButton from "./UI/LeftButton";
import RightButton from "./UI/RightButton";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const [current, setCurrent] = useState<number>(0);
  const { data } = useDataContext();

  const items =
    data && data.results && Array.isArray(data.results)
      ? data.results.slice(0, 3)
      : [];

  const next = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === items.length - 1 ? 0 : prevCurrent + 1
    );
  };

  const prev = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === 0 ? items.length - 1 : prevCurrent - 1
    );
  };

  const currentPosterUrl = items[current]?.poster_path ?? "";

  const containerStyle:React.CSSProperties = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${currentPosterUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    position: "relative",
    zIndex: 1,
  };  

  const overlayStyle: React.CSSProperties = { 
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    zIndex: -1,
  };

  return (
    <section id="destacadas" className="carousel-container" style={containerStyle}>
       <div style={overlayStyle}></div>
      <LeftButton onClick={prev} />
      <div className="carousel-wrapper">
        {items.map((item, index) => (
          <CarouselItem
            key={item.id}
            item={item}
            index={index}
            current={current}
          />
        ))}
      </div>
      <RightButton onClick={next} />
    </section>
  );
};

export default Carousel;
