function musicBar() {
  return (
    <div className="relative group w-full flex flex-row justify-between h-10 mb-4 transform hover:scale-105 transition-transform">
      <div className="w-[50%] flex flex-row">
        <div className="w-[50%] md:w-[20%]">
          <img
            src="/toyotalogo.png"
            alt="Toyota Logo"
            // className="w-[150px] h-[70px] md:w-[200px] md:h-[100px]"
          />
        </div>

        <div className="font-light flex flex-col items-start mt-3 md:mt-2">
          <p className="text-[0.75rem] md:text-[1rem]">Just a music</p>
          <p className="text-[0.5rem] md:text-[0.75rem]">Artist</p>
        </div>
      </div>
      <div className="mt-2 font-light">
        <p className="text-[0.75rem] md:text-[1rem]">3:45</p>
      </div>
    </div>
  );
}

export default musicBar;
