import React from "react";
import { CrewArticle } from "./style";


function CrewProps(props) {
    return(
        <CrewArticle>
            <h2>{props.subtitle}</h2>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </CrewArticle>
    );
}


export default CrewProps;