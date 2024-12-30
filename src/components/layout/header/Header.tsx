import Navigation from "../../navigation/Navigation";
import style from './Header.module.css'
import PhoneLink from "../../phone-link/PhoneLink";
import WhatappLink from "../../whatup-link/WhatappLink";
import Logo from "../../logo/Logo";
import { Link } from "react-router";


export default function Header() {

    return (
        <header className={style['header']}>
            <div className={style['logo']}>
                <Link to={"/"}>
                    <Logo />
               </Link>
            </div>
            <div className={style['header-nav']}>
                <Navigation />
            </div>
            <div className={style['logo-mobile']}>
                <Link to={"/"}>
                    <Logo />
               </Link>
            </div>
            <div className={style['call-me']}>
                <PhoneLink />
                <WhatappLink />
            </div>
        </header>
    )
}