import { article } from "@/types";
import Image from "next/image";

const Article: React.FC<article> = ({ img, date, content }) => (
  <div className="m-2">
    <div>
      <Image src={img} alt="blog_image" />
    </div>
    <div className="bg-sky-950 rounded-b-lg flex flex-col justify-evenly h-48 px-4 article__text">
      <p className="text-sm font-light">{date}</p>
      <h3 className="font-semibold text-lg">{content}</h3>
      <p className="font-light text-sm">Read Full Article</p>
    </div>
  </div>
);

export default Article;
