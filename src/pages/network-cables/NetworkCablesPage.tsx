import ListInfoCardList from '../../components/cards/list-informative-card-list/ListInfoCardList'
import style from './NetworkCablesPage.module.css'

import cat5Image from '../../assets/images/network-cables/Cat5.webp'
import cat5eImage from '../../assets/images/network-cables/Cat5e.webp'
import cat6Image from '../../assets/images/network-cables/Cat6.webp'
import cat6aImage from '../../assets/images/network-cables/cat6a.webp'
import cat7Image from '../../assets/images/network-cables/cat7.webp'

const cablesList = [
    {
        imgSrc: cat5Image,
        name: 'Cat5 (Category 5)',
        description: 'כבל Cat5 הוא מהדור הוותיק של כבלי רשת, אך עדיין נפוץ במערכות ישנות.',
        infoList: [
            'מהירות מקסימלית: עד 100Mbps.',
            'רוחב פס: 100MHz.',
            'שימושים: חיבורי אינטרנט בסיסיים.',
            'יתרונות: זול ונפוץ.',
            'חסרונות: מתאים לתקשורת מוגבלת במהירות ובמרחק.',
        ]
    },
    {
        imgSrc: cat5eImage,
        name: 'Cat5e (Category 5 Enhanced)',
        description: 'גרסה משופרת של Cat5, עם פחות רעשי תקשורת (Crosstalk).',
        infoList: [
            'מהירות מקסימלית: עד 1Gbps.',
            'רוחב פס: 100MHz.',
            'שימושים: רשתות ביתיות ומשרדים קטנים.',
            'יתרונות: זול, מתאים לרוב השימושים הביתיים.',
            'חסרונות: מוגבל בטווח ובמהירות ביחס לדורות חדשים.',
        ]
    },
    {
        imgSrc: cat6Image,
        name: 'Cat6 (Category 6)',
        description: 'כבל מתקדם יותר, מתאים לשימושים עם דרישות מהירות גבוהות.',
        infoList: [
            'מהירות מקסימלית: עד 10Gbps (עד 55 מטר).',
            'רוחב פס: 250MHz.',
            'שימושים: מערכות מצלמות אבטחה מתקדמות ורשתות מקצועיות.',
            'יתרונות: ביצועים גבוהים, פחות רעשים.',
            'חסרונות: יקר יותר, עבה ופחות גמיש.',
        ]
    },
    {
        imgSrc: cat6aImage,
        name: 'Cat6a (Category 6 Augmented)',
        description: 'שדרוג של Cat6 עם שיפורים בטווח ובמהירות.',
        infoList: [
            'מהירות מקסימלית: עד 10Gbps (עד 100 מטר).',
            'רוחב פס: 500MHz.',
            'שימושים: משרדים גדולים, חוות שרתים.',
            'יתרונות: ביצועים מרשימים בטווח ארוך.',
            'חסרונות: כבד ויקר יותר.',
        ]
    },
    {
        imgSrc: cat7Image,
        name: 'Cat7 (Category 7)',
        description: 'כבל מתקדם ביותר עם סיכוך כפול לכל זוג חוטים.',
        infoList: [
            'מהירות מקסימלית: עד 10Gbps (בטווח של 100 מטר).',
            'רוחב פס: 600MHz.',
            'שימושים: מערכות רשת מורכבות.',
            'יתרונות: פחות רעשים, מתאים לעתיד.',
            'חסרונות: יקר ומצריך ציוד תואם.',
        ]
    },
    {
        imgSrc: cat7Image,
        name: 'Cat8 (Category 8)',
        description: 'כבל הרשת המתקדם ביותר כיום, תומך במהירויות ותשתיות עתידיות.',
        infoList: [
            'מהירות מקסימלית: עד 40Gbps (בטווח של 30 מטר).',
            'רוחב פס: 2000MHz.',
            'שימושים: מרכזי נתונים ושרתים.',
            'יתרונות: מהירות מרבית, מתאים לטכנולוגיות מתקדמות.',
            'חסרונות: יקר מאוד, לא נדרש לרוב השימושים הביתיים.',
        ]
    }
]


export default function NetworkCablesPage() {
    return (
        <>
            <div className={style['background-img']}>
                <div className={style['overlay']}></div>
                <article className={style['article']}>
                    <section>
                        <h1>סוגי כבלי רשת המדריך מקיף</h1>
                        <p>
                            כבלי רשת הם חלק חיוני בכל תשתית תקשורת מודרנית. הם מאפשרים חיבור יציב ומהיר בין מכשירים, בין אם מדובר במחשבים, נתבים, או מערכות מצלמות אבטחה. במאמר זה נסקור את הסוגים הנפוצים של כבלי רשת ואת המאפיינים שלהם.
                        </p>
                    </section>



                </article>
            </div>
            <section className={style['cable-card-list']}>
                <ListInfoCardList listInformativeCardList={cablesList} />
            </section>
            <section className={style['section-3']}>
                <h1>איך לבחור את הכבל המתאים?</h1>
                <ol>
                    <li>
                        שימוש: למטרות ביתיות, Cat5e או Cat6 יתאימו לרוב.
                    </li>
                    <li>
                        תקציב: ככל שהכבל מתקדם יותר, כך מחירו גבוה יותר.
                    </li>
                    <li>
                        מרחק: לשימושים בטווח ארוך יותר, מומלץ לבחור Cat6a ומעלה.
                    </li>
                    <li>
                        תמיכה בציוד: ודא שהציוד שלך תומך בסוג הכבל.
                    </li>
                </ol>
            </section>
        </>
    )
}