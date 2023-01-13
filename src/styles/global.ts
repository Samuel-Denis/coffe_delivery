import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
    outline: 0;

   }

    body {
        background: ${(props) => props.theme['background-color']};
        color: ${(props) => props.theme['base-title']};
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        outline: none !important;
    }
`
