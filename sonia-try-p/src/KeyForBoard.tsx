
import './KeyForBoard.css'

function KeyForBoard(props:any) {
    let key = <button className="key">{props.letter}</button>
    if(props.letter == "מחק"){
        key = <button className="key" id="erase">{props.letter}</button>
    }
    else if(props.letter == "בדוק"){
        key = <button className="key" id="enter">{props.letter}</button>
    }
  return (
    <>
       {key}
    </>
  )
}

export default KeyForBoard
