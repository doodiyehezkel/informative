import { SecurityCameraCardType } from '../../../types/securityCameraCard'
import style from './SecurityCameraCard.module.css'

export default function SecurityCameraCard(securityCameraCardType:SecurityCameraCardType) {
    return (
        <div className={style['card']}>
            <div className={style['image']}>
                <img src={securityCameraCardType.imgSrc} alt="securty-camera-image" />
            </div>
            <div className={style['info']}>
                <div className={style['title']}>
                    <h2>{securityCameraCardType.name}</h2>
                </div>
                <div className={style['description']}>
                    <h3>{securityCameraCardType.description}</h3>
                </div>
                <div className={style['info-list']}>
                    <ol>
                        {
                            securityCameraCardType.infoList.map(item => {
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