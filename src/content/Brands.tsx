import { Brand } from "@/components";
import { brand } from "@/types";
import google from "@/assets/google.png";
import slack from "@/assets/slack.png";
import atlassian from "@/assets/atlassian.png";
import dropbox from "@/assets/dropbox.png";
import shopify from "@/assets/shopify.png";

const brands: brand[] = [
  {
    image: google,
    alt: "google",
  },
  {
    image: slack,
    alt: "slack",
  },
  {
    image: atlassian,
    alt: "atlassian",
  },
  {
    image: dropbox,
    alt: "dropbox",
  },
  {
    image: shopify,
    alt: "shopify",
  },
];

const Brands: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-center sm:py-5 mt-10">
      {brands.map((value, index) => {
        return <Brand image={value.image} alt={value.alt} key={index} />;
      })}
    </div>
  );
};

export default Brands;
