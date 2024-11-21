import './SingleKey.css';
import Color from '../../../enums/letterColors';

interface SingleKeyProps {
  Letter: string;
  LetterColor: Color;
}

function SingleKey({ Letter, LetterColor }: SingleKeyProps) {
  let colorClass = '';
  
  if (LetterColor === Color.Green) {
    colorClass = 'correct';
  } else if (LetterColor === Color.Yellow) {
    colorClass = 'present';
  } else if (LetterColor === Color.Grey) {
    colorClass = 'absent';
  }

  return (
    <div className={`tile ${colorClass}`} id={colorClass}>
      {Letter}
    </div>
  );
}

export default SingleKey;
