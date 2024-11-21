import SingleKey from "./single_letter/SingleKey";
import Color from "../../enums/letterColors";

function SingleWord(props: any) {
  let word: string[] = props.word;
  let colors1: Color[] = props.colors;

  let wordd = word.map((letter: any, index: number) => {
    return <SingleKey Letter={letter} LetterColor={colors1[index]}></SingleKey>;
  });
  return <>{wordd}</>;
}

export default SingleWord;
   