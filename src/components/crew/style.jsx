import styled from "styled-components";

//background and images
import BgCrew from "./background-crew-desktop.jpg";


export const CrewMain = styled.main`
    width: 100%;
    min-height: 100vh;
    background: url(${BgCrew});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
        #meet{
            width: 75%;
            height: 8rem;
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

export const CrewDiv = styled.div`
    width: 75%;
    height: 42.2rem;
    margin: 0 auto;
    position: relative;
`;

export const CrewLeft = styled.div`
    width: 50%;
    height: 100%;
    max-height: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
        ul{
            width: 100%;
            max-width: 10rem;
            display: flex;
            justify-content: space-between;
                li{
                    width: 0.93rem;
                    height: 0.93rem;
                    border-radius: 50%;
                    background-color: var(--white);
                    opacity: 0.25;
                    cursor: pointer;
                    transition: all .4s;
                        &:hover{
                            transform: scale(1.05);
                            opacity: 1;
                        }
                }
        }
`;

export const CrewRight = styled.picture`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const DouglasDiv = styled.section`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    top: ${({open}) => (open ? "0rem" : "-120rem")};
    transition: all .5s ease-in-out;
        li:nth-child(1){
            background-color: var(--white);
            opacity: 1;
        }
`;
export const MarkDiv = styled.section`
    width: 100%;
    height: 100%;
    position: absolute;
    top: ${({open}) => (open ? "0rem" : "-120rem")};
    display: flex;
    transition: all .5s ease-in-out;
        li:nth-child(2){
            background-color: var(--white);
            opacity: 1;
        }
`;

export const VicDiv = styled.section`
    width: 100%;
    height: 100%;
    position: absolute;
    top: ${({open}) => (open ? "0rem" : "-120rem")};
    display: flex;
    transition: all .5s ease-in-out;
        li:nth-child(3){
            background-color: var(--white);
            opacity: 1;
        }
`;

export const AnousheDiv = styled.section`
    width: 100%;
    height: 100%;
    position: absolute;
    top: ${({open}) => (open ? "0rem" : "-120rem")};
    display: flex;
    transition: all .5s ease-in-out;
        li:nth-child(4){
            background-color: var(--white);
            opacity: 1;
        }
`;






