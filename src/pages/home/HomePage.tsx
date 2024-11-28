import style from './HomePage.module.css'
import checkMarkSvg from '../../assets/svg/checkmark.svg'
import EmailForm from '../../components/email-form/EmailForm'
export default function HomePage() {
    return (
        <>
            <section className={style['paragraph-1-container']}>
                <div className={style['paragraph-overlay']}></div>
                <div className={style['paragraph-1']}>
                    <h1>בית חכם – העתיד בבית שלכם!</h1>
                    <h2>בית חכם, אזעקות, מצלמות אבטחה, אינטרקום, מרכזיות.</h2>
                    <ul>
                        <li> <img src={checkMarkSvg} alt="" /> <span>חברה מוסמכת עם 20 שנות ניסיון</span>  </li>
                        <li> <img src={checkMarkSvg} alt="" /> <span>מתקין בעל ניסיון וותק רב</span></li>
                        <li> <img src={checkMarkSvg} alt="" /> <span>מחירים אטרקטיבים בפריסה ארצית</span></li>
                        <li> <img src={checkMarkSvg} alt="" /> <span>ייעוץ ראשוני ללא עלות</span></li>
                        <li> <img src={checkMarkSvg} alt="" /> <span>זמינות מיידית 24/7 בכל הארץ</span></li>
                    </ul>
                </div>
            </section>

            <section >

                <EmailForm />

            </section>
        </>
    )
}