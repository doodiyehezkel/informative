import { CardType } from "../../../types/card";
import Card from "../card/Card";
import style from './CardList.module.css'
import { v4 as uuidv4 } from "uuid";

export default function CardList ({cardList} : {cardList: CardType[]}) {
    return (
        <div className={style['card-list']}>
            {
                cardList.map(item => {
                    return <Card key={uuidv4()} card={item} />
                })
            }
        </div>
    )
}