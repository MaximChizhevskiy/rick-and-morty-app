import {NavLink} from "react-router";

export const HomePage = () => {
    return (
        <div>
            <h1>The Rick and Morty</h1>
            <NavLink to={"/characters"}>Characters</NavLink>
            <NavLink to={"/locations"}>Locations</NavLink>
            <NavLink to={"/episodes"}>Episodes</NavLink>
        </div>
    )
}