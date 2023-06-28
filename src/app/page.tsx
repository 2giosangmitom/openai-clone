import { Navbar, CTA } from "@/components";
import { Header, Brands, WhatGPT, Features, Possibility, Blogs } from "@/content";

const Home: React.FC = () => {
  return (
    <div className='mx-32'>
      <Navbar />
      <Header />
      <Brands />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blogs />
    </div>
  );
};

export default Home;
