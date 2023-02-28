import styled from "styled-components";


export const TitleDescription = styled.div`
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

    @media screen and (max-width: 1000px){
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
            h1{
                font-size: 5rem;
            }
            p{
                font-size: 1rem;
            }
    }

    @media screen and (max-width: 700px){
        h1{
            font-size: 3.5rem;
        }
        p{
            font-size: .934rem;
        }
    }
`;

export const FooterArticle = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1000px){
        width: 100%;
        justify-content: space-evenly;
    }

    @media screen and (max-width: 700px){
        height: 9rem;
        flex-direction: column;
        align-items: center;
    }
    
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

    @media screen and (max-width: 1000px){
        max-width: 11rem;
            h2{
                font-size: .875rem;
            }
            span{
                font-size: 1.75rem;
            }
    }
    @media screen and (max-width: 700px){
        width: 100%;
        align-items: center;
    }
`;
