import { atom } from "nanostores"

export const viewSettings = atom();

export function setLetter(letter) {
  viewSettings.set(letter);
}