import Navigation from "../navigation/Navigation";
import style from './Header.module.css'
import smartPhoneSvg from '../../assets/svg/smartphone.svg'
import whatappImg from '../../assets/images/whatsapp_logo_green.png'

export default function Header() {




    return (
        <header className={style['header']}>
            <div className="header-nav">
                <Navigation />
            </div>
            <div className={style['call-me']}>
                <a className={style['phone']} href="tel:+972 50-677-1525">
                    050-677-1525
                    <img src={smartPhoneSvg} alt="" />
                </a>
                <a className={style['whatapp']} href="https://wa.me/972506771525?text=היי%20הגעתי%20דרך%20האתר%20אני%20מעוניין%20בפרטים%20נוספים%20">
                    <img src={whatappImg} alt="" />
                </a>
            </div>
        </header>
    )
}