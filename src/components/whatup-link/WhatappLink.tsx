import whatappImg from '../../assets/images/whatsapp_logo_green.png'
import style from './WhatappLink.module.css'

export default function WhatappLink() {
    return (
        <a className={style['whatapp']} href="https://wa.me/972506771525?text=היי%20הגעתי%20דרך%20האתר%20אני%20מעוניין%20בפרטים%20נוספים%20">
            <img src={whatappImg} alt="" />
        </a>
    )
}