import { article } from "@/types";
import Image from "next/image";

const Article: React.FC<article> = ({ img, date, content }) => (
  <div className='m-4'>
    <div>
      <Image src={img} alt='blog_image' />
    </div>
    <div className='bg-sky-950 rounded-b-lg p-3'>
      <p className='text-sm font-light mb-3'>{date}</p>
      <h3 className='font-semibold text-lg mb-10'>{content}</h3>
      <p className='font-light text-sm read__full'>Read Full Article</p>
    </div>
  </div>
);

export default Article;
