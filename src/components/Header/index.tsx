import logo from "../../assets/logo.png";
import { HeaderContainer, HeaderContent } from "./styles";

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="Logo" />

                <div>
                    <nav>
                        <span>Home</span>
                        <span>About us</span>
                        <span>Portfolio</span>
                        <span>News</span>
                    </nav>

                    <button>  
                        Contact us
                    </button>
                </div>
            </HeaderContent>
        </HeaderContainer>
    )
}