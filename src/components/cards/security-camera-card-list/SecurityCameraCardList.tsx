import { SecurityCameraCardType } from "../../../types/securityCameraCard";
import SecurityCameraCard from "../security-camera-card/SecurityCameraCard";
import style from './SecurityCameraCardList.module.css'
export default function SecurityCameraCardList({ securityCameraCardList }: { securityCameraCardList: SecurityCameraCardType[] }) {
    return (
        <div className={style['security-camera-list']}>
            {securityCameraCardList.map(item => {
                return (
                    <SecurityCameraCard imgSrc={item.imgSrc} name={item.name} description={item.description} infoList={item.infoList} />
                )
            })}
        </div>
    )
}