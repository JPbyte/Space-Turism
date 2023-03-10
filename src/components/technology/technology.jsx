import React, { useState } from "react";
import Header from "../Header/header";

//Styles
import { Capsule, Launch, LaunchLeft, LaunchRight, SpacePort, Tech,TechDiv} from "./style";
import TechProps from "./techprops/techProps";

//Images
import LaunchImg from "./image-launch-vehicle-landscape.jpg";
import SpacePortImg from "./image-spaceport-landscape.jpg";
import SpaceCapsuleImg from "./image-space-capsule-landscape.jpg";

function Technology() {

    const [showTech, setShowTech] = useState({
        ShowLaunch: true,
        ShowSpacePort: false,
        ShowSpaceCapsule: false,
    });

    const HandleTech = (tech) => {
        setShowTech({
            ShowLaunch: tech === "ShowLaunch",
            ShowSpacePort: tech === "ShowSpacePort",
            ShowSpaceCapsule: tech === "ShowSpaceCapsule",
        });
    }
    
    return(
        <Tech>
            <Header />
            <p id="tech-number">
                <span>03</span>
                SPACE LAUNCH 101
            </p>
            <TechDiv>
                <Launch Show={showTech.ShowLaunch}>
                    <LaunchLeft>
                        <ul>
                            <li>1</li>
                            <li onClick={() => HandleTech("ShowSpacePort")}>2</li>
                            <li onClick={() => HandleTech("ShowSpaceCapsule")}>3</li>
                        </ul>
                        <TechProps
                            subtitle="The Terminology…"
                            title="LAUNCH VEHICLE"
                            description="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space,
                            usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite
                            an awe-inspiring sight on the launch pad!"
                        />
                    </LaunchLeft>
                    <LaunchRight>
                        <img src={LaunchImg} alt="launch" />
                    </LaunchRight>
                </Launch>
                <SpacePort Show={showTech.ShowSpacePort}>
                    <LaunchLeft>
                        <ul>
                            <li onClick={() => HandleTech("ShowLaunch")}>1</li>
                            <li>2</li>
                            <li onClick={() => HandleTech("ShowSpaceCapsule")}>3</li>
                        </ul>
                        <TechProps
                            subtitle="The Terminology…"
                            title="Space Port"
                            description="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships
                            or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the
                            Earth’s rotation for launch."
                        />
                    </LaunchLeft>
                    <LaunchRight>
                        <img src={SpacePortImg} alt="Space Port" />
                    </LaunchRight>
                </SpacePort>
                <Capsule Show={showTech.ShowSpaceCapsule}>
                    <LaunchLeft>
                        <ul>
                            <li onClick={() => HandleTech("ShowLaunch")}>1</li>
                            <li onClick={() => HandleTech("ShowSpacePort")}>2</li>
                            <li>3</li>
                        </ul>
                        <TechProps
                            subtitle="The Terminology…"
                            title="Space Capsule"
                            description="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's 
                            atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, 
                            cinema, and plenty of other activities to keep you entertained."
                        />
                    </LaunchLeft>
                    <LaunchRight>
                        <img src={SpaceCapsuleImg} alt="Space Capsule" />
                    </LaunchRight>
                </Capsule>
            </TechDiv>
        </Tech>
    );
}

export default Technology;