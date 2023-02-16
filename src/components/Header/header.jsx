import React from "react";
import { HeaderDiv, Nav } from "./style";
import { Link } from "react-router-dom";

//Import logo and icons
import Logo from "../../shared/logo.svg";

function Header() {

    return(
        <HeaderDiv>
            <img src={Logo} alt="logo" />
            <span className="bar"></span>
            <Nav>
                <div className="div-nav">
                    <Link to="/">Home</Link>
                    <Link to="/destination">Destination</Link>
                    <Link to="/crew" >Crew</Link>
                    <Link to="/tech">Technology</Link>
                </div>
            </Nav>
        </HeaderDiv>
    );
}

export default Header;