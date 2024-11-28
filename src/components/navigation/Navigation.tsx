import { NavLink } from "react-router";
import style from './Navigation.module.css'
export default function Navigation() {
    return (
        <nav className={style['nav-container']}>
            <NavLink to={"/"}>דף הבית</NavLink>
            <NavLink to={"/"}>רשת ביתית וסיבים אופטים</NavLink>
            <NavLink to={"/"}>אינטרקום</NavLink>
        </nav>
    )
}