import ListInfoCardList from "../../components/cards/list-informative-card-list/ListInfoCardList";
import equipmentImage from '../../assets/images/equipment/equipment.jpeg'
import routerImage from '../../assets/images/equipment/router-image.webp'
import modemImage from '../../assets/images/equipment/modem.webp'
import accessPointImage from '../../assets/images/equipment/access-point.webp'
import switcherImage from '../../assets/images/equipment/switcher.webp'
import powerlineAdaptersImage from '../../assets/images/equipment/powerline-adapters.webp'
import networkCardsImage from '../../assets/images/equipment/network-cards.webp'
import style from './EquipmentPage.module.css'


const cablesList = [
    {
        imgSrc: routerImage,
        name: 'נתב (Router)',
        description: 'הנתב הוא הלב של הרשת הביתית שלך.',
        infoList: [
            'תפקיד: מפיץ את חיבור האינטרנט לכלל המכשירים בבית.',
            'נתבים בסיסיים: מתאימים לשימושים ביתיים פשוטים.',
            'נתבי Wi-Fi 6: מספקים מהירות גבוהה ותמיכה במכשירים רבים.',
            'מהירות חיבור הנתב (Mbps או Gbps)',
            'תמיכה בטכנולוגיות חדשות כמו Wi-Fi 6.',
            'מספר חיבורים קוויים (LAN).'
        ]
    },
    {
        imgSrc: modemImage,
        name: 'מודם (Modem)',
        description: 'המודם מחבר את הבית שלך לספק האינטרנט.',
        infoList: [
            'תפקיד: ממיר את אותות האינטרנט המגיעים מספק השירות לפורמט שהנתב יכול לעבוד איתו.',
            'מודם DSL: מתאים לחיבורי טלפון.',
            'מודם כבלים: לחיבורים מבוססי כבל (Cable).',
            'מודם סיבים אופטיים: למערכות תקשורת מתקדמות ומהירות.',
            'שיקולים בבחירה:תאימות לספק האינטרנט שלך ,מהירות התמיכה (כבלים מול סיבים).',
            'מספר חיבורים קוויים (LAN).'
        ]
    },
    {
        imgSrc: accessPointImage,
        name: 'נקודות גישה (Access Points)',
        description: 'נקודות גישה משפרות את כיסוי ה-Wi-Fi בבית.',
        infoList: [
            'תפקיד: מרחיבות את טווח ה-Wi-Fi באזורים בהם הקליטה חלשה.',
            'שיקולים בבחירה:קלות התקנה יכולת להתחבר לרשת קיימת מהירות ותמיכה בתקנים מתקדמים.',
        ]
    },
    {
        imgSrc: switcherImage,
        name: 'סוויץ’ (Switch)',
        description: 'רכיב המיועד להרחבת חיבורי הרשת הקווית בבית.',
        infoList: [
            'תפקיד: מחבר מספר מכשירים לנתב באמצעות כבלים.',
            'שימושים: חיבורי מחשבים, טלוויזיות חכמות, וקונסולות משחק',
            'שיקולים בבחירה: מספר הפורטים (יציאות חיבור) ,מהירות תמיכה (Fast Ethernet או Gigabit Ethernet).',
        ]
    },
    {
        imgSrc: powerlineAdaptersImage,
        name: 'מתאמי רשת על חשמל (Powerline Adapters)',
        description: 'מאפשרים להעביר חיבור אינטרנט דרך מערכת החשמל הביתית.',
        infoList: [
            'תפקיד: חיבור יציב באזורים מרוחקים ללא צורך בכבלים נוספים',
            'שיקולים בבחירה: מהירות תמיכה ,התאמה למערכת החשמל הביתית'
        ]
    },
    {
        imgSrc: networkCardsImage,
        name: 'כרטיסי רשת (Network Cards)',
        description: 'רכיב פנימי או חיצוני המאפשר חיבור לרשת.',
        infoList: [
            'כרטיסי Wi-Fi: למחשבים נייחים או ניידים ללא יכולת Wi-Fi מובנית.',
            'כרטיסי Ethernet: לחיבורים קוויים מהירים.'
        ]
    },
    {
        imgSrc: equipmentImage,
        name: 'מתאמי USB לרשת (USB Network Adapters)',
        description: 'פתרון פשוט ונייד לחיבור מחשבים לרשת.',
        infoList: [
            'תפקיד: הוספת חיבור Wi-Fi או Ethernet למכשירים שאינם תומכים בכך',
            'שימושים: מחשבים ניידים ללא חיבור מובנה, קונסולות משחק'
        ]
    },
    {
        imgSrc: equipmentImage,
        name: 'מגברי אות (Wi-Fi Extenders)',
        description: 'מגברי אות משפרים את טווח הקליטה האלחוטית.',
        infoList: [
            'תפקיד: מגבירים את האות באזורים בהם ה-Wi-Fi חלש.',
            'שיקולים בבחירה: תאימות עם הנתב ויכולת תמיכה ברוחב פס גבוה'
        ]
    }
]


export default function EquipmentPage() {
    return (
        <>
            <div className={style['background-img']}>
                <div className={style['overlay']}></div>
                <article className={style['article']}>
                    <section>
                        <h1>ציוד קצה לאינטרנט ביתי: מה חשוב לדעת?</h1>
                        <p>
                            ציוד קצה הוא מרכיב מרכזי במערכת האינטרנט הביתית שלך, המשפיע על איכות, מהירות ויציבות החיבור. במאמר זה נסקור את ציוד הקצה הנפוץ, תפקידיו, והגורמים שיש לקחת בחשבון בבחירתו.
                        </p>
                    </section>
                </article>
            </div>
            <section className={style['cable-card-list']}>
                <ListInfoCardList listInformativeCardList={cablesList} />
            </section>
            <section className={style['section-3']}>
                <h1>טיפים לבחירת ציוד קצה</h1>
                <ol>
                    <li>
                        התאמה לצרכים: בחרו בציוד שמתאים לשימוש שלכם – סטרימינג, משחקים, עבודה מרחוק.
                    </li>
                    <li>
                        תמיכה בטכנולוגיות חדשות: השקיעו בציוד שתומך ב-Wi-Fi 6 או סיבים אופטיים, גם אם לא תשתמשו בהם מיד.
                    </li>
                    <li>
                        שיקולי תקציב: חפשו ציוד שנותן את המענה הטוב ביותר במחיר סביר.
                    </li>
                    <li>
                        תאימות לספק האינטרנט: ודאו שהציוד עובד עם הטכנולוגיה של הספק שלכם.
                    </li>
                </ol>
            </section>
        </>
    )
}