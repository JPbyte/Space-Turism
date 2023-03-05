import React from "react";
import Header from "../Header/header";
import {AnousheDiv, CrewDiv, CrewLeft, CrewMain, CrewRight, DouglasDiv, MarkDiv, VicDiv} from "./style";

//Props
import CrewProps from "./props/crewProps";

//Crew images
import Douglas from "./image-douglas-hurley.png";
import Mark from "./image-mark-shuttleworth.png";
import Victor from "./image-victor-glover.png";
import Anousheh from "./image-anousheh-ansari.png";

function Crew() {
    
    return(
        <CrewMain>
            <Header />
            <p id="meet">
                <span>02</span>
                meet your crew
            </p>
            {/*Mom div for crew content*/}
            <CrewDiv>
                <DouglasDiv>
                    <CrewLeft>
                        <CrewProps
                            subtitle="Commander"
                            title="Douglas Hurley"
                            description="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. 
                            He launched into space for the third time as commander of Crew Dragon Demo-2."
                        />
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </CrewLeft>
                    <CrewRight>
                        <img src={Douglas} alt="Crew-img" />
                    </CrewRight>
                </DouglasDiv>
                <MarkDiv>
                    <CrewLeft>
                        <CrewProps
                            subtitle="Mission Specialist "
                            title="Mark shuttleworth"
                            description="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. 
                            Shuttleworth became the first South African to travel to space as a space tourist."
                        />
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </CrewLeft>
                    <CrewRight>
                        <img src={Mark} alt="Crew-img" />
                    </CrewRight>
                </MarkDiv>
                <VicDiv>
                    <CrewLeft>
                        <CrewProps
                            subtitle="PILOT"
                            title="Victor Glover"
                            description="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. 
                            Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, 
                            and served as a station systems flight engineer."
                        />
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </CrewLeft>
                    <CrewRight>
                        <img src={Victor} alt="Crew-img" />
                    </CrewRight>
                </VicDiv>
                <AnousheDiv>
                    <CrewLeft>
                        <CrewProps
                            subtitle="Flight Engineer"
                            title="Anousheh Ansari"
                            description="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                            Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the
                            ISS, and the first Iranian in space. "
                        />
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </CrewLeft>
                    <CrewRight>
                        <img src={Anousheh} alt="Crew-img" />
                    </CrewRight>
                </AnousheDiv>
            </CrewDiv>
        </CrewMain>
    );
}

export default Crew;