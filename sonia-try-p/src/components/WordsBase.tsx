import WordsView from "../words_window/WordsView";
import KeyBoard from "../virtual_key_board/KeyBoard";
import { useEffect, useState } from "react";
import { Board, KeyInformation } from "../ts-files/types";
import {updateKeyboardColors } from "../ts-files/keyBoardUtils";
import {
  initializeBoard,
  insertLetter,
  deleteLetter,
  sendWord,
} from "../ts-files/boardUtils";
import { hebrewLetters } from "../ts-files/constants";
import Colors from "../enums/letterColors";

function WordsBase() {
  const [words, setWords] = useState<Board[]>(initializeBoard());
  const [data, setData] = useState(null);
  const [letters, setLetters] = useState<KeyInformation[]>(() => {
    return hebrewLetters.map((letter) => {
      return { displayLabel: letter, keyColor: Colors.White };
    });
  });
  const [isGameWon, setIsGameWon] = useState(false);


  useEffect(() => {
    fetch("/backend.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  function handleKeyClick(key: string) {
    if (isGameWon) return; 


    let updatedBoard = words;
    if (key === "Backspace") {
      updatedBoard = deleteLetter(words);
    } else if (hebrewLetters.includes(key)) {
      updatedBoard = insertLetter(words, key);
    } else if (key === "Enter") {
      updatedBoard = sendWord(words, data.todaysWord, data.words);
      const updatedLetters = updateKeyboardColors(updatedBoard, letters);
      setLetters(updatedLetters);

      if (checkWinCondition(updatedBoard)) {
        setIsGameWon(true); 
      }
    }
    setWords(updatedBoard);
  }

  function checkWinCondition(board: Board[]): boolean {
    return board.some((row) =>
      row.letterColor.every((color) => color === Colors.Green)
    );
  }

  return (
    <>
      <WordsView WordsDict={words} OnClick={handleKeyClick} />
      <KeyBoard onKeyClick={handleKeyClick} possibleLetters={letters} />

    </>
  );
}

export default WordsBase;

