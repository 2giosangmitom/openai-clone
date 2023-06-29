import Image from "next/image";
import possibility from "@/assets/possibility.png";

const Possibility = () => (
  <div className="my-10 flex flex-col sm:flex-row sm:justify-around items-center" id="possibility">
    <div className="">
      <Image src={possibility} alt="possibility" className="w-10/12 h-auto" />
    </div>
    <div className="max-w-lg mt-5 sm:mt-0">
      <h4 className="text-sky-200 mb-2 md:text-base text-sm text-center sm:text-left">
        Request Early Access to Get Started
      </h4>
      <h1 className="gradient-text lg:text-3xl font-bold my-5 md:text-xl text-center sm:text-left">
        The possibilities are <br /> beyond your imagination
      </h1>
      <p className="text-sky-200 mb-5 text-sm lg:text-base text-justify sm:text-left">
        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way
        everything joy alteration boisterous the attachment. Party we years to order allow asked of.
      </p>
      <h4 className="gradient-text text-base text-center sm:text-left">Request Early Access to Get Started</h4>
    </div>
  </div>
);
export default Possibility;
