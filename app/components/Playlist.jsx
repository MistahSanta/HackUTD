"use client";
import MusicBar from "./musicBar";
import React, { useState } from "react";
import { SongByEmotion } from "../Data/Song.js";
function Playlist() {
  const [musicInfor, setMusicInfor] = useState(SongByEmotion["sad"]);

  //console.log([SongByEmotion["sad"]]);
  // console.log(musicInfor);
  // console.log(musicInfor.length);
  return (
    <div className="bg-tyt_bg w-[80vw] h-[100vw] md:w-[65vw] md:h-[20vw] text-center p-4  overflow-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
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
