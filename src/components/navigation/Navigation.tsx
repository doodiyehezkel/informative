import { NavLink } from "react-router";
import style from './Navigation.module.css'
import useWindowSize from "../../hook/useWindowSize";
import { useState } from "react";
import hamburgerMenuSvg from '../../assets/svg/hamburger-menu.svg'
import { v4 as uuidv4 } from "uuid";

const navItems = [
    {
        path: '/',
        text: 'דף הבית'
    },
    {
        path: 'network-cables',
        text: 'תקשורת קווית'
    },
    {
        path: 'equipment',
        text: 'ציוד קצה'
    },
    {
        path: 'optical-fibers',
        text: 'סיבים אופטיים'
    },
    {
        path: 'security-cameras',
        text: 'מצלמות אבטחה'
    },
    {
        path: 'contact-us',
        text: 'צרו קשר'
    }
]

export default function Navigation() {
    const [isMobileManuOpen, setIsMobileManuOpen] = useState(false)
    const [width] = useWindowSize()
    return (
        width >= 700 ?
            <nav className={style['nav-container']}>
                {
                    navItems.map(item => {
                        return (
                            <NavLink key={uuidv4()} to={item.path}>{item.text}</NavLink>
                        )
                    })
                }
            </nav>
            :
            <>
                <img onClick={() => setIsMobileManuOpen(prev => { return !prev })} className={style['mobile-nav-container-manu']} src={hamburgerMenuSvg} alt="hamburgerMenuSvg" />
                {
                    isMobileManuOpen &&
                    <nav className={style['mobile-nav-container']} >
                        {
                             navItems.map(item => {
                                return (
                                    <NavLink onClick={()=> setIsMobileManuOpen(false)} key={uuidv4()} to={item.path}>{item.text}</NavLink>
                                )
                            })
                        }
                    </nav>
                }
            </>
    )
}

