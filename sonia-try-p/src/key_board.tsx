
import './KeyBoard.css'
import Key from './KeyForBoard'

function KeyBoard() {

  let letters=["ק","ר","א","ט","ו","ן","ם","פ","מחק"
    ,"ש","ד","ג","כ","ע","י","ח","ל","ך","ף","ז"
    ,"ס","ב","ה","נ","מ","צ","ת","ץ","בדוק"
  ]


  let allLetters= letters.map((l:any)=>{
    return(    
    <Key letter={l}></Key>
    );
    
  })

  return (
    <>
      <div className="keyboard">
        {allLetters}
      </div>
    </>
  )
}

export default KeyBoard


