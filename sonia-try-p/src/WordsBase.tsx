import WordsView from './words_view'
import KeyBoard from './key_board'
import './WordsBase.css'
import Colors from "./Color"

function WordsBase() {

  let dict: Map<string,Colors[]> = new Map([
    ["ss",[]],
    ["",[]],
    ["",[]],
    ["",[]],
    ["",[]],
    ["",[]]
  ]) 
  
  function NewKeyPress(key : string){
    //console.log("in")
    for (let word of dict.keys()) {
      //console.log(dict)

      if(word.length < 5){
       // console.log("in3")

        // dict.set(word+key,[])
        console.log(word+key)
        dict.values
        break;

      }
    }

  }

  function CheckKey(key : string):boolean{
    //some check logic here
    return true;
  }
  return (
    <>
    {/* {NewKeyPress("s")} */}
       <WordsView WordsDict= {dict} OnClick={NewKeyPress}   />
       <KeyBoard /> 
    </>
  )
}

export default WordsBase
