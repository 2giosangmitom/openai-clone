import { Title } from "@/components";

const WhatGPT = () => (
  <div
    className="text-white xl:p-10 lg:p-8 my-20 rounded-lg bg-gradient-to-br from-sky-900 from-10% via-blue-950 via-20% to-sky-900 md:p-5 sm:p-3 p-2"
    id="whatgpt"
  >
    <div className="mb-10 sm:flex justify-between itmes-center">
      <Title title="What is GPT-3" />
      <p className="2xl:max-w-2xl xl:max-w-2xl lg:max-w-xl text-sky-200 md:max-w-md xl:text-base text-sm">
        We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced
        residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so
        humanity he. Friendly bachelor entrance to on by.
      </p>
    </div>

    <div className="flex justify-between items-center sm:my-20 my-10 flex-col sm:flex-row">
      <h1 className="gradient-text text-center sm:text-left lg:text-3xl md:text-2xl sm:text-xl max-w-sm md:max-w-md font-bold">
        The possibilities are beyond your imagination
      </h1>
      <a href="" className="gradient-text">
        Explore the Library
      </a>
    </div>

    <div className="flex flex-col sm:flex-row justify-between items-start text-sm xl:text-base">
      <div className="sm:w-1/3">
        <Title title="Chatbots" />
        <p className="text-sky-200 mt-2">
          We so opinion friends me message as delight. Whole front do of plate heard oh ought.
        </p>
      </div>
      <div className="sm:w-1/3 sm:mx-3 my-5 sm:my-0">
        <Title title="Knowledgebase" />
        <p className="text-sky-200 mt-2">
          At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own
          apartments b.
        </p>
      </div>
      <div className="sm:w-1/3">
        <Title title="Education" />
        <p className="text-sky-200 mt-2">
          At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own
          apartments b.
        </p>
      </div>
    </div>
  </div>
);

export default WhatGPT;
