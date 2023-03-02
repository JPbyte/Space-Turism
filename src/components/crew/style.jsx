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
`;