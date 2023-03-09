import styled from "styled-components";

//background
import BgTechDesktop from "./background-technology-desktop.jpg"

export const Tech = styled.main`
    width: 100%;
    min-height: 100vh;
    background: url(${BgTechDesktop}) no-repeat;
    background-size: cover;
    background-position: center;
        #tech-number{
            width: 75%;
            height: 10rem;
            font-size: 1.75rem;
            font-family: var(--barlowCondensed);
            font-weight: 400;
            text-transform: uppercase;
            color: var(--white);
            letter-spacing: 6px;
            margin: 0 auto;
            display: flex;
            align-items: center;
                span{
                    font-weight: 700;
                    opacity: 0.25;
                    margin-right: 0.5rem;
                }
        }
`;