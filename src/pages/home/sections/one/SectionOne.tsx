import checkMarkSvg from '../../../../assets/svg/checkmark.svg'
import style from './SectionOne.module.css'
export default function SectionOne() {
    return (
        <section className={style['section-1-container']}>
            <div className={style['section-overlay']}></div>
            <div className={style['section-1']}>
                <h1>בית חכם – העתיד בבית שלכם!</h1>
                <h2>בית חכם, אזעקות, מצלמות אבטחה, אינטרקום, מרכזיות.</h2>
                <ul>
                    <li> <img src={checkMarkSvg} alt="checkMarkSvg" /> <span>חברה מוסמכת עם 20 שנות ניסיון</span>  </li>
                    <li> <img src={checkMarkSvg} alt="checkMarkSvg" /> <span>מתקין בעל ניסיון וותק רב</span></li>
                    <li> <img src={checkMarkSvg} alt="checkMarkSvg" /> <span>מחירים אטרקטיבים בפריסה ארצית</span></li>
                    <li> <img src={checkMarkSvg} alt="checkMarkSvg" /> <span>ייעוץ ראשוני ללא עלות</span></li>
                    <li> <img src={checkMarkSvg} alt="checkMarkSvg" /> <span>זמינות מיידית 24/7 בכל הארץ</span></li>
                </ul>
            </div>
        </section>
    )
}