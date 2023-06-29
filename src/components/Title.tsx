import { title } from "@/types";

const Title: React.FC<title> = ({ title }) => (
  <div className="flex flex-col">
    <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-1 w-16 rounded-sm"></span>
    <h1 className="xl:text-2xl xl:w-64 lg:text-xl mt-3 font-semibold md:text-base md:w-36 sm:w-32">{title}</h1>
  </div>
);

export default Title;
