"use client";
import MusicBar from "./musicBar";
import React, { useState } from "react";
import { SongByEmotion } from "../Data/Song.js";
import Playbar from "./Playbar";
function Playlist() {
  const [musicInfor, setMusicInfor] = useState(SongByEmotion["sad"]);

  return (
    <div className="bg-tyt_bg w-[80vw] h-[100vw] md:w-[65vw] md:h-[20vw] text-center p-4 overflow-auto overflow-x-hidden no-scrollbar rounded-xl ">
      <h1 className="text-[1.5rem] md:text-[2.5rem] font-bold text-tyt_red">
        Your Playlist
      </h1>
      <div>
        {musicInfor.map((song, index) => (
          <MusicBar
            key={index}
            title={song.title}
            artist={song.artist}
            image={song.image}
            time={song.time}
          />
        ))}
      </div>
  
    </div>
  );
}

export default Playlist;
