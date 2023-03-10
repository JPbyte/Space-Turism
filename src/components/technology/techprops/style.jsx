import styled from "styled-components";


export const PropsContent = styled.div`
    width: 100%;
    max-width: 31rem;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
        h1{
            font-family: var(--bellefair);
            font-size: 3.5rem;
            font-weight: 400;
            text-transform: uppercase;
            color: var(--white);
        }
        h2{
            font-family: var(--barlowCondensed);
            font-size: 1rem;
            font-weight: 400;
            letter-spacing: 2.7px;
            text-transform: uppercase;
            color: var(--light-grayish-blue);
        }
        p{
            font-family: var(--barlow);
            font-size: 1.25rem;
            font-weight: 400;
            color: var(--light-grayish-blue);
            line-height: 2rem;
        }
`;