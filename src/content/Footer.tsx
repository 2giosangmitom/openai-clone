import gpt3logo from "@/assets/logo.svg";
import Image from "next/image";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="mt-32 bg-blue-950 xl:-mx-32 2xl:-mx-36 lg:-mx-24 md:-mx-10 sm:-mx-5">
      <div className="text-center md:px-32 sm:px-20">
        <h1 className="gradient-text font-bold pt-20 text-5xl">Do you want to step in to the future before others</h1>
      </div>

      <div className="text-center py-10">
        <button className="bg-transparent border rounded hover:bg-white hover:border-transparent hover:text-black duration-200 ease-in p-3 text-white">
          Request Early Access
        </button>
      </div>

      <div className="grid grid-cols-4 text-white md:mx-24 my-20 font-light">
        <div className="px-2">
          <Image src={gpt3logo} width={100} alt="logo" />
          <p className="pt-5 text-sm font-medium">
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>
        <div className="px-2 flex flex-col">
          <h4 className="font-medium text-base mb-5">Links</h4>
          <a href="" className="pb-2 hover:text-cyan-300 duration-300">
            Overons
          </a>
          <a href="" className="pb-2 hover:text-cyan-300 duration-300">
            Social Media
          </a>
          <a href="" className="pb-2 hover:text-cyan-300 duration-300">
            Counters
          </a>
          <a href="" className="pb-2 hover:text-cyan-300 duration-300">
            Contact
          </a>
        </div>
        <div className="px-2 flex flex-col">
          <h4 className="font-medium text-base mb-5">Company</h4>
          <a href="" className="pb-2 hover:text-cyan-300 duration-300">
            Terms & Conditions{" "}
          </a>
          <a href="" className="pb-2 hover:text-cyan-300 duration-300">
            Privacy Policy
          </a>
          <a href="" className="pb-2 hover:text-cyan-300 duration-300">
            Contact
          </a>
        </div>
        <div className="px-2 flex flex-col">
          <h4 className="font-medium text-base mb-5">Get in touch</h4>
          <a href="" className="pb-2 hover:text-cyan-300 duration-300">
            Crechterwoord K12 182 DK Alknjkcb
          </a>
          <a href="" className="pb-2 hover:text-cyan-300 duration-300">
            085-132567
          </a>
          <a href="" className="pb-2 hover:text-cyan-300 duration-300">
            info@payme.net
          </a>
        </div>
      </div>

      <div className="text-center text-white pb-5">
        <p className="text-sm font-light">@{year} GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
