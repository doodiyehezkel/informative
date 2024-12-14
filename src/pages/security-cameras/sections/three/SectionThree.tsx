
import style from './SectionThree.module.css'

export default function SectionThree() {
    return (
        <section className={style['section-3']}>
            <h1>איך לבחור מצלמות אבטחה לבית ולעסק?</h1>
            <ol>
                <li>
                    מיקום:
                    <ul className={style['location-list']}>
                        <li>לבית: מצלמות פנים וחוץ למעקב על הכניסות והחצר</li>
                        <li>לעסק: מצלמות עם זום ויכולת מעקב רחבה</li>
                    </ul>
                </li>
                <li>
                    רזולוציה - מומלץ לבחור מצלמות HD או 4K לאיכות תמונה גבוהה.
                </li>
                <li>
                    חיבור לאינטרנט - מצלמות IP מתאימות למי שזקוק לניטור מרחוק.
                </li>
                <li>
                    תנאי תאורה - מצלמות עם IR מתאימות לצילום לילה.
                </li>
                <li>
                    עמידות - מצלמות חוץ צריכות להיות עמידות בפני מזג אוויר (תקן IP65 ומעלה).
                </li>
            </ol>
        </section>
    )
}