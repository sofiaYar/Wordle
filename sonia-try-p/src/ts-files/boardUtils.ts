import { Board, CursorPosition } from "./types";
import Colors from "../enums/letterColors";
import { letterPerWord, wordsAmount } from "./constants";
import { updateCursorLetterPosition, getCurrentCursorPosition, newWord } from "./cursor";

export function initializeBoard(): Board[] {
  const initialWords: Board[] = [];
  for (let i = 0; i < wordsAmount; i++) {
    initialWords.push({ word: [], letterColor: [] });
    for (let j = 0; j < letterPerWord; j++) {
      initialWords[i].word.push("");
      initialWords[i].letterColor.push(Colors.White);
    }
  }
  return initialWords;
}

export function insertLetter(words: Board[], key: string): Board[] {
  const updatedWords = [...words];
  const cursor = getCurrentCursorPosition();

  if (cursor.letterIndex < letterPerWord) {
    updatedWords[cursor.wordIndex].word[cursor.letterIndex] = key;
    updateCursorLetterPosition(1);
  }

  return updatedWords;
}

export function deleteLetter(words: Board[]): Board[] {
  const updatedWords = [...words];
  const cursor = getCurrentCursorPosition();

  if (cursor.letterIndex > 0) {
    updatedWords[cursor.wordIndex].word[cursor.letterIndex - 1] = "";
    updateCursorLetterPosition(-1);
  }

  return updatedWords;
}

export function sendWord(
  words: Board[],
  chosenWord: string ,
  allWords: string 
) {
  const cursor = getCurrentCursorPosition();
  const wordToCheck = words[cursor.wordIndex].word;
  const copy = [...words]

  let colors :Colors[]=copy[cursor.wordIndex].letterColor; 
  if(checkWord(allWords, wordToCheck, cursor)){
    colors = (getColors(wordToCheck, chosenWord))
    copy[cursor.wordIndex].letterColor = colors;
    newWord()
  }
  
  return copy;
}

function checkWord(allWords: any | null, word: string[], cursor: CursorPosition): boolean {
  if (cursor.letterIndex === letterPerWord) {
    const str = word.join("");
    return allWords.some((item: any) => item.word === str);
  } else return false;
}


function getColors(word: string[], chosenWord: string):Colors[]{

  const coco = word.map((letter:string, index:number)=>{
        if(chosenWord.indexOf(letter)=== index){
          return Colors.Green;
        }
        else if(chosenWord.includes(letter)){
          return Colors.Yellow;
        }
        else{
          return Colors.Grey;
        }
  });
  console.log(coco);
  return coco;
}



export function gameDone(words:Board[]):boolean{
  const cursor = getCurrentCursorPosition();
  const allRight = words[cursor.wordIndex].letterColor.map((color:Colors)=>{
    if(color === Colors.Green)
      return true;
    return false;
  })
  return cursor.letterIndex === letterPerWord && cursor.wordIndex === wordsAmount || !allRight.includes(false)
}