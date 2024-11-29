import Navigation from "../navigation/Navigation";
import style from './Header.module.css'
import smartPhoneSvg from '../../assets/svg/smartphone.svg'
export default function Header() {
    return (
        <header className={style['header']}>

            <div>

            </div>
            <div>
                <Navigation />
            </div>
            <div className={style['call-me']}>
                <a href="tel:+972 50-677-1525">
                    050-677-1525
                    <img src={smartPhoneSvg} alt="" />
                </a>
            </div>

        </header>
    )
}