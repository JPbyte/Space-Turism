import styled from "styled-components";


export const ImageContent = styled.section`
    width: 50%;
        img{
            width: 27.812rem;
            height: 27.812rem;
            animation: rotate 120s;
        }
`;

export const List = styled.ul`
    width: 100%;
    max-width: 22rem;
    display: flex;
    justify-content: space-between;
        li{
            font-family: var(--barlowCondensed);
            font-weight: 400;
            font-size: 1.5rem;
            color: var(--light-grayish-blue);
            text-transform: uppercase;
            letter-spacing: 4px;
            cursor: pointer;
            position: relative;
        }
        li:hover{
            color: var(--white);
        }
        li::after{
            content: "";
            width: 0%;
            height: 2px;
            background-color: var(--white);
            position: absolute;
            left: 0;
            bottom: -0.3rem;
            transition: all 0.2s ease-in-out;
        }
        li:hover::after{
            width: 100%;
        }
`;

export const PlanetArticle = styled.article`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 5rem;
        h1{
            font-family: var(--bellefair);
            font-weight: 400;
            color: var(--white);
            text-transform: uppercase;
            font-size: 7.25rem;
        }
        p{
            font-family: var(--barlow);
            font-weight: 400;
            color: var(--light-grayish-blue);
            font-size: 1.12rem;
            line-height: 2rem;
        }
`;

export const FooterArticle = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Distance = styled.div`
    width: 100%;
    height: 3.81rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
        h2{
            font-family: var(--barlowCondensed);
            font-weight: 400;
            color: var(--light-grayish-blue);
            text-transform: uppercase;
            font-size: 1.12rem;
            letter-spacing: 2.36px;
        }
        span{
            font-family: var(--bellefair);
            font-weight: 400;
            color: var(--white);
            text-transform: uppercase;
            font-size: 1.75rem;
            letter-spacing: 2px;
        }
`;
