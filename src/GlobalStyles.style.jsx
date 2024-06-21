import { createGlobalStyle } from "styled-components";

/*--------------------------------------------------------------*/

// Definição de estilos globais

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: Helvetica, Arial, sans-serif;
        margin: 0px;
        padding: 0px;
        background-image:  linear-gradient(30deg, #011627 12%, transparent 12.5%, transparent 87%, #011627 87.5%, #011627), linear-gradient(150deg, #011627 12%, transparent 12.5%, transparent 87%, #011627 87.5%, #011627), linear-gradient(30deg, #011627 12%, transparent 12.5%, transparent 87%, #011627 87.5%, #011627), linear-gradient(150deg, #011627 12%, transparent 12.5%, transparent 87%, #011627 87.5%, #011627), linear-gradient(60deg, rgba(1,22,39,0.5) 25%, transparent 25.5%, transparent 75%, rgba(1,22,39,0.5) 75%, rgba(1,22,39,0.5)), linear-gradient(60deg, rgba(1,22,39,0.5) 25%, transparent 25.5%, transparent 75%, rgba(1,22,39,0.5) 75%, rgba(1,22,39,0.5));
background-size: 120px 210px;
background-position: 0 0, 0 0, 60px 105px, 60px 105px, 0 0, 60px 105px;
background-color: #042038;



    }

    p, h1, h2, h3 {
        margin: 0;
        padding: 0;
        color: #F5FFF6;
    }
`;
