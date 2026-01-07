import { ArrowCircleRightIcon, UserCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";
import DarkModeBtn from "./DarkModeBtn";

const Navbar = ({ bgColor }) => {
  return (
    <div className='flex justify-between fixed top-0 right-0 bg-white rounded-md transition-all ease-in-out  p-1 m-1 dark:bg-gray-700 space-x-1'>
      <DarkModeBtn bgColor={bgColor} />

      <Link legacyBehavior href='https://www.linkedin.com/in/abhishek-meena-886998157'>
        <a
          target='_blank'
          aria-label='linkedin profile'
          style={{ color: `${bgColor}` }}
          className='hover:scale-110 opacity-90 hover:opacity-100'
        >
          {" "}
          <UserCircleIcon className='h-6 w-6'></UserCircleIcon>
        </a>
      </Link>

      <Link href='/tilegame'>
        <button
          aria-label='play waifu memory game'
          style={{ color: `${bgColor}` }}
          className='hover:scale-110 opacity-90 hover:opacity-100'
        >
          <ArrowCircleRightIcon className='h-6 w-6'></ArrowCircleRightIcon>
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
