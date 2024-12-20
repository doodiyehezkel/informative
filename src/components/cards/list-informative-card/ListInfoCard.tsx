import { ListInfoCardType } from '../../../types/listInfoCardType'
import style from './ListInfoCard.module.css'

export default function ListInfoCard(listInfoCard:ListInfoCardType) {
    return (
        <div className={style['card']}>
            <div className={style['image']}>
                <img src={listInfoCard.imgSrc} alt="securty-camera-image" />
            </div>
            <div className={style['info']}>
                <div className={style['title']}>
                    <h2>{listInfoCard.name}</h2>
                </div>
                <div className={style['description']}>
                    <h3>{listInfoCard.description}</h3>
                </div>
                <div className={style['info-list']}>
                    <ol>
                        {
                            listInfoCard.infoList.map(item => {
                                return (
                                    <li>{item}</li>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}