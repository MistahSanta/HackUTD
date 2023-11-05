"use client";
import React, { createContext, useState } from "react";

const EmotionContext = createContext();

const EmotionProvider = ({ children }) => {
  const [emotion, setEmotion] = useState("");

  return (
    <EmotionContext.Provider value={{ emotion, setEmotion }}>
      {children}
    </EmotionContext.Provider>
  );
};

export { EmotionContext, EmotionProvider };
