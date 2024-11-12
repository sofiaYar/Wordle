import './SingleKey.css'
import Color from './Color'

function SingleKey(props:any) {

    let chosenColor = props.LetterColor;
    let LL = <text className="tile">{props.Letter }</text>;
    if(chosenColor == Color.Green){
      LL = <text  id="correct" className="tile">{props.Letter}</text>
    }
    else if(chosenColor == Color.Yellow){
      LL = <text  id="present" className="tile">{props.Letter}</text>
    }
    else if(chosenColor == Color.Grey){
      LL = <text  id="absent" className="tile">{props.Letter}</text>
    }

  return (
   <>{ LL}</> 
  )
}

export default SingleKey


