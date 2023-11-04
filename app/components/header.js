import Image from "next/image";
import toyotalogo from "public/toyotalogo.png";
import { BiSolidUserCircle } from "react-icons/bi";
function header() {
  return (
    <main className="flex justify-between bg-tyt_bg py-2 px-4 shadow-md">
      <div className="flex">
        <img
          src="/toyotalogo.png"
          alt="Toyota Logo"
          className="w-[150px] h-[70px] md:w-[200px] md:h-[100px]"
        />
        <h1 className="text-[1.5rem] md:text-[2rem] mt-6 md:mt-8 font-bold">
          MoodTunes
        </h1>
      </div>

      <div className="text-tyt_red mt-5 md:mt-8 text-[1rem] md:text-[2rem]">
        <BiSolidUserCircle size={"40px"} />
      </div>
    </main>
  );
}

export default header;
