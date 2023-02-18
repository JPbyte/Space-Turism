import React from "react";
import { Link } from "react-router-dom";
import HeaderDiv from "../Header/header";
import { ContentLeft, ContentRight, HomeContent, HomeDiv } from "./style";

function Home() {
    return(
        <HomeDiv>
            <HeaderDiv />
                <HomeContent>
                    <ContentLeft>
                        <h2>So, you want to travel to</h2>
                            <h1>Space</h1>
                                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer
                                space and not hover kind of on the edge of it. Well sit back, and relax because we’ll
                                give you a truly out of this world experience!</p>
                    </ContentLeft>
                    <ContentRight>
                        <Link to="/destination">Explore</Link>
                    </ContentRight>
                </HomeContent>
        </HomeDiv>
    );
}

export default Home;