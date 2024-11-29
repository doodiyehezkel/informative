import style from './SectionTwo.module.css'
import intercomSvg from '../../../../assets/svg/intercom.svg'
import smartHomeSvg from '../../../../assets/svg/smart-home.svg'
import protectionSvg from '../../../../assets/svg/protection.svg'
import securityCamera from '../../../../assets/svg/security-camera.svg'
import CardList from '../../../../components/cards/card-list/CardList'

const cardList = [
    {
        imgSrc: intercomSvg,
        title: 'אינטרקום',
        text: 'שרותי אינטרקום לעסק ולבית.'
    },
    {
        imgSrc: smartHomeSvg,
        title: 'בית חכם',
        text: 'התקנת בית חכם.'
    }
    ,
    {
        imgSrc: protectionSvg,
        title: 'מערכות אזעקה',
        text: 'מערכות אזעקה מתקדמות.'
    }
    ,
    {
        imgSrc: securityCamera,
        title: 'מצלמות אבטחה',
        text: 'התקנת מצלמות לבית ולעסק.'
    }
]

export default function SectionOne() {
    return (
        <section className={style['section-2-container']}>
            <div className={style['section-2']}>
                <h1>עבודות התקנה שאנו מבצעים</h1>
                <h3>אנחנו בחברת IDATA מספקים שירותי התקנות מכל הסוגים כבר למעלה מ-20 שנה, עם דגש על אדיבות ומקצועיות!</h3>
            </div>
            <CardList cardList={cardList} />
        </section>
    )
}