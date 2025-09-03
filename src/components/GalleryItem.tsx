'use client';
import { useState } from "react";
import { setLetter } from "../store";

export default function GalleryItem({letter}) {
  return letter && (
    <div className="sample" onClick={() => {
      alert(`You clicked ${letter.data.letter}`);
      setLetter(letter.data.letter.toLowerCase());
    }}>
        <div className="gallery-item">
              <img src={letter.data.dropcap.src} alt=""/>
        </div>
    </div>
  );
}