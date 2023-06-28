import { Title } from "@/components";
import { feature } from "@/types";

const featuresData: feature[] = [
  {
    title: "Improving end distrusts instantly",
    content:
      "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    content:
      "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or am nothing",
    content:
      "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county",
    content:
      "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..",
  },
];

const Features: React.FC = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex flex-col'>
        <h1 className='gradient-text text-3xl font-bold max-w-sm'>
          The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it
          Happen.
        </h1>
        <p className='gradient-text text-md mt-5'>Request Early Access to Get Started</p>
      </div>
      <div className='text-white max-w-xl'>
        {featuresData.map((value, index) => (
          <div key={index} className='flex mb-5 items-center justify-between'>
            <Title title={value.title} />
            <p className='text-sky-200 max-w-xs ml-10 font-light'>{value.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
