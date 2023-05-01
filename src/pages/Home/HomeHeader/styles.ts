import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 6.125rem;
    margin-bottom: 8.25rem;

    div{
        display: flex;
        flex-direction: column;
        margin-top: 7.5rem;

        strong{
            font-weight: 700;
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 155.2%;
            margin-bottom: 1.125rem;
            color: ${(props) => props.theme["orange-500"]};
        }

        h1{
            font-style: normal;
            font-weight: 700;
            font-size: 50px;
            line-height: 155.2%;
            margin-bottom: 1.625rem;
        }

        text{
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 200%;
            margin-bottom: 3.125rem;
        }

        button{
            width: 195px;
            height: 53px;
            /* padding: 1.875rem 0.875rem; */
            border-radius: 40px;
            background: ${(props) => props.theme["orange-400"]};

            transition: 0.2s;

            &:hover{
                background: ${(props) => props.theme["orange-500"]};
            }
        }
    }


    img{
        margin-top: -170px;
    }
`