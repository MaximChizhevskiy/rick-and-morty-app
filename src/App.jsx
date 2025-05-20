import {HomePage} from "./pages/HomePage/HomePage.jsx";
import {Header} from "./common/components/Header.jsx";
import {CharactersPage} from "./pages/CharactersPage/CharactersPage.jsx";
import {LocationsPage} from "./pages/LocationsPage/LocationsPage.jsx";
import {EpisodesPage} from "./pages/EpisodesPage/EpisodesPage.jsx";
import {Route, Routes} from "react-router";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/characters"} element={<CharactersPage/>}/>
                <Route path={"/locations"} element={<LocationsPage/>}/>
                <Route path={"/episodes"} element={<EpisodesPage/>}/>
            </Routes>
        </div>
    )
}

export default App

