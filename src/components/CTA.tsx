const CTA: React.FC = () => (
  <div className='bg-gradient-to-br from-pink-500 to-violet-600 px-10 py-7 my-32 flex justify-between items-center rounded-xl'>
    <div>
      <p className='font-light text-sm mb-2'>Request Early Access to Get Started</p>
      <h3 className='font-semibold text-xl'>
        Register Today & start exploring the endless possibilities.
      </h3>
    </div>
    <div>
      <button className='bg-black hover:bg-neutral-950 duration-300 px-10 text-center text-white py-3 rounded-3xl font-semibold'>
        Get Started
      </button>
    </div>
  </div>
);

export default CTA;
