import { ArrowCircleRightIcon, UserCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";
import DarkModeBtn from "./DarkModeBtn";

const Navbar = ({ bgColor }) => {
  return (
    <div className='flex justify-between fixed top-0 right-0 bg-white rounded-md transition-all ease-in-out  p-1 m-1 dark:bg-gray-700 space-x-1'>
      <DarkModeBtn bgColor={bgColor} />
      <div
        style={{ color: `${bgColor}` }}
        className='hover:scale-110 opacity-90 hover:opacity-100'
      >
        <Link href='https://www.linkedin.com/in/abhishek-meena-886998157'>
          <a target='_blank'>
            {" "}
            <UserCircleIcon className='h-6 w-6'></UserCircleIcon>
          </a>
        </Link>
      </div>
      <div
        style={{ color: `${bgColor}` }}
        className='hover:scale-110 opacity-90 hover:opacity-100'
      >
        <Link href='/tilegame'>
          <ArrowCircleRightIcon className='h-6 w-6'></ArrowCircleRightIcon>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
