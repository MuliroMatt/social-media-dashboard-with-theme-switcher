import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    body{
        background-color: ${({ theme }) => theme.colors.background};
        position: relative;
        &::after{
            background-color: ${({ theme }) => theme.colors.backgroundPattern};
            content: '';
            display: block;
            width: 100%;
            height: 245px;
            position: absolute;
            top: 0;
            z-index: -1;
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
        }
    }
`