'use client';
import { useState } from "react";
import { setLetter } from "../store";

export default function GalleryItem({letter, children}) {
  return letter && (
    <div className="gallery-item" onClick={() => {
      setLetter({...letter.data, content: letter.body});
    }}>
      {children}
    </div>
  );
}