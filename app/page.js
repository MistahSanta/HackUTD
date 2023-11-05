import Image from "next/image";
import Header from "./components/header";
import Playlist from "./components/playlist";
import Playbar from "./components/Playbar";
export default function Home() {
  return (
    <main className=" h-[100vh] flex flex-col justify-center items-center">
      <Header />
      <div className="flex justify-center items-center flex-grow">
        <Playlist />
      </div>
      <footer className="flex flex-col h-[12vh] w-full bottom-0 absolute left-0 justify-center items-center bg-tyt_bg">
        <Playbar />
      </footer>
    </main>
  );
}
