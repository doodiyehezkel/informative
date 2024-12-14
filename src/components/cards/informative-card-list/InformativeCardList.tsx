import { CardType } from "../../../types/card";
import InformativeCard from "../informative-card/InformativeCard";
import style from './InformativeCardList.module.css'
import { v4 as uuidv4 } from "uuid";

export default function InformativeCardList ({cardList} : {cardList: CardType[]}) {
    return (
        <div className={style['card-list']}>
            {
                cardList.map(item => {
                    return <InformativeCard key={uuidv4()} card={item} />
                })
            }
        </div>
    )
}