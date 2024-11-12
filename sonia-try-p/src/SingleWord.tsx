import SingleKey from './SingleKey'

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


     let wordd = letterArray.map((letter:any)=>{
        return (
            <SingleKey id="present"letter={letter}></SingleKey>
        );
    })
  return (
        <>    
            {wordd}
            </>
    )
}

export default SingleWord
