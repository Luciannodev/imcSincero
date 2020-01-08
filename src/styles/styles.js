import {createGlobalStyle} from 'styled-components'
import Frame from '../assets/Frame.png'

export const GlobalStyle = createGlobalStyle`
    body{
        background: url(${Frame}) no-repeat top;
        background-size: cover;
    }

`