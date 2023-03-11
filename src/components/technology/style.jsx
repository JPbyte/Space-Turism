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
    @media screen and (max-width: 1050px){
        #tech-number{
            height: 5rem;
        }
    }
    @media screen and (max-width: 1050px){
        #tech-number{
            width: 100%;
            justify-content: center;
        }
    }
`;

export const TechDiv = styled.div`
    width: 100%;
    height: 31rem;
    position: relative;
`;

export const Launch = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    display: ${({Show}) => (Show ? "flex" : "none")};
        li:first-child{
            color: var(--very-dark-blue);
            background-color: var(--white);
        }

    @media screen and (max-width: 1050px) {
        flex-direction: column-reverse;
    }
`;
export const SpacePort = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    transition: .5s;
    display: ${({Show}) => (Show ? "flex" : "none")};
        li:nth-child(2){
            color: var(--very-dark-blue);
            background-color: var(--white);
        } 
    @media screen and (max-width: 1050px) {
        flex-direction: column-reverse;
    }
`;
export const Capsule = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    transition: .5s;
    display: ${({Show}) => (Show ? "flex" : "none")};
        li:nth-child(3){
            color: var(--very-dark-blue);
            background-color: var(--white);
        } 
    @media screen and (max-width: 1050px) {
        flex-direction: column-reverse;
    }
`;

export const LaunchLeft = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
        ul{
            height: 20rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
                li{
                    width: 5rem;
                    height: 5rem;
                    background-color: transparent;
                    border-radius: 50%;
                    border: 0.5px var(--white) solid;
                    color: var(--white);
                    font-family: var(--bellefair);
                    font-weight: 400;
                    font-size: 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: .5s;
                        &:hover{
                            color: var(--very-dark-blue);
                            background-color: var(--white);
                            transform: scale(1.05);
                        }
                }
        }
    @media screen and (max-width: 1050px){
        flex-direction: column;
            ul{
                width: 28%;
                height: 4rem;
                margin: 0 auto;
                flex-direction: row;
                margin-bottom: 1.5rem;
                li{
                    width: 3.5rem;
                    height: 3.5rem;
                    font-size: 1.5rem;
                }
            }
    }
    @media screen and (max-width: 700px){
        ul{
            li{
                width: 2.5rem;
                height: 2.5rem;
                font-size: 1rem;
            }
        }
    }
`;

export const LaunchRight = styled.div`
    width: 55%;
        img{
            width: 100%;
            height: 30rem;
        }

    @media screen and (max-width: 1050px) {
        width: 98%;
        margin-bottom: 1.5rem;
            img{
                height: 21.37rem;
            }
    }
`;