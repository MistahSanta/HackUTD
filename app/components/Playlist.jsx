"use client";
import React, { useState, useContext, useEffect } from "react";
import { SongByEmotion } from "../Data/Song.js";
import MusicBar from "./musicBar";
import Playbar from "./Playbar";
import { EmotionContext } from "../Context/MotionContext";

function Playlist() {
  const { emotion, setEmotion } = useContext(EmotionContext);
  const [musicInfor, setMusicInfor] = useState(SongByEmotion["sad"]);

  // Update the playlist whenever the emotion changes
  useEffect(() => {
    setMusicInfor(SongByEmotion[emotion]);
  }, [emotion]);

  return (
    <div className="bg-tyt_bg w-[80vw] h-[100vw] md:w-[65vw] md:h-[20vw] text-center p-4 overflow-auto overflow-x-hidden no-scrollbar rounded-xl ">
      <h1 className="text-[1.5rem] md:text-[2.5rem] font-bold text-tyt_red">
        Your Playlist
      </h1>
      <div>
        {musicInfor &&
          musicInfor.length > 0 &&
          musicInfor.map((song, index) => (
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
