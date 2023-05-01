import styled from "styled-components";

export const HomeContainer = styled.main`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
`



export const HomeSection1 = styled.section`
    display: flex;
    flex-direction: column;

    header{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        button{
            padding: 0.625rem 1.875rem;
            background: rgba(255, 255, 255, 0.11);
            color: ${(props) => props.theme.white};
            border-radius: 10px;
            border: 2px solid transparent;

            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 187.5%;
            text-transform: uppercase;

            transition: 0.2s;
            &:hover{
                background: rgba(255, 255, 255, 0.2);
            }
        }
    }

    .trendingGames{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 3.375rem;
        margin-bottom: 8rem;
    }
`
