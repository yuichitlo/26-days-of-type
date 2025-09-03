'use client';
import { useStore } from '@nanostores/react';
import { viewSettings } from "../store";


export default function DetailView() {
  const $letter = useStore(viewSettings);
  return $letter && <div>{$letter}</div>;
}