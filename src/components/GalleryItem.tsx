'use client';
import { useState } from "react";
import { setLetter } from "../store";

export default function GalleryItem({letter}) {
  return letter && (
    <div className="gallery-item" onClick={() => {
      alert(`You clicked ${letter.data.letter}`);
      setLetter({...letter.data, content: letter.body});
    }}>
      {letter.data?.dropcap && <img src={letter.data.dropcap.src} alt=""/>}
    </div>
  );
}