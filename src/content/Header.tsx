import Image from "next/image";
import AI from "@/assets/ai.png";
import people from "@/assets/people.png";

const Header: React.FC = () => {
  return (
    <div className='flex justify-between'>
      <div className='mt-10'>
        <h1 className='text-6xl font-bold gradient-text'>
          Let&apos;s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className='text-sky-200 mt-5'>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise
          blessing. Indulgence way everything joy alteration boisterous the attachment. Party we
          years to order allow asked of.
        </p>
        <div className='mt-5'>
          <input
            className='text-sky-200 py-3 px-5 rounded-l-lg outline-none shadow-md bg-input'
            type='email'
            placeholder='Your Email Address'
          />
          <button
            className='text-white rounded-r-lg py-3 px-5 bg-orange-600 duration-300 hover:bg-orange-700 font-semibold'
            type='button'
          >
            Get Started
          </button>
        </div>
        <div className='mt-5'>
          <Image src={people} alt='people' />
          <p className='text-sky-200'>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='-mt-6 -mr-32 z-0'>
        <Image src={AI} width={1300} alt='AI image' />
      </div>
    </div>
  );
};

export default Header;
