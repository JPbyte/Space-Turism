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
