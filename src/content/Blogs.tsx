import { Article } from "@/components";
import blog1 from "@/assets/blog01.png";
import blog2 from "@/assets/blog02.png";
import blog3 from "@/assets/blog03.png";
import blog4 from "@/assets/blog04.png";
import blog5 from "@/assets/blog05.png";

const Blogs = () => (
  <div className="my-10 text-white -m-2" id="blog">
    <div className="mb-20">
      <h1 className="gradient-text text-5xl font-bold leading-normal">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="flex justify-between">
      <div className="max-w-md blog__group1">
        <Article img={blog1} date="Sep 26, 2021" content="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="grid grid-cols-2 max-w-2xl">
        <Article img={blog2} date="Sep 26, 2021" content="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article img={blog3} date="Sep 26, 2021" content="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article img={blog4} date="Sep 26, 2021" content="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article img={blog5} date="Sep 26, 2021" content="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blogs;
