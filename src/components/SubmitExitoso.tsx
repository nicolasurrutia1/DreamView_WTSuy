import React from "react";
import emoji from '../asset/emoji.svg'

interface SuccessComponentProps {
  fullName: string;
  movieName: string;
}

const SubmitExitoso: React.FC<SuccessComponentProps> = ({
  fullName,
  movieName,
}) => {
  return (
    <div className="success-message">
      <h3>¡Muchas gracias {fullName}!</h3>
      <img src={emoji} alt="" />
      <p>Tu reseña sobre la pelicula "{movieName}" ha sido enviada.</p>
    </div>
  );
};

export default SubmitExitoso;
