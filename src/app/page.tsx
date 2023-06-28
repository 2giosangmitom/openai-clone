import { Brand, Navbar } from "@/components";
import { Header, Brands } from "@/content";

const Home: React.FC = () => {
  return (
    <div className='mx-32'>
      <Navbar />
      <Header />
      <Brands />
    </div>
  );
};

export default Home;
