import Image from "next/image";
import { brand } from "@/types";

const Brand: React.FC<brand> = ({ image, alt }) => (
  <div className="mx-5 sm:my-0 my-2">
    <Image src={image} alt={alt} className="w-auto h-6" />
  </div>
);

export default Brand;
