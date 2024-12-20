import { ListInfoCardType } from "../../../types/listInfoCardType";
import ListInfoCard from "../list-informative-card/ListInfoCard";
import style from './ListInfoCardList.module.css'
export default function ListInfoCardList({ listInformativeCardList }: { listInformativeCardList: ListInfoCardType[] }) {
    return (
        <div className={style['security-camera-list']}>
            {listInformativeCardList.map(item => {
                return (
                    <ListInfoCard imgSrc={item.imgSrc} name={item.name} description={item.description} infoList={item.infoList} />
                )
            })}
        </div>
    )
}