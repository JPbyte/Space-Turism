import React from "react";
import { PropsContent } from "./style";


function TechProps(props){
    return(
        <>
            <PropsContent>
                <h2>{props.subtitle}</h2>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </PropsContent>
        </>
    );
}

export default TechProps;