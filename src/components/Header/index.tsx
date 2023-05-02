import logo from "../../assets/logo.png";
import { HeaderContainer, HeaderContent, StyledLink } from "./styles";

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="Logo" />

                <div>
                    <nav>
                        <StyledLink to={"/home"}>
                            Home
                        </StyledLink>
                        <StyledLink to={"/aboutUs"}>
                            About us
                        </StyledLink>
                        <StyledLink to={"/portfolio"}>
                            Portfolio
                        </StyledLink>
                        <StyledLink to={"/news"}>
                            News
                        </StyledLink>
                    </nav>

                    <button>  
                        Contact us
                    </button>
                </div>
            </HeaderContent>
        </HeaderContainer>
    )
}