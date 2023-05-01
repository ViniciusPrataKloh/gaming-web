import { Fire } from "phosphor-react";
import { ReactNode } from "react";
import { Card } from "./styles";

interface TrendingGameCardProps{
    image: ReactNode
}

export function TrendingGameCard({image}: TrendingGameCardProps){
    return(
        <Card>
            <img src={image?.toString()} alt="" />
            <div>
                <Fire size={24}/>
                <span>40 Followers</span>
            </div>
        </Card>
    )
}