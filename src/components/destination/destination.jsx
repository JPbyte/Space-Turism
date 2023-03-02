import React, { useState } from "react";

//Components
import Header from "../Header/header";

//Style
import { DestinationDiv, EuropaDiv, ImageContent, MarsDiv, MoonDiv, PlanetMain, TitanDiv, PlanetArticle, List } from "./style";

//images planets
import MoonImg from "./image-moon.png";
import PlanetsProps from "./planets/PlanetsProps/Props";
import MarsImg from "./image-mars.png";
import EuropaImg from "./image-europa.png";
import TitanImg from "./image-titan.png";



function Destination() {

    const [active, setActive] = useState({
        showMoon: true,
        showMars: false,
        showEuropa: false,
        showTitan: false,
    });
    const handlePlanetClick = (planet) => {
        setActive({
            showMoon: planet === "Moon",
            showMars: planet === "Mars",
            showEuropa: planet === "Europa",
            showTitan: planet === "Titan",
        });
    };
    return(
        <DestinationDiv>
            <Header/>
            <p id="pick">
                <span>01</span>
                Pick your destination
            </p>
            <PlanetMain>
                <MoonDiv show={active.showMoon}>
                    <ImageContent>
                        <img src={MoonImg} alt="Moon"/>
                    </ImageContent>
                    <PlanetArticle>
                        <List>
                            <li>Moon</li>
                            <li onClick={() => handlePlanetClick("Mars")}>Mars</li>
                            <li onClick={() => handlePlanetClick("Europa")}>Europa</li>
                            <li onClick={() => handlePlanetClick("Titan")}>Titan</li>
                        </List>
                        <PlanetsProps
                            title="Moon"
                            description="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective
                            and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing 
                            sites."
                            travel="Avg. Travel"
                            distance="384,400 KM"
                            time="Est. Travel time"
                            day="3 Days"
                        />
                    </PlanetArticle>
                </MoonDiv>
                <MarsDiv show={active.showMars}>
                    <ImageContent>
                        <img src={MarsImg} alt="Mars"/>
                    </ImageContent>
                    <PlanetArticle>
                        <List>
                            <li onClick={() => handlePlanetClick("Moon")}>Moon</li>
                            <li>Mars</li>
                            <li onClick={() => handlePlanetClick("Europa")}>Europa</li>
                            <li onClick={() => handlePlanetClick("Titan")}>Titan</li>
                        </List>
                        <PlanetsProps
                            title="Mars"
                            description="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary
                            mountain in our solar system. It’s two and a half times the size of Everest!"
                            travel="Avg. Travel"
                            distance="225 mil.KM"
                            time="Est. Travel time"
                            day="9 Months"
                        />
                    </PlanetArticle>
                </MarsDiv>
                <EuropaDiv show={active.showEuropa}>
                    <ImageContent>
                        <img src={EuropaImg} alt="Europa"/>
                    </ImageContent>
                    <PlanetArticle>
                        <List>
                            <li onClick={() => handlePlanetClick("Moon")}>Moon</li>
                            <li onClick={() => handlePlanetClick("Mars")}>Mars</li>
                            <li>Europa</li>
                            <li onClick={() => handlePlanetClick("Titan")}>Titan</li>
                        </List>
                        <PlanetsProps
                            title="Europa"
                            description="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream.
                            With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in 
                            your snug wintery cabin."
                            travel="Avg. Travel"
                            distance="628 mil.KM"
                            time="Est. Travel time"
                            day="3 Years"
                        />
                    </PlanetArticle>
                </EuropaDiv>
                <TitanDiv show={active.showTitan}>
                    <ImageContent>
                        <img src={TitanImg} alt="Titan"/>
                    </ImageContent>
                    <PlanetArticle>
                        <List>
                            <li onClick={() => handlePlanetClick("Moon")}>Moon</li>
                            <li onClick={() => handlePlanetClick("Mars")}>Mars</li>
                            <li onClick={() => handlePlanetClick("Europa")}>Europa</li>
                            <li>Titan</li>
                        </List>
                        <PlanetsProps
                            title="Titan"
                            description="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home
                            (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
                            travel="Avg. Travel"
                            distance="1.6 bil.KM"
                            time="Est. Travel time"
                            day="7 Years"
                        />
                    </PlanetArticle>
                </TitanDiv>
            </PlanetMain>
        </DestinationDiv>
    );
}

export default Destination;