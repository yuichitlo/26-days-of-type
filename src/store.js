import { atom } from "nanostores"

export const store = atom();

export function setLetter(letter) {
  store.set(letter);
  console.log("Set letter: ", letter);
}