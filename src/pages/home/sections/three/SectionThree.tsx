import style from './SectionThree.module.css'
import checkMarkSvg from '../../../../assets/svg/checkmark.svg'
export default function SectionThree() {
    return (
        <section className={style['section-3-container']}>

            <div className={style['section-3']}>
                <h1>למה לבחור בנו?</h1>
                <ol>
                    <li>
                        <img src={checkMarkSvg} alt="checkMarkSvg" />
                        <span>ניסיון מקצועי רב בפריסת רשתות מכל הסוגים.</span>
                    </li>
                    <li>
                        <img src={checkMarkSvg} alt="checkMarkSvg" />
                        <span>שימוש בציוד המתקדם והאמין ביותר בשוק.</span>
                    </li>
                    <li>
                        <img src={checkMarkSvg} alt="checkMarkSvg" />
                        <span>שירות אדיב, מהיר ויעיל שמבטיח שהכול יעבוד כמו שצריך.</span>
                    </li>
                    <li>
                        <img src={checkMarkSvg} alt="checkMarkSvg" />
                        <span>תמיכה טכנית וזמינות מיידית, גם לאחר סיום הפרויקט.</span>
                    </li>
                </ol>
                <p>
                    צרו קשר וקבלו פתרון מנצח!
                    אם אתם מחפשים רשת אינטרנט שתעבוד בשבילכם – צרו איתנו קשר עוד היום. בין אם זה לבית, למשרד או לפרויקטים מיוחדים, אנחנו כאן כדי לחבר אתכם לעולם!
                </p>

            </div>

        </section>
    )
}