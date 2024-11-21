import './KeyBoard.css';
import Key from './single_key/KeyForBoard';
import { AiOutlineEnter } from "react-icons/ai";
import { MdBackspace } from "react-icons/md";
import {KeyInformation} from '../ts-files/types'

interface KeyBoardProps {
  onKeyClick: Function;
  possibleLetters: KeyInformation[];
}

function KeyBoard({ onKeyClick, possibleLetters }: KeyBoardProps) {

  const allLetters = possibleLetters.map((l: KeyInformation) => (
    <Key
      onKeyClick={onKeyClick}
      letter={l}
    />
  ));

  return (
    <div className="keyboard">
      {allLetters}
      <button
        className="key erase"
        id="erase"
        onClick={() => onKeyClick("Backspace")}
      >
        <MdBackspace />
      </button>
      <button
        className="key enter"
        id="enter"
        onClick={() => onKeyClick("Enter")}
      >
        <AiOutlineEnter />
      </button>
    </div>
  );
}

export default KeyBoard;
