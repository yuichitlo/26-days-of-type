import { atom } from "nanostores"

export const viewSettings = atom();

export function setLetter(letter) {
    debugger;
  viewSettings.set(letter);
  console.log("Set letter: ", letter);
}