import './WordsView.css'
import { useCallback, useEffect } from 'react';
import Colors from '../enums/letterColors';
import SingleWord from './single_word/SingleWord';

interface WordsViewProps {
  OnClick: Function;
  WordsDict: Dictionary[];
}

interface Dictionary {
  word: string[];
  letterColor: Colors[];
}

function WordsView(props: WordsViewProps) {
  KeyPress(props.OnClick);

  let allLetters = props.WordsDict.map((inst: Dictionary) => {
    return (
      <SingleWord word={inst.word} colors={inst.letterColor} />
    );
  });

  return <div className="grid">{allLetters}</div>;
}

export default WordsView;

function KeyPress(onClickFunc: Function) {
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      console.log(`Key pressed: ${event.key}`);
      onClickFunc(event.key);
    },
    [onClickFunc]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);
}
