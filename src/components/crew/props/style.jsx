import styled from "styled-components";


export const CrewArticle = styled.article`
    width: 100%;
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
        h1{
            font-family: var(--bellefair);
            font-weight: 400;
            font-size: 3rem;
            text-transform: uppercase;
            color: var(--white);
            margin-bottom: 0.5rem;
        }
        h2{
            font-family: var(--bellefair);
            font-weight: 400;
            font-size: 2rem;
            text-transform: uppercase;
            color: var(--white);
            opacity: 0.25;
            margin-bottom: 0.5rem;
        }
        p{
            width: 100%;
            max-width: 28rem;
            font-family: var(--barlow);
            font-weight: 400;
            font-size: 1.125rem;
            line-height: 2rem;
            color: var(--light-grayish-blue);
        }
    
    @media screen and (max-width: 1050px){
        align-items: center;
            h1{
                font-size: 2.5rem;
            }
            h2{
                font-size: 1.5rem;
            }
            p{
                font-size: 1rem;
                text-align: center;
            }
    }
    @media screen and (max-width: 700px){
        height: 23rem;
            h1{
                font-size: 1.5rem;
            }
            h2{
                font-size: 1rem;
            }
            p{
                font-size: 0.93rem;
                text-align: center;
            }
    }
`;