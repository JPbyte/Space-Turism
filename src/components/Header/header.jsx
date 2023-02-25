import React, { useState } from "react";
import { HeaderDiv, Nav } from "./style";
import { Link } from "react-router-dom";

//Import logo and icons
import Logo from "../../shared/logo.svg";
import {VscMenu, VscChromeClose} from "react-icons/vsc"

function Header() {

    const [sidebar, setSideBar] = useState(false);

    function showSideBar() {
        setSideBar(!sidebar);
    }
    
    return(
        <HeaderDiv>
            <img id="logo" src={Logo} alt="logo" />
            <span className="bar"></span>
                <VscMenu onClick={showSideBar}
                color="white"
                size="2.5rem"
                cursor="pointer"
                />
            <Nav show={sidebar}>
                <VscChromeClose 
                color="white"
                size="2.5rem" 
                cursor="pointer"
                onClick={showSideBar}
                />
                    <div className="div-nav">
                        <Link to="/">
                            <strong className="number">00</strong>
                                Home
                        </Link>
                        <Link to="/destination">
                            <strong className="number">01</strong>
                                Destination
                        </Link>
                        <Link to="/crew">
                            <strong className="number">02</strong>
                                Crew
                        </Link>
                        <Link to="/tech">
                            <strong className="number">03</strong>
                                Technology
                        </Link>
                    </div>
            </Nav>
        </HeaderDiv>
    );
}

export default Header;