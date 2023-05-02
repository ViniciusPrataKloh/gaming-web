import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding: 1.25rem 0;
    /* background: #a1a1a2; */
`

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    /* padding: 0 1.5rem; */

    div{
        display: flex;
        align-items: center;
        justify-content: center;

        line-height: 24px;

        nav{
            display: flex;
            gap: 5.5rem;
            margin-right: 2.5rem;

            a{
                color: ${(props) => props.theme["white"]};
                text-decoration: none;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;

                border: 3px solid transparent;

                &:hover{
                    cursor: pointer;
                    border-bottom: 3px solid ${(props) => props.theme["orange-500"]};
                }
            }
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

export const StyledLink = styled(Link)`
`;