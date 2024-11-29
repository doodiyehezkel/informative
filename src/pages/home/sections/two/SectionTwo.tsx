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
                <p>מומחים במצלמות אבטחה ומערכות מיגון מתקדמות. פתרונות חכמים לבית ולעסק עם דגש על אמינות, מקצועיות ושירות אישי לכל לקוח.</p>
                <p>מתמחים בהשחלת כבלי רשת והתקנת תשתיות תקשורת מתקדמות. שירות מקצועי, מדויק ומהיר לכל סוגי הפרויקטים – לעסקים ולבתים פרטיים.</p>
                <p>מומחים בהשחלת כבלי סיב אופטי ותשתיות מתקדמות לתקשורת מהירה ויציבה. פתרונות מקצועיים לעסקים ובתים פרטיים עם דגש על איכות וביצוע ללא פשרות</p>
            </div>
            <div className={style['card-list']}>
                <CardList cardList={cardList} />
            </div>
        </section>
    )
}