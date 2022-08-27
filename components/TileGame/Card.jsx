import React, { useContext } from "react";
import { themeContext } from "../context/themeContext";
import Image from "next/image";

const Card = ({ disable, card, handleChoice, flipped }) => {
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
      <Image
        src={card.src}
        alt='card-front'
        layout='fill'
        className='front absolute w-full rounded-md shadow-md'
        width={720}
        height={720}
      />
      <Image
        src={theme !== "dark" ? "/images/logo.jpg" : "/images/darklogo.jpg"}
        alt='card-back'
        onClick={handleClick}
        className='back w-full rounded-md shadow-md'
        width={720}
        height={720}
        priority
      />
    </div>
  );
};

export default Card;
