import styled from "styled-components";

export const HeaderDiv = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2.5rem;
        svg{
            display: none;
        }
        #logo{
            margin-left: 4rem;
            height: 3rem;
        }
        span{
            border: 1px var(--white) solid;
            opacity: 0.25;
            width: 100%;
            max-width: 32.263rem;
            position: absolute;
            left: 11.25rem;
            z-index: 1;
        }
        #menu{
            display: none;
        }
    @media screen and (max-width: 1050px){
        padding-top: 0;
            span{
                display: none;
            }
    }
    @media screen and (max-width: 600px){
        padding: 3rem;
            #logo{
                margin-left: 0;
            }
            svg{
                display: block;
            }
    }
`;

export const Nav = styled.nav`
    width: 100%;
    max-width: 51.35rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.7742px);
        .div-nav{
            width: 31.56rem;
            height: 100%;
            display: flex;
            justify-content: space-between;
                .close{
                    display: none;
                }
        }
        a{
            height: 100%;
            font-family: var(--barlowCondensed);
            font-weight: 400;
            display: flex;
            align-items: center;
            text-transform: uppercase;
            letter-spacing: 4.7px;
            color: var(--white);
            margin-left: 2rem;
            font-size: 1rem;
                .number{
                    color: white;
                    font-weight: 600;
                    margin-right: 0.4rem;
                }
        }
        a:hover{
            border-bottom: 1px solid var(--white);
        }
        a:first-child{
            margin-left: 0;
        }
    @media screen and (max-width: 1050px){
        max-width: 40.35rem;
    }
    @media screen and (max-width: 600px){
        position: absolute;
        height: 100%;
        width: 60%;
        top: 0;
        right: ${({show}) => (show ? "0rem" : "-20rem")};
        flex-direction: column;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
            svg{
                display: block;
                position: absolute;
                top: 2rem;
                right: 2rem;
            }
            .div-nav{
                width: 70%;
                height: 40%;
                flex-direction: column;
                margin-bottom: 15rem;
                    a{
                        border-bottom: 0;
                        font-size: 1rem;
                        margin-left: 0;
                    }
                    a:hover{
                        border-right: 1px white solid;
                    }
            }
    }
`;