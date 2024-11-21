import './KeyForBoard.css';
import {KeyInformation } from '../../ts-files/types'

interface KeyForBoardProps {
  letter: KeyInformation;
  onKeyClick: Function;
}

function KeyForBoard({ letter ,onKeyClick}: KeyForBoardProps) {

  return (
    <button className={letter.keyColor} onClick={()=>{
      onKeyClick(letter.displayLabel)}}>
      {letter.displayLabel}
      {/* {letter.keyColor} */}
    </button>
  );
}

export default KeyForBoard;
