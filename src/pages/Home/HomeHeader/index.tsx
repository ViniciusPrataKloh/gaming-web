
import joystick from "../../../assets/joystick1.png";
import { Header } from "./styles";


export function HomeHeader(){
    return(
        <Header>
            <div>
                <strong>Proved By prodesigner</strong>

                <h1>Work that we produce for our clients</h1>

                <text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                </text>

                <button>
                    Get more details
                </button>
            </div>

            <img src={joystick} alt="" />
        </Header>

    )
}