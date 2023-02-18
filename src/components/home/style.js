import styled from "styled-components";

//Images background
import HbgDesktop from "./background-home-desktop.jpg";
import HbgTablet from "./background-home-tablet.jpg";
import HbgMobile from "./background-home-mobile.jpg";

export const HomeDiv = styled.main`
    width: 100%;
    height: 100vh;
    background: url(${HbgDesktop});
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @media screen and (max-width: 900px) {
        background: url(${HbgTablet}) no-repeat;
        background-position: center;
        background-size: cover;
    }
    @media screen and (max-width: 500px) {
        background: url(${HbgMobile});
        background-position: center;
        background-size: cover;
    }
`;

export const HomeContent = styled.div`
    width: 80%;
    height: 31rem;
    margin: 0 auto;
    display: flex;

    @media screen and (max-width: 900px){
        height: 43rem;
        flex-direction: column;
        align-items: center;
    }
    @media screen and (max-width: 500px) {
        height: 43rem;
    }
`;

//Title, Subtitle and text
export const ContentLeft = styled.section`
    width: 50%;
        h1{
            font-family: var(--bellefair);
            color: var(--white);
            font-size: 9.375rem;
            font-weight: 400;
            text-transform: uppercase;
        }
        h2{
            font-family: var(--barlowCondensed);
            color: var(--light-grayish-blue);
            font-size: 1.75rem;
            font-weight: 400;
            letter-spacing: 4px;
            text-transform: uppercase;
        }
        p{
            width: 100%;
            max-width: 28rem;
            font-family: var(--barlow);
            color: var(--light-grayish-blue);
            font-size: 1.125rem;
            font-weight: 400;
            line-height: 2rem;
        }
    @media screen and (max-width: 900px){
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
            h1{
                font-size: 9.375rem;
            }
            h2{
                font-size: 1.25rem;
            }
            p{
                font-size: 1rem;
                max-width: 27rem;
                text-align: center;
            }
    }
    @media screen and (max-width: 500px){
            h1{
                font-size: 5.5rem;
                margin-bottom: 1rem;
            }
            h2{
                font-size: 1rem;
                margin-bottom: 2rem;
            }
            p{
                font-size: 0.934rem;
            }
    }
`;

//Button "Explore"
export const ContentRight = styled.section`
    width: 50%;
    height: 24rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
        a{
            width: 17.125rem;
            height: 17.125rem;
            border: none;
            border-radius: 50%;
            position: relative;
            font-family: var(--bellefair);
            font-weight: 400;
            color: var(--very-dark-blue);
            font-size: 2rem;
            text-transform: uppercase;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--white);
                &:hover::before{
                    transform: scale(1.7);
                }
        }
        a::before{
            content: '';
            position: absolute;
            width: 17.125rem;
            height: 17.125rem;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.2);
            top: 0;
            left: 0;
            transition: all 0.4s;
        }

    @media screen and (max-width: 900px){
        width: 100%;
        justify-content: center;
            a{
                width: 15.125rem;
                height: 15.125rem;
                    &:hover::before{
                        transform: scale(1.5);
                    }
            }
            a::before{
                width: 15.125rem;
                height: 15.125rem;
            }
    }
    @media screen and (max-width: 500px){
        a{
            width: 10.375rem;
            height: 10.375rem;
            font-size: 1.25rem;
                &:hover::before{
                    transform: scale(1.5);
                }
        }
        a::before{
            width: 10.375rem;
            height: 10.375rem;
        }
    }
`;