import Image from "next/image";
import toyotalogo from "public/toyotalogo.png";
import { BiSolidUserCircle } from "react-icons/bi";
function header() {
  return (
    <main className="flex justify-between bg-tyt_bg px-4 shadow-md w-[100%] items-center ">
      <div className="flex">
        <img
          src="/toyotalogo.png"
          alt="Toyota Logo"
          className="w-[150px] h-[70px] md:w-[200px] md:h-[100px]"
        />
        <h1 className="  text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] mt-auto font-bold text-tyt_red bg" >
          MoodTunes
        </h1>
      </div>

      <div className="text-tyt_red text-[1rem] md:text-[2rem]">
        <BiSolidUserCircle size={"60px"} />
      </div>
    </main>
  );
}

export default header;
