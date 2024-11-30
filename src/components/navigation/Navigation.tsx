import { NavLink } from "react-router";
import style from './Navigation.module.css'
import useWindowSize from "../../hook/useWindowSize";
import { useState } from "react";
import hamburgerMenuSvg from '../../assets/svg/hamburger-menu.svg'


export default function Navigation() {

    const [isMobileManuOpen, setIsMobileManuOpen] = useState(false)

    const [width] = useWindowSize()

    return (
        width >= 700 ?
            <nav className={style['nav-container']}>
                <NavLink to={"/"}>דף הבית</NavLink>
                <NavLink to={"/"}>רשת ביתית וסיבים אופטים</NavLink>
                <NavLink to={"/"}>אינטרקום</NavLink>
            </nav>
            :
            <div>
                 <img onClick={() => setIsMobileManuOpen(prev => { return !prev })} className={style['mobile-nav-container-manu']} src={hamburgerMenuSvg} alt="hamburgerMenuSvg" />
                {
                    isMobileManuOpen &&
                    <nav className={style['mobile-nav-container']} >
                        <NavLink to={"/"}>דף הבית</NavLink>
                        <NavLink to={"/"}>רשת ביתית וסיבים אופטים</NavLink>
                        <NavLink to={"/"}>אינטרקום</NavLink>
                    </nav>
                }
            </div>
    )
}