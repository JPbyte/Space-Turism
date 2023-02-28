import styled from "styled-components";

//Background images
import DbgDesktop from "./background-destination-desktop.jpg";

export const DestinationDiv = styled.main`
    width: 100%;
    height: 100vh;
    background: url(${DbgDesktop}) no-repeat;
    background-position: center;
    background-size: cover;
        #pick{
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

    @media screen and (max-width: 1000px){
        #pick{
            font-size: 1.25rem;
            height: 7rem;
        }
    }

    @media screen and (max-width: 700px){
        #pick{
            width: 90%;
            height: 3rem;
            font-size: 1rem;
            justify-content: center;
        }
    }
`;

export const PlanetMain = styled.div`
    position: relative;
    width: 72%;
    height: 28rem;
    margin: 0 auto;

    @media screen and (max-width: 1100px){
        width: 90%;
    }

    @media screen and (max-width: 1000px){
        height: 40rem;
    }

    @media screen and (max-width: 700px){
        height: 41rem;
    }
`;

export const MoonDiv = styled.div`
    position: absolute;
    opacity: ${({show}) => (show ? "1" : "0")};
    left: ${({show}) => (show ? "0rem" : "-120rem")};
    width: 100%;
    height: 100%;
    display: flex;
    transition: .5s;

    @media screen and (max-width: 1100px){
        justify-content: space-between;
    }

    @media screen and (max-width: 1000px){
        flex-direction: column;
    }

    @media screen and (max-width: 700px){
        justify-content: space-between;
    }
`;
export const MarsDiv = styled.div`
    position: absolute;
    opacity: ${({show}) => (show ? "1" : "0")};
    left: ${({show}) => (show ? "0" : "-120rem")};
    width: 100%;
    height: 100%;
    display: flex;
    transition: .5s;

    @media screen and (max-width: 1000px){
        flex-direction: column;
    }

    @media screen and (max-width: 700px){
        justify-content: space-between;
    }
`;

export const EuropaDiv = styled.div`
    position: absolute;
    left: ${({show}) => (show ? "0" : "-120rem")};
    opacity: ${({show}) => (show ? "1" : "0")};
    width: 100%;
    height: 100%;
    display: flex;
    transition: .5s;

    @media screen and (max-width: 1000px){
        flex-direction: column;
    }

    @media screen and (max-width: 700px){
        justify-content: space-between;
    }
`;

export const TitanDiv = styled.div`
    position: absolute;
    left: ${({show}) => (show ? "0" : "-120rem")};
    opacity: ${({show}) => (show ? "1" : "0")};
    width: 100%;
    height: 100%;
    display: flex;
    transition: .5s;

    @media screen and (max-width: 1000px){
        flex-direction: column;
    }

    @media screen and (max-width: 700px){
        justify-content: space-between;
    }
`;

export const ImageContent = styled.section`
    width: 50%;
        img{
            width: 27.812rem;
            height: 27.812rem;
            animation: rotate 120s infinite;
        }

    @media screen and (max-width: 1000px){
        width: 100%;
        display: flex;
        justify-content: center;
            img{
                width: 18.5rem;
                height: 18.5rem;
            }
    }

    @media screen and (max-width: 700px){
            img{
                width: 10.62rem;
                height: 10.62rem;
            }
    }
`;

export const PlanetArticle = styled.article`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 5rem;

    @media screen and (max-width: 1000px){
        width: 100%;
        height: 23rem;
        margin-left: 0;
        align-items: center;
        justify-content: space-evenly;
            hr{
                width: 100%;
                opacity: 0.4;
            }
    }

    @media screen and (max-width: 700px){
        height: 35rem;
    }
`;

export const List = styled.ul`
    width: 100%;
    max-width: 22rem;
    display: flex;
    justify-content: space-between;
        li{
            font-family: var(--barlowCondensed);
            font-weight: 400;
            font-size: 1.5rem;
            color: var(--light-grayish-blue);
            text-transform: uppercase;
            letter-spacing: 4px;
            cursor: pointer;
            position: relative;
        }
        li:hover{
            color: var(--white);
        }
        li::after{
            content: "";
            width: 0%;
            height: 2px;
            background-color: var(--white);
            position: absolute;
            left: 0;
            bottom: -0.3rem;
            transition: all 0.2s ease-in-out;
        }
        li:hover::after{
            width: 100%;
        }

    @media screen and (max-width: 1000px){
        li{
            font-size: 1rem;
        }
    }

    @media screen and (max-width: 700px){
        justify-content: space-evenly;
            li{
                font-size: .875rem;
            }
    }
`;

