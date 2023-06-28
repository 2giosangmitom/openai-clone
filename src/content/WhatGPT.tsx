import { Title } from "@/components";

const WhatGPT = () => {
  return (
    <div
      className='text-white p-10 my-20 rounded-lg bg-gradient-to-br from-sky-900 from-10% via-blue-950 via-20% to-sky-900'
      id='whatgpt'
    >
      <div className='mb-10 flex justify-between itmes-center'>
        <Title title='What is GPT-3' />
        <p className='max-w-2xl text-sky-200'>
          We so opinion friends me message as delight. Whole front do of plate heard oh ought. His
          defective nor convinced residence own. Connection has put impossible own apartments
          boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to
          on by.
        </p>
      </div>

      <div className='flex justify-between items-center my-20'>
        <h1 className='gradient-text text-3xl font-bold max-w-lg'>
          The possibilities are beyond your imagination
        </h1>
        <a href='' className='gradient-text'>
          Explore the Library
        </a>
      </div>

      <div className='flex justify-between'>
        <div className='max-w-xs'>
          <Title title='Chatbots' />
          <p className='text-sky-200 mt-2'>
            We so opinion friends me message as delight. Whole front do of plate heard oh ought.
          </p>
        </div>
        <div className='max-w-xs'>
          <Title title='Knowledgebase' />
          <p className='text-sky-200 mt-2'>
            At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As
            put impossible own apartments b.
          </p>
        </div>
        <div className='max-w-xs'>
          <Title title='Education' />
          <p className='text-sky-200 mt-2'>
            At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As
            put impossible own apartments b.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatGPT;
