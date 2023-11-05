import Image from "next/image";
import Header from "./components/header";
import Playlist from "./components/playlist";
export default function Home() {
  return (
    <main className=" h-[100vh] flex flex-col justify-center items-center">
      <Header />
      <div className="flex justify-center items-center flex-grow">
        <Playlist />
      </div>
    </main>
  );
}
