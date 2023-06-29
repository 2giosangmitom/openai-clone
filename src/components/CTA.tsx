const CTA: React.FC = () => (
  <div className="bg-gradient-to-br from-pink-500 to-violet-600 px-10 py-7 my-32 flex justify-between items-center sm:rounded-xl flex-col sm:flex-row -mx-2 rounded-none">
    <div className="md:max-w-md lg:max-w-2xl">
      <p className="sm:font-light sm:text-sm mb-2 hidden sm:block">Request Early Access to Get Started</p>
      <h3 className="font-semibold md:text-lg text-center sm:text-left">
        Register Today & start exploring the endless possibilities.
      </h3>
    </div>
    <div>
      <button className="bg-black hover:bg-neutral-950 sm:text-sm duration-300 px-10 text-center text-white py-3 rounded-3xl sm:font-semibold min-w-max text-xs font-medium max-w-lg sm:w-40 sm:m-0 mt-3">
        Get Started
      </button>
    </div>
  </div>
);

export default CTA;
