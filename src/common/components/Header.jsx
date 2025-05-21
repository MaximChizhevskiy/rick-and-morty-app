import logo from '../../assets/img/logo.png'
import {NavLink} from "react-router";
import s from './Header.module.css'

export const Header = () => {
    return (
        <div className={s.container}>
            <NavLink className={s.headerLink} to={"/"}><img className={s.logo} src={logo} alt={"logo of Rick and Morty"}/></NavLink>
            <nav>
                <NavLink className={s.headerLink} to={"/"}>Home</NavLink>
                <NavLink className={s.headerLink} to={"/characters"}>Characters</NavLink>
                <NavLink className={s.headerLink} to={"/locations"}>Locations</NavLink>
                <NavLink className={s.headerLink} to={"/episodes"}>Episodes</NavLink>
            </nav>
        </div>
    )
}