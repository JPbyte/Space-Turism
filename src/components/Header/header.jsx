import React from "react";
import { HeaderDiv } from "./style";

//Import logo
import Logo from "../../shared/logo.svg";

function Header() {
    return(
        <HeaderDiv>
            <img src={Logo} alt="logo" />
        </HeaderDiv>
    );
}

export default Header;