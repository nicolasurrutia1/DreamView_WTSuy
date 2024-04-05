import React from "react";
import arrowRightSVG from "../../asset/btnRight.svg";

interface RightButtonProps {
  onClick: () => void;
}

const RightButton: React.FC<RightButtonProps> = ({ onClick }) => {
  return (
    <div className="button-container rightBtn" onClick={onClick}>
      <img src={arrowRightSVG} alt="Siguiente" />
    </div>
  );
};

export default RightButton;
