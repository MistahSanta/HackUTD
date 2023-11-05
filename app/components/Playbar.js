"use client";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import { RiSkipLeftFill, RiSkipRightFill } from "react-icons/ri";
import React, { useState, useRef } from "react";
import { SongByEmotion } from "../Data/Song.js";

export default function Playbar() {
  const [musicInfor, setMusicInfor] = useState(SongByEmotion["sad"]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  function handlePlay() {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  }

  function handlePause() {
    audioRef.current.pause();
    setIsPlaying(false);
  }

  function handleSkipBackward() {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
      audioRef.current.load();
      audioRef.current.play();
    }
  }

  function handleSkipForward() {
    if (currentSongIndex < musicInfor.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
      audioRef.current.load();
      audioRef.current.play();
    }
  }

  return (
    <main className="flex flex-col w-[40vw] justify-center items-center">
      <div className="flex relative w-[30vw] h-[20vh] lg:w-[12vw] lg:h-[10vh] justify-between items-center">
        <RiSkipLeftFill
          size={50}
          className="hover:cursor-pointer"
          onClick={handleSkipBackward}
        />
        {!isPlaying ? (
          <BsFillPlayCircleFill
            size={70}
            className="hover:cursor-pointer"
            onClick={handlePlay}
          />
        ) : (
          <BsFillPauseCircleFill
            size={70}
            className="hover:cursor-pointer"
            onClick={handlePause}
          />
        )}
        <RiSkipRightFill
          size={50}
          className="hover:cursor-pointer"
          onClick={handleSkipForward}
        />
      </div>
      <audio
        ref={audioRef}
        src={musicInfor[currentSongIndex].url}
        onEnded={handleSkipForward}
      />
    </main>
  );
}
