import Image from "next/image";
import possibility from "@/assets/possibility.png";

const Possibility = () => (
  <div className="my-10 flex justify-between items-center" id="possibility">
    <div className="">
      <Image src={possibility} alt="possibility" width={500} />
    </div>
    <div className="max-w-lg">
      <h4 className="text-sky-200 text-lg mb-2">Request Early Access to Get Started</h4>
      <h1 className="gradient-text text-3xl font-bold my-5">
        The possibilities are <br /> beyond your imagination
      </h1>
      <p className="text-sky-200 mb-5">
        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way
        everything joy alteration boisterous the attachment. Party we years to order allow asked of.
      </p>
      <h4 className="gradient-text text-lg">Request Early Access to Get Started</h4>
    </div>
  </div>
);
export default Possibility;
