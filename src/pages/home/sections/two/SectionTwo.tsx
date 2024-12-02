import style from './SectionTwo.module.css'
import intercomSvg from '../../../../assets/svg/intercom.svg'
import protectionSvg from '../../../../assets/svg/protection.svg'
import securityCamera from '../../../../assets/svg/security-camera.svg'
import CardList from '../../../../components/cards/card-list/CardList'
import checkMarkSvg from '../../../../assets/svg/checkmark.svg'

const cardList = [
    {
        imgSrc: intercomSvg,
        title: 'אינטרקום',
        text: 'שרותי אינטרקום לעסק ולבית.'
    },
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
                <h1>עבודות התקנה שאנו מבצעים:</h1>
                <ol>
                    <li>
                        <img src={checkMarkSvg} alt="checkMarkSvg" />
                        <span>התקנת רשת ביתית למשרד ולבית הכוללת השחלות של כבלי רשת וחיווט שקעי גביס או ניסקו</span>
                    </li>
                    <li>
                        <img src={checkMarkSvg} alt="checkMarkSvg" />
                        <span>סידור ארונות תקשורת וחיווט מחדש כולל סימון שמות החדרים על הכבלים</span>
                    </li>
                    <li>
                        <img src={checkMarkSvg} alt="checkMarkSvg" />
                        <span>השחלת סיבים אופטיים לטובת חיבור לספקי שירות כגון (בזק, פרטנר, סלקום)</span>
                    </li>
                    <li>
                        <img src={checkMarkSvg} alt="checkMarkSvg" />
                        <span>התקנת קוי בזק וטיפול בתקלות קו בבית לקוח</span>
                    </li>
                    <li>
                        <img src={checkMarkSvg} alt="checkMarkSvg" />
                        <span>התקנת נתבים מגדילי טווח אקסס פוינטים ומשים</span>
                    </li>
                    <li>
                        <img src={checkMarkSvg} alt="checkMarkSvg" />
                        <span>התקנת מצלמות לבית או לעסק באיכות מעולה עם אפשרות לחוטי או אלחוטי</span>
                    </li>
                </ol>
            </div>
            <div className={style['card-list']}>
                <CardList cardList={cardList} />
            </div>
        </section>
    )
}