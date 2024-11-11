import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Title from './Title.tsx'
import KeyBoard from './key_board.tsx'
import WordView from './words_view.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <Title/>

    <WordView/>
    <KeyBoard /> 
  </StrictMode>,
)
