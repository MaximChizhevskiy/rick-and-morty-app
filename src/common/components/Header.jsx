import logo from '../../assets/img/logo.png'
import {NavLink} from "react-router";
import s from './Header.module.css'

export const Header = () => {

    const isActiveLinkStyle = ({ isActive }) => {
        return `${s.headerLink} ${isActive ? s.activeLink : ''}`}

    return (
        <div className={s.container}>
            <NavLink className={s.headerLink} to={"/rick-and-morty-app"}><img className={s.logo} src={logo} alt={"logo of Rick and Morty"}/></NavLink>
            <nav>
                <NavLink className={isActiveLinkStyle} to={"/rick-and-morty-app"}>Home</NavLink>
                <NavLink className={isActiveLinkStyle} to={"/characters"}>Characters</NavLink>
                <NavLink className={isActiveLinkStyle} to={"/locations"}>Locations</NavLink>
                <NavLink className={isActiveLinkStyle} to={"/episodes"}>Episodes</NavLink>
            </nav>
        </div>
    )
}