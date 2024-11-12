import WordsView from './words_view'
import KeyBoard from './key_board'
import './WordsBase.css'
import Colors from "./Color"

function WordsBase() {

  let dict: Map<string,Colors[]> = new Map([
    ["",[]],
    ["",[]],
    ["",[]],
    ["",[]],
    ["",[]],
    ["",[]]
  ])

  return (
    <>
       <WordsView WordsDict= 
        {dict}    
    />
    <KeyBoard /> 
    </>
  )
}

export default WordsBase
