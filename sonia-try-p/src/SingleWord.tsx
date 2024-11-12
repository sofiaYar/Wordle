import SingleKey from './SingleKey'
import Color from './Color'

function SingleWord(props:any) {
   
    let word :string = props.word;
    let letterArray :String[]= []

    for(let i = 0; i < 5 ; i++){
        if(word[i] != ""){
            letterArray.push(word[i])
        }
        else{
            letterArray.push("")
        }
    }


     let wordd = letterArray.map((letter:any, index:number)=>{
        // console.log(index+" index "+" letter "+ letter)
        let color:any;
        if(letter == undefined){
            color = Color.White
        }
        else{
            color = props.colors[index]
        }
        return (
            <SingleKey Letter={letter} LetterColor={color}></SingleKey>
        );
    })
  return (
        <>    
            {wordd}
            </>
    )
}

export default SingleWord
