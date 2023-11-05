import Image from "next/image";
import Header from "./components/header";
import Playlist from "./components/Playlist";
import Playbar from "./components/Playbar";
import Camera from "./components/Camera";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-col gap-4 flex-grow justify-center items-center mt-[2em]">
        <Camera />
        <Playlist />
      </div>
      <footer className="flex h-12 justify-center items-center bg-tyt_bg">
        <Playbar />
      </footer>
    </div>
  );
}
