function MusicBar({ title, artist, time, image, path }) {
  return (
    <div className="relative group w-full flex flex-row justify-between h-20 mb-4 transform hover:bg-slate-300 hover:scale-105 transition-transform ">
      <div className="w-1/2 h-full flex flex-row gap-2 ">
        <div className="w-1/3 h-full ">
          <img
            src={image}
            alt="song img"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm md:text-base font-light">{title}</p>
          <p className="text-xs md:text-sm font-light">{artist}</p>
        </div>
      </div>
      <div className="flex items-center font-light">
        <p className="text-sm md:text-base">{time}</p>
      </div>
    </div>
  );
}

export default MusicBar;
