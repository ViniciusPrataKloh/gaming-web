import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        margin-top: 1.5rem;

        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 187.5%;
    }

    img{
        border: 2px solid transparent;
        border-radius: 22px;
        transition: 0.2s;

        &:hover{
            border: 2px solid ${(props) => props.theme["orange-400"]};
            border-radius: 22px;
            opacity: 0.8;
        }
    }


`;