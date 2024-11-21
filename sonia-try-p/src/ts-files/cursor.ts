import { CursorPosition } from "./types";

let currentCursorPosition: CursorPosition = { wordIndex: 0, letterIndex: 0 };

export function updateCursorLetterPosition(direction: number) {
  currentCursorPosition.letterIndex += direction;
}

export function getCurrentCursorPosition(): CursorPosition {
  return currentCursorPosition;
}

export function newWord(){
  currentCursorPosition.wordIndex ++;
  currentCursorPosition.letterIndex = 0;
}