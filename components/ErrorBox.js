import React from "react";
import { HeartIcon } from "@heroicons/react/solid";
import Navbar from "../components/Navbar";

const ErrorBox = ({ bgColor }) => {
  return (
    <div
      className='errorWrapper h-screen w-screen bg-cover bg-blend-lighten bg-center grid grid-cols-1 place-items-center transition-all ease-in-out dark:bg-blend-darken'
      style={{
        backgroundImage: `url("./nino.png")`,
        backgroundColor: `${bgColor}`,
        color: `${bgColor}`,
      }}
    >
      <Navbar bgColor={bgColor} />
      <div className='errorBox bg-gray-100 w-4/5 h-1/5 p-4 lg:w-2/5 text-center grid grid-cols-1 place-items-center overflow-auto rounded-lg dark:bg-gray-700'>
        <p className='font-mono text-lg lg:text-xl'>
          Sorry, plz try again later!
        </p>
        <p className='font-mono text-lg flex items-center'>
          - Chika{" "}
          <HeartIcon className='h-4 w-4 inline-block lg:h-5 lg:w-5 m-1'></HeartIcon>
        </p>
      </div>
    </div>
  );
};

export default ErrorBox;
