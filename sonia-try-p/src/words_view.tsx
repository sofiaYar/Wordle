import './WordsView.css'
import SingleWord from './SingleWord'
import { useCallback, useEffect } from 'react';

function WordsView(props:any) {

  KeyPress(props.OnClick);
  
  let wordsArray = []
  for (let key of props.WordsDict.keys()) {
    wordsArray.push(key);
  }

  for(let i =0 ; wordsArray.length < 6; i++){
    wordsArray.push("");
   }

  let allWords = wordsArray.map((word:any)=>{    
    return(
      <SingleWord word={word} colors={props.WordsDict.get(word)}></SingleWord>
    );
  })


  return (
    <div className="grid">
      {allWords}
    </div>
  
    
  )
}

export default WordsView

function KeyPress(onClickFunc){
  const handleKeyPress = useCallback((event:KeyboardEvent) => {
    console.log(`Key pressed: ${event.key}`);
    onClickFunc(event.key)

  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);
}