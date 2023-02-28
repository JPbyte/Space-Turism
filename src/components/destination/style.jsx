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
`;

export const PlanetMain = styled.div`
    position: relative;
    width: 72%;
    height: 28rem;
    margin: 0 auto;
`;

export const MoonDiv = styled.div`
    position: absolute;
    left: ${({show}) => (show ? "0rem" : "-120rem")};
    width: 100%;
    height: 100%;
    display: flex;
    transition: .5s;
`;
export const MarsDiv = styled.div`
    position: absolute;
    left: ${({show}) => (show ? "0" : "-120rem")};
    width: 100%;
    height: 100%;
    display: flex;
    transition: .5s;
`;

export const EuropaDiv = styled.div`
    position: absolute;
    left: ${({show}) => (show ? "0" : "-120rem")};
    width: 100%;
    height: 100%;
    display: flex;
    transition: .5s;
`;

export const TitanDiv = styled.div`
    position: absolute;
    left: ${({show}) => (show ? "0" : "-120rem")};
    width: 100%;
    height: 100%;
    display: flex;
    transition: .5s;
`;

export const ImageContent = styled.section`
    width: 50%;
        img{
            width: 27.812rem;
            height: 27.812rem;
            animation: rotate 120s;
        }
`;

export const PlanetArticle = styled.article`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 5rem;
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
`;

