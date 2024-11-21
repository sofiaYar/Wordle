import Colors from "../enums/letterColors";

export interface Board {
  word: string[];
  letterColor: Colors[];
}

export interface CursorPosition {
  wordIndex: number;
  letterIndex: number;
}

export interface KeyRepresentation {
    displayLabel: string;
    keyCode: string;
    //keyColor: Colors;
  }
  
  export interface KeyInformation {
    displayLabel: string;
    keyColor: Colors;
    //keyColor: Colors;
  }