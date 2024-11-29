import { CardType } from '../../../types/card'
import style from './Card.module.css'

export default function Card ({card} : {card: CardType}) {
    return (
        <div className={style['card']}>
            <div className={style['icon-container']}>
                <img className={style['icon']} src={card.imgSrc} alt="" />
            </div>
            <div className={style['info-container']}>
                <h1 className={style['title']}>{card.title}</h1>
                <p className={style['text']}>{card.text}</p>
            </div>
            <div className={style['button-container']}>
                <button className={style['button']}>למידע נוסף</button>
            </div>
        </div>
    )
}