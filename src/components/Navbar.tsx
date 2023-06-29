import Image from "next/image";
import logo from "@/assets/logo.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="text-white flex justify-between items-center py-5 font-medium md:text-sm sm:text-xs">
      <ul className="inline-flex items-center justify-start">
        <li className="xl:mr-12 md:mr-5 duration-300 hover:opacity-80 sm:mr-2">
          <Image className="cursor-pointer w-auto sm:h-3 md:h-4" src={logo} alt="logo" />
        </li>
        <li className="xl:p-3 md:p-2 sm:p-1 hover:text-sky-500 duration-300">
          <a href="">Home</a>
        </li>
        <li className="xl:p-3 md:p-2 sm:p-1 hover:text-sky-500 duration-300">
          <a href="">What is GPT ?</a>
        </li>
        <li className="xl:p-3 md:p-2 sm:p-1 hover:text-sky-500 duration-300">
          <a href="">Open AI</a>
        </li>
        <li className="xl:p-3 md:p-2 sm:p-1 hover:text-sky-500 duration-300">
          <a href="">Case Studies</a>
        </li>
        <li className="xl:p-3 md:p-2 sm:p-1 hover:text-sky-500 duration-300">
          <a href="">Library</a>
        </li>
      </ul>
      <div>
        <span className="p-2 cursor-pointer hover:text-sky-500 duration-300">Sign in</span>
        <span className="p-2 cursor-pointer bg-orange-600 rounded-md duration-200 hover:bg-orange-700 z-10">
          Sign up
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
