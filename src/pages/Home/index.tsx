import {  HomeContainer, HomeSection1 } from "./styles";

import rectangle23  from "../../assets/Rectangle23.png";
import rectangle24  from "../../assets/Rectangle24.png";
import rectangle25  from "../../assets/Rectangle25.png";
import rectangle26  from "../../assets/Rectangle26.png";
import { HomeHeader } from "./HomeHeader";
import { TrendingGameCard } from "./TrendingGameCard";

export function Home(){
    return(
        <HomeContainer>
            <HomeHeader />


            <HomeSection1>
                <header>
                    <h2>Currently Trending Games</h2>
                    <button>SEE ALL</button>
                </header>

                <div className="trendingGames">
                    <TrendingGameCard image={rectangle23}/>
                    <TrendingGameCard image={rectangle24}/>
                    <TrendingGameCard image={rectangle25}/>
                    <TrendingGameCard image={rectangle26}/>
                </div>
            </HomeSection1>

        </HomeContainer>
    )
}