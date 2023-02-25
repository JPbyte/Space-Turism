import React from "react";
import { Distance, FooterArticle, ImageContent, List, PlanetArticle } from "./style";


export default function PlanetsProps(props) {
    return(
        <>
            <ImageContent>
                <img src={props.img} alt="Planet"/>
            </ImageContent>
            <PlanetArticle>
                <List>
                    <li>Moon</li>
                    <li>Mars</li>
                    <li>Europa</li>
                    <li>Titan</li>
                </List>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <hr/>
                <FooterArticle>
                    <Distance>
                        <h2>{props.distance}</h2>
                        <span>{props.km}</span>
                    </Distance>
                    <Distance>
                        <h2>{props.time}</h2>
                        <span>{props.day}</span>
                    </Distance>
                </FooterArticle>
            </PlanetArticle>
        </>
    );
}