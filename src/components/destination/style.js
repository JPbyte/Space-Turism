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
    width: 100%;
    height: 100%;
    display: flex;
`;
export const MarsDiv = styled.div`
    position: absolute;
    left: ${({show}) => (show ? "0" : "-120rem")};
    width: 100%;
    height: 100%;
    display: flex;
`;

export const EuropaDiv = styled.div`
    position: absolute;
    left: ${({show}) => (show ? "0" : "-120rem")};
    width: 100%;
    height: 100%;
    display: flex;
`;

export const TitanDiv = styled.div`
    position: absolute;
    left: ${({show}) => (show ? "0" : "-120rem")};
    width: 100%;
    height: 100%;
    display: flex;
`;

