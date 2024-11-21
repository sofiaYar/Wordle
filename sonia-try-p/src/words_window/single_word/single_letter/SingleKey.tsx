import './SingleKey.css';
import Color from '../../../enums/letterColors';

interface SingleKeyProps {
  Letter: string;
  LetterColor: Color;
}

function SingleKey({ Letter, LetterColor }: SingleKeyProps) {

  return (
    <div className="tile" id={LetterColor}>
      {Letter}
    </div>
  );
}

export default SingleKey;
