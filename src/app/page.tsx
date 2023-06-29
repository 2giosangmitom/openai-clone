import { Navbar, CTA } from "@/components";
import { Header, Brands, WhatGPT, Features, Possibility, Blogs, Footer } from "@/content";

const Home: React.FC = () => {
  return (
    <div className="px-32">
      <Navbar />
      <Header />
      <Brands />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
