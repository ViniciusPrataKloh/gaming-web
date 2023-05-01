import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
        border: 0;

		:focus {
			outline: 0;
			box-shadow: 0 0 0 2px ${props => props.theme['orange-500']};
		}

		body {
			background-color: ${props => props.theme["background"]};
			color: ${props => props.theme["white"]};
			--webkit-font-smoothing: antialiased;
		}

		body, input, textarea, button {
			font: 400 1rem Poppins, sans-serif;
            text-decoration: none;
			color: ${(props) => props.theme.white};
		}
	}

`;