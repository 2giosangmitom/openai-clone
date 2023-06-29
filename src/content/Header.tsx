import Image from "next/image";
import AI from "@/assets/ai.png";
import people from "@/assets/people.png";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div className="mt-10">
        <h1 className="xl:text-5xl xl:leading-tight 2xl:text-7xl lg:text-3xl font-bold gradient-text md:text-2xl sm:text-xl text-lg">
          Let&apos;s Build Something
          <br />
          amazing with GPT-3 OpenAI
        </h1>
        <p className="text-sky-200 mt-5 xl:text-base text-sm">
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence
          way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <div className="mt-5">
          <input
            className="text-sky-200 rounded-lg py-3 px-5 mr-1 outline-none shadow-md bg-input text-sm w-full sm:w-72 mb-1 sm:mb-0"
            type="email"
            placeholder="Your Email Address"
          />
          <button
            className="text-white rounded-lg w-full sm:w-36 py-3 px-5 bg-orange-600 duration-300 hover:bg-orange-700 font-semibold text-sm"
            type="button"
          >
            Get Started
          </button>
        </div>
        <div className="mt-5">
          <Image src={people} alt="people" className="sm:h-7 sm:w-auto md:h-auto w-auto" />
          <p className="text-sky-200 xl:text-base text-sm">1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="-mt-6 xl:-mr-32 xl:-mt-5 lg:-mr-20 w-full h-auto z-0 sm:block hidden animate-scale md:mt-10 md:-mr-6 sm:mt-10">
        <Image src={AI} alt="AI image" priority className="xl:w-full h-auto" />
      </div>
    </div>
  );
};

export default Header;
