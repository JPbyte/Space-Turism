import React from "react";

//Components
import Header from "../Header/header";
import PlanetsProps from "./planets/PlanetsProps/Props";

//Style
import { DestinationDiv, EuropaDiv, MarsDiv, MoonDiv, PlanetMain, TitanDiv } from "./style";

//images planets
import MoonImg from "./image-moon.png";
import MarsImg from "./image-mars.png";
import EuropaImg from "./image-europa.png";
import TitanImg from "./image-titan.png";

function Destination() {
    
    return(
        <DestinationDiv>
            <Header/>
            <p id="pick">
                <span>01</span>
                Pick your destination
            </p>
            <PlanetMain>
                <MoonDiv>
                    <PlanetsProps 
                        img={MoonImg}
                        title="Moon"
                        description="See our planet as you’ve never seen it before. A perfect relaxing trip away
                        to help regain perspective and come back refreshed. While you’re there, take in some 
                        history by visiting the Luna 2 and Apollo 11 landing sites."
                        distance="Avg. Distance"
                        time="Est. travel"
                        km="384,400km"
                        day="3 days"
                    />
                </MoonDiv>
                <MarsDiv>
                    <PlanetsProps 
                        img={MarsImg}
                        title="Mars"
                        description="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,
                        the tallest planetary mountain in our solar system. It’s two and a half times the size of 
                        Everest!"
                        distance="Avg. Distance"
                        time="Est. travel"
                        km="225 mil.km"
                        day="9 months"
                    />
                </MarsDiv>
                <EuropaDiv>
                    <PlanetsProps 
                        img={EuropaImg}
                        title="Europa"
                        description="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s
                        dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple
                        relaxation in your snug wintery cabin"
                        distance="Avg. Distance"
                        time="Est. travel"
                        km="628 mil.km"
                        day="3 years"
                    />
                </EuropaDiv>
                <TitanDiv>
                    <PlanetsProps 
                        img={TitanImg}
                        title="Titan"
                        description="The only moon known to have a dense atmosphere other than Earth, Titan is a home away 
                        from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of 
                        Saturn."
                        distance="Avg. Distance"
                        time="Est. travel"
                        km="1.6 bil.km"
                        day="7 years"
                    />
                </TitanDiv>
            </PlanetMain>
            
        </DestinationDiv>
    );
}

export default Destination;