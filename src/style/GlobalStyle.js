import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    //Basic formatting
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }
    body{
        overflow-x: hidden;
        overflow-y: hidden;
    }
    //Style button Global
    button{
        cursor: pointer;
    }
    //Colors and Fonts
    :root{
        --white: #FFFFFF;
        --very-dark-blue: #0b0d17;
        --light-grayish-blue: #D0D6F9;
        --bellefair: 'Bellefair', sans-serif;
        --barlow: 'Barlow', sans-serif;
        --barlowCondensed: 'Barlow Condensed', sans-serif;
    }

    @keyframes rotate {
        to{
            transform: rotate(0);
        }
        from{
            transform: rotate(360deg);
        }
    }
`;
export default GlobalStyle