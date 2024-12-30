
import logoIcon from '../../assets/images/logo.ico'
import style from './Logo.module.css'
export default function Logo() {
    return(
        <img className={style['logo-icon']} width={50} src={logoIcon} alt="" />
    )
}