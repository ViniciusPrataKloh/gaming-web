import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    max-width: 1820px;
    margin-top: 1.25rem;
    margin-left: 3.5rem;
    margin-right: 3.5rem;
`

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
        align-items: center;
        justify-content: center;

        line-height: 24px;

        nav{
            display: flex;
            gap: 5.5rem;
            margin-right: 2.5rem;
        }

        button{
            padding: 0.75rem 1.75rem;
            background: ${(props) => props.theme["orange-400"]};
            border-radius: 6px;

            transition: 0.2s;

            &:hover{
                background: ${(props) => props.theme["orange-500"]};
            }
        }
    }
`