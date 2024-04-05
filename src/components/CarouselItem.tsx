import React from "react";
import usePosterUrl from "../customHooks/usePosterUrl";
import svgTrailer from ".././asset/trailer.svg";
import svgRes from ".././asset/MovieTicket.svg";
import svgStar from '.././asset/Star.svg'

interface CarouselItemProps {
  item: {
    id: number;
    poster_path: string | null;
    title: string;
    overview: string;
    vote_average: number;
  };
  index: number;
  current: number;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  item,
  index,
  current,
}) => {
  const posterUrl = usePosterUrl(item.poster_path);
  const isActive = index === current ? "active" : "";

  return (
    <div className={`carousel-item ${isActive}`}>
      <div className="itemPoster">
        <div className="scoreMovie">
            <img src={svgStar} alt="star" />
            <p> <span>{Math.round(item.vote_average)}</span>/10</p>
            <p>IMDB</p>
        </div>
        <img src={posterUrl} alt="Poster" />
      </div>
      <div className="itemInfo">
        <div className="itemText">
          <h1>{item.title}</h1>
          <p>{item.overview}</p>
        </div>
        <div className="itemBtns">
          <figure className="TrailerImg">
            <div>
              <img src={svgTrailer} alt="Trailer" />
            </div>
            <figcaption>Ver trailer</figcaption>
          </figure>
          <figure className="TrailerImg">
            <div>
              <img src={svgRes} alt="Trailer" />
            </div>
            <figcaption>Dejar reseña</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
