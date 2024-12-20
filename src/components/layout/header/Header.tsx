import Navigation from "../../navigation/Navigation";
import style from './Header.module.css'
import PhoneLink from "../../phone-link/PhoneLink";
import WhatappLink from "../../whatup-link/WhatappLink";

export default function Header() {




    return (
        <header className={style['header']}>
            <div className={style['header-nav']}>
                <Navigation />
            </div>
            <div className={style['call-me']}>
                <PhoneLink />
                <WhatappLink />
            </div>
        </header>
    )
}