import Image from "next/image";
import { brand } from "@/types";

const Brand: React.FC<brand> = ({ image, alt }) => (
  <div className='mx-5'>
    <Image src={image} alt={alt} />
  </div>
);

export default Brand;
