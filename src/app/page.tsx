import { Navbar, CTA } from "@/components";
import { Header, Brands, WhatGPT, Features, Possibility, Footer } from "@/content";

const Home: React.FC = () => {
  return (
    <div className="2xl:px-36 xl:px-32 lg:px-24 md:px-10 sm:px-5">
      <Navbar />
      <Header />
      <Brands />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
