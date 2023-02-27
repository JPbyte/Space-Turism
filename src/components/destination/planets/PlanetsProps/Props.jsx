import React from "react";
import { Distance, FooterArticle, TitleDescription } from "./style";



export default function PlanetsProps(props) {

    return(
        <>
            <TitleDescription>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </TitleDescription>
            <hr />
            <FooterArticle>
                <Distance>
                    <h2>{props.travel}</h2>
                    <span>{props.distance}</span>
                </Distance>
                <Distance>
                    <h2>{props.time}</h2>
                    <span>{props.day}</span>
                </Distance>
            </FooterArticle>
        </>
    );
}