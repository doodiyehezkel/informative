import { Outlet } from "react-router";
import style from './Main.module.css'
export default function Main(){
    return (
        <div className={style['main']}>
            <Outlet />
        </div>
    )
}