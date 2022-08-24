import { useEffect, useState } from "react";
import Card from "../components/TileGame/Card";
import shuffleCards from "../lib/tileImages";
import DarkModeBtn from "../components/DarkModeBtn";
import { ArrowCircleLeftIcon, SparklesIcon } from "@heroicons/react/solid";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

const TileGame = () => {
  const [cards, setCards] = useState(shuffleCards);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disable, setDisable] = useState(false);
  const [bestScore, setBestScore] = useState(50);

  const handleChoice = (card) => {
    if (!disable) {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }
  };

  useEffect(() => {
    let pickTimer;
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setDisable(true);

        pickTimer = setTimeout(() => resetTurn(), 500);
      }
    }
    return () => {
      clearTimeout(pickTimer);
    };
  }, [choiceOne, choiceTwo, cards]);

  useEffect(() => {
    const data = window.localStorage.getItem("tile-game-best-score");
    if (data) {
      setBestScore(JSON.parse(data));
    }
  });

  useEffect(() => {
    if (cards.length && cards.filter((card) => !card.matched).length < 1) {
      if (turns < bestScore) {
        toast(
          <p className='text-pink-400'>
            New Best Score <strong>{turns}</strong> Turns.
          </p>,
          {
            position: "bottom-center",
            className: "font-mono text-lg dark:bg-[#374151]",
            icon: <SparklesIcon className='text-yellow-400 h-6 w-6' />,
          }
        );
        setBestScore(turns);
        localStorage.setItem("tile-game-best-score", JSON.stringify(turns));
      } else {
        toast(
          <p className='text-pink-400 '>
            You Won in <strong>{turns}</strong> Turns.
          </p>,
          {
            position: "bottom-center",
            className: "font-mono text-lg dark:bg-[#374151]",
            icon: <SparklesIcon className='text-yellow-400 h-6 w-6' />,
          }
        );
      }
    }
  }, [cards]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev) => prev + 1);
    setDisable(false);
  };

  return (
    <main className='items-center flex h-screen w-screen overflow-auto p-4 justify-center leading-5 lg:items-start lg:flex-col bg-gradient-to-br from-pink-200 to-pink-400 dark:bg-[#374151] dark:from-gray-700 dark:to-gray-900 transition-all ease-in select-none'>
      <Toaster />
      <nav className='bottom-0 left-0 fixed m-auto flex items-center shadow-lg justify-evenly w-full p-2 bg-gray-50 h-16 font-mono text-pink-400 text-lg font-semibold lg:static lg:rounded-md lg:my-0 lg:max-w-3xl dark:bg-[#374151]'>
        <DarkModeBtn bgColor={null} />
        <div className='hover:scale-110 opacity-90 hover:opacity-100'>
          <Link href='/'>
            <ArrowCircleLeftIcon className='h-6 w-6'></ArrowCircleLeftIcon>
          </Link>
        </div>
        <p>Turns: {turns}</p>
        <p>Best: {bestScore}</p>
        <button
          onClick={() => {
            setCards(shuffleCards());
            setTurns(0);
            setChoiceOne(null);
            setChoiceTwo(null);
            setDisable(false);
          }}
          className='bg-pink-400 text-gray-50 rounded-md px-2 py-0 dark:text-[#374151] hover:scale-95 opacity-90 shadow-md'
        >
          New Game
        </button>
      </nav>
      <div className='grid grid-cols-4 gap-5 mx-auto lg:my-12 lg:max-w-3xl'>
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disable={disable}
            />
          );
        })}
      </div>
    </main>
  );
};

export default TileGame;
