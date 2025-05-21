import {NavLink} from "react-router";
import s from './HomePage.module.css'

export const HomePage = () => {
    return (
        <div className={s.mainWrapper}>
            <h1 className={`pageTitle ${s.title}`}>The Rick and Morty</h1>
            <nav className={s.linkWrapper}>
                <NavLink className={'linkButton'} to={"/characters"}>Characters</NavLink>
                <NavLink className={'linkButton'} to={"/locations"}>Locations</NavLink>
                <NavLink className={'linkButton'} to={"/episodes"}>Episodes</NavLink>
            </nav>
        </div>
    )
}