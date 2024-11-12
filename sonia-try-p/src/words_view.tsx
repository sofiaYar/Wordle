import './WordsView.css'
import SingleWord from './SingleWord'

function WordsView(props:any) {


  let wordsArray = []
  for (let key of props.WordsDict.keys()) {
    wordsArray.push(key);
  }

  for(let i =0 ; wordsArray.length < 6; i++){
    wordsArray.push("");
   }

  let varrr = wordsArray.map((word:any)=>{    
    return(
      <SingleWord word={word} color={props.WordsDict.get(word)}></SingleWord>
    );
  })


  return (
    <div className="grid">
      {varrr}
    </div>
  
    
  )
}

export default WordsView
