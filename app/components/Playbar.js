"use client";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import { RiSkipLeftFill, RiSkipRightFill } from "react-icons/ri";
import React, { useState, useRef, useEffect } from "react";
import { SongByEmotion } from "../Data/Song.js";

export default function Playbar() {
  const [musicInfor, setMusicInfor] = useState(SongByEmotion["sad"]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [duration, setDuration] = useState(0);
  const [curTime, setCurTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const progressbarRef = useRef(null);

  const selectMusic = () => {
    
  }

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }

  const handleTimeUpdate = () => {
    setCurTime(audioRef.current.currentTime);
  }

  const handleloadedData = () => {
    setDuration(audioRef.current.duration);
  }


  const handleProgressBarClick = (e) => {
    const rect = progressbarRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newTime = (offsetX / rect.width) * duration;
    audioRef.current.currentTime = newTime;
    setCurTime(newTime);
  };

  function handlePlay() {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause()
    }
    setIsPlaying(!isPlaying);
    
  }


  function handleSkipBackward() {
    if (currentSongIndex > 0) {
      setCurrentSongIndex( currentSongIndex - 1 );
      playAudio();
    }
  }

  function handleSkipForward() {
    if (currentSongIndex < musicInfor.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
      playAudio();
    }
  }
  useEffect( () => { 
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    audioRef.current.addEventListener('loadeddata', handleloadedData);
    // return () => {
    //   audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
    //   audioRef.current.removeEventListener('loadeddata', handleloadedData);
    // };
  }, [] );

  return (
    <main className="flex flex-col w-[40vw] justify-center items-center my-4 bg-tyt_bg mx-auto">
      <div className="flex relative w-[30vw] h-[20vh] lg:w-[12vw] lg:h-[10vh] justify-between items-center">
        <RiSkipLeftFill
          size={50}
          className="hover:cursor-pointer hover:bg-slate-300 rounded-full"
          onClick={handleSkipBackward}
        />
        {!isPlaying ? (
          <BsFillPlayCircleFill
            size={70}
            className="hover:cursor-pointer bg-tyt_red rounded-full"
            onClick={handlePlay}
          />
        ) : (
          <BsFillPauseCircleFill
            size={70}
            className="hover:cursor-pointer bg-tyt_red rounded-full"
            onClick={handlePlay}
          />
        )}
        <RiSkipRightFill
          size={50}
          className="hover:cursor-pointer hover:bg-slate-300 rounded-full"
          onClick={handleSkipForward}
        />
        </div>



      
      <audio ref={audioRef} >
      <source src={`${musicInfor[currentSongIndex].url}`} type="audio/mpeg" />

      </audio>

      <div ref={progressbarRef}
              onClick={handleProgressBarClick}
              className="hover:cursor-pointer"
              style={{ width: '100%', backgroundColor: 'lightgray', borderRadius: '10px' }}
      >
        {console.log(curTime)}
          <div 
            style={{
              width: `${(curTime / duration) * 100}%`,
              height: '10px',
              backgroundColor: 'red',
              borderRadius: '10px',
            }}>
          </div>

        </div>



    </main>
  );
}
