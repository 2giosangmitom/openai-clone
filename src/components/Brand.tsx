import Image from "next/image";
import { brand } from "@/types";

const Brand: React.FC<brand> = ({ image, alt }) => (
  <div className="mx-5">
    <Image src={image} alt={alt} className="w-auto" height={200} />
  </div>
);

export default Brand;
