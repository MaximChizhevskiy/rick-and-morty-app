import {HomePage} from "./pages/HomePage/HomePage.jsx";
import {Header} from "./common/components/Header.jsx";
import {CharactersPage} from "./pages/CharactersPage/CharactersPage.jsx";
import {LocationsPage} from "./pages/LocationsPage/LocationsPage.jsx";
import {EpisodesPage} from "./pages/EpisodesPage/EpisodesPage.jsx";
import {Route, Routes} from "react-router";
import {Character} from "./pages/CharactersPage/Character/Character.jsx";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/characters"} element={<CharactersPage/>}/>
                <Route path="/characters/:id" element={<Character />} />
                <Route path={"/locations"} element={<LocationsPage/>}/>
                <Route path={"/episodes"} element={<EpisodesPage/>}/>
            </Routes>
        </div>
    )
}

export default App

