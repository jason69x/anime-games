import React, { useContext } from "react";
import { themeContext } from "../context/themeContext";

const Card = ({ disable, card, handleChoice, flipped, darkMode }) => {
  const { theme } = useContext(themeContext);
  const handleClick = () => {
    if (!disable) {
      handleChoice(card);
    }
  };
  return (
    <div
      className={`${
        flipped ? "flipped" : ""
      } relative flex items-center content-center rounded-md shadow-lg select-none`}
    >
      <img
        src={card.src}
        alt='card-front'
        className='front absolute w-full rounded-md shadow-md'
        width={720}
        height={720}
      />
      <img
        src={theme !== "dark" ? "/images/logo.webp" : "/images/darklogo.webp"}
        alt='card-back'
        onClick={handleClick}
        className='back w-full rounded-md shadow-md'
        width={720}
        height={720}
      />
    </div>
  );
};

export default Card;
