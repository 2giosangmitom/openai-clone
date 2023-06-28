import { title } from "@/types";

const Title: React.FC<title> = ({ title }) => (
  <div className='flex flex-col'>
    <span className='bg-gradient-to-r from-violet-500 to-fuchsia-500 h-1 w-16 rounded-sm'></span>
    <h1 className='text-2xl mt-3 font-semibold'>{title}</h1>
  </div>
);

export default Title;
