import React from "react";
import arrowLeftSVG from "../../asset/btnLeft.svg";

interface LeftButtonProps {
  onClick: () => void;
}

const LeftButton: React.FC<LeftButtonProps> = ({ onClick }) => {
  return (
    <div className="button-container leftBtn" onClick={onClick}>
      <img src={arrowLeftSVG} alt="Anterior" />
    </div>
  );
};

export default LeftButton;
