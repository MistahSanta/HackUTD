import Header from "./components/header";
import Playlist from "./components/Playlist";
import Playbar from "./components/Playbar";
import Camera from "./components/Camera";
import { Ubuntu } from "next/font/google";
import { EmotionProvider } from "./Context/MotionContext.js";
const inter = Ubuntu({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <EmotionProvider>
      <main className={inter.className}>
        <main className=" h-[100vh] flex flex-col justify-center">
          <Header />
          <div className="flex flex-col justify-center items-center flex-grow ">
            <Camera />
            <div className="bg-tyt_bg w-[80vw] h-[100vw] md:w-[65vw] md:h-[60vh] no-scrollbar rounded-xl shadow-lg ">
              <Playlist />
              <Playbar />
            </div>
          </div>
        </main>
      </main>
    </EmotionProvider>
  );
}
