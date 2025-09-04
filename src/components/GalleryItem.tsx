'use client';
import { useState, type PropsWithChildren } from "react";
import { setLetter } from "../store";
import type { LetterEntry } from "../types";

interface GalleryItemProps extends PropsWithChildren {
  letter: LetterEntry;
}

export default function GalleryItem({ letter, children }: GalleryItemProps) {
  return letter && (
    <div className="gallery-item" onClick={() => {
      setLetter({...letter.data, content: letter.body});
    }}>
      {children}
    </div>
  );
}