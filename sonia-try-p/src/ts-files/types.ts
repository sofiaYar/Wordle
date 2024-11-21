import Colors from "../enums/letterColors";

export interface Board {
  word: string[];
  letterColor: Colors[];
}

export interface CursorPosition {
  wordIndex: number;
  letterIndex: number;
}


    
  export interface KeyInformation {
    displayLabel: string;
    keyColor: Colors;
  }