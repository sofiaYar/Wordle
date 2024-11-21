import { KeyInformation, Board } from "./types";
import Colors from "../enums/letterColors";

function updateLetterColor(
  newColor: Colors,
  key: string,
  letters: KeyInformation[]
): KeyInformation[] {
     letters.find((element:KeyInformation)=>{
        if(element.displayLabel === key){
          if(element.keyColor != Colors.Green)
            element.keyColor = newColor;
        }
      })
        
      return letters;
}

export function updateKeyboardColors(
  gameBoard: Board[],
  keyboardLetters: KeyInformation[]
): KeyInformation[] {
  let updatedKeyboardLetters = [...keyboardLetters];
  gameBoard.forEach((word) => {
    word.word.forEach((currentLetter, i) => {
      const currentColor = word.letterColor[i];
      updatedKeyboardLetters = updateLetterColor(
        currentColor,
        currentLetter,
        updatedKeyboardLetters
      );
    });
  });
  return updatedKeyboardLetters;
}
