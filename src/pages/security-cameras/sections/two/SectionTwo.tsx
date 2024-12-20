import ListInfoCardList from "../../../../components/cards/list-informative-card-list/ListInfoCardList";

import domeCameraImage from '../../../../assets/images/camera/dome-camera.jpg'
import bulletCameraImage from '../../../../assets/images/camera/bullet-camera.jpg'
import networkCameraImage from '../../../../assets/images/camera/network-camera.jpg'
import ptzCameraImage from '../../../../assets/images/camera/ptz-camera.jpg'

import style from './SectionTwo.module.css'

const securityCameraCardList = [
    {
        imgSrc: domeCameraImage,
        name: 'מצלמות כיפה ',
        description: '(Dome Cameras)',
        infoList: [
            'עיצוב מעוגל ודיסקרטי',
            'מתאימות להתקנה בתקרות',
            'מתאים לעסקים ומקומות סגורים',
            'טווח צפייה רחב',
            'עמידות גבוהה',
        ]
    },
    {
        imgSrc: bulletCameraImage,
        name: 'מצלמות תיבתיות',
        description: '(Bullet Cameras)',
        infoList: [
            'עיצוב מלבני ונראה לעין',
            'מתאימות להתקנה על קירות',
            'מושלמות למעקב חיצוני',
            'קלות התקנה',
            'נראות למטרות הרתעה',
        ]
    },
    {
        imgSrc: networkCameraImage,
        name: 'מצלמות IP',
        description: '(network cameras)',
        infoList: [
            'מחוברות לאינטרנט ומשדרות וידאו בזמן אמת',
            'מעקב בזמן אמת דרך אפליקציה או דפדפן',
            'קלות גישה מכל מקום',
            'תמיכה באיכות גבוהה (4K)',
            'תלויות בחיבור אינטרנט',
        ]
    },
    {
        imgSrc: ptzCameraImage,
        name: 'מצלמות PTZ',
        description: '(Pan, Tilt, Zoom)',
        infoList: [
            'יכולות להסתובב, להטות ולבצע זום',
            'מעקב מתקדם בעסקים גדולים או אזורים ציבוריים',
            'גמישות במעקב',
            'כיסוי רחב',
            'יקרות יותר ממצלמות רגילות',
        ]
    }
]
export default function SectionTwo() {
    return (
        <section className={style['section-two']}>
            <h1 className={style['title']}>סוגי מצלמות</h1>
            <ListInfoCardList listInformativeCardList={securityCameraCardList} />
        </section>
    )
}