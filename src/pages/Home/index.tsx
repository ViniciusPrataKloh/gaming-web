import {  HomeContainer, HomeSection1 } from "./styles";

import rectangle23  from "../../assets/Rectangle23.png";
import rectangle24  from "../../assets/Rectangle24.png";
import rectangle25  from "../../assets/Rectangle25.png";
import rectangle26  from "../../assets/Rectangle26.png";
import { HomeHeader } from "./HomeHeader";

export function Home(){
    return(
        <HomeContainer>
            <HomeHeader />


            <HomeSection1>
                <header>
                    <h2>Currently Trending Games</h2>
                    <button>SEE ALL</button>
                </header>

                <div>
                    <div>
                        <img src={rectangle23} alt="" />
                        <span>40 Followers</span>
                    </div>
                    <div>
                        <img src={rectangle24} alt="" />
                        <span>40 Followers</span>
                    </div>
                    <div>
                        <img src={rectangle25} alt="" />
                        <span>40 Followers</span>
                    </div>
                    <div>
                        <img src={rectangle26} alt="" />
                        <span>40 Followers</span>
                    </div>
                </div>
            </HomeSection1>

        </HomeContainer>
    )
}