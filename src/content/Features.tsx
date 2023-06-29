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
    <div className="md:flex md:justify-between sm:text-xl">
      <div className="flex flex-col mb-5 sm:mb-0">
        <h1 className="gradient-text xl:text-3xl lg:text-2xl font-bold lg:w-10/12 md:text-xl md:w-64">
          The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.
        </h1>
        <p className="gradient-text text-sm md:mt-5 sm:my-5">Request Early Access to Get Started</p>
      </div>
      <div className="text-white xl:max-w-xl lg:max-w-lg lg:ml-5">
        {featuresData.map((value, index) => (
          <div key={index} className="flex flex-col sm:flex-row mb-5 justify-between">
            <Title title={value.title} />
            <p className="text-sky-200 sm:max-w-xs xl:ml-5 lg:ml-2 font-light md:w-56 md:pl-2 xl:text-base xl:pl-0 text-sm">
              {value.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
