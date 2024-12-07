import style from './PhoneLink.module.css'
import smartPhoneSvg from '../../assets/svg/smartphone.svg'

export default function PhoneLink() {
    return (
        <a className={style['phone']} href="tel:+972 50-677-1525">
            050-677-1525
            <img src={smartPhoneSvg} alt="" />
        </a>
    )
}