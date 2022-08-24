import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import getColor from "../lib/colors";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import Navbar from "../components/Navbar";
import getQuote from "../lib/quotes";
import ErrorBox from "../components/ErrorBox";

export default function Home() {
  const { data, isError, mutate } = useFetch(
    "https://animechan.vercel.app/api/random"
  );
  const {
    data: imageData,
    isError: imageError,
    mutate: imageMutate,
  } = useFetch("https://api.waifu.pics/sfw/waifu");

  const [bgColor, setBgColor] = useState(null);
  const [tempData, setTempData] = useState({});
  useEffect(() => {
    setBgColor(getColor());
    setTempData(getQuote());
  }, [data]);

  if (isError || imageError) {
    return <ErrorBox bgColor={bgColor} />;
  }
  return (
    <div
      className='wrapper h-screen w-screen bg-cover bg-blend-lighten bg-center grid grid-cols-1 place-items-center transition-all ease-in-out dark:bg-blend-darken select-none'
      style={{
        backgroundImage: `url(${imageData ? imageData.url : "./nino.png"})`,
        backgroundColor: `${bgColor}`,
      }}
    >
      <Navbar bgColor={bgColor}></Navbar>
      {data && (
        <div
          className='quoteBox bg-gray-100 w-4/5 lg:w-2/5 h-2/5 p-4 text-center grid grid-cols-1 place-items-center overflow-auto rounded-lg dark:bg-gray-700'
          style={{ color: `${bgColor}` }}
        >
          <p className='font-mono text-lg lg:text-2xl font-semibold'>
            {data.quote.length < 200 ? data.anime : tempData.anime}
          </p>

          <div className='quote'>
            <p className='font-mono text-lg lg:text-xl pb-4'>
              {data.quote.length < 200 ? data.quote : tempData.quote}
            </p>
            <p className='font-mono text-sm lg:text-lg'>
              - {data.quote.length < 200 ? data.character : tempData.character}
            </p>
          </div>
          <button
            onClick={() => {
              mutate();
              imageMutate();
            }}
          >
            <ArrowCircleRightIcon className='h-6 w-6 lg:h-8 lg:w-8 inline-block hover:scale-110 opacity-90 hover:opacity-100'></ArrowCircleRightIcon>
          </button>
        </div>
      )}
    </div>
  );
}
