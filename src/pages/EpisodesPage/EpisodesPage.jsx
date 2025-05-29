import {useEffect, useState} from "react";
import axios from "axios";

export const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode')
            .then((res) => {
                setEpisodes(res.data.results)
                console.log(res.data.results)
            })
            .catch((error) => {
                console.log(error.response.data.error)
            })
    }, []);

    return (
        <div className={'pageContainer'}>
            <h1 className={'pageTitle'}>EpisodesPage</h1>
            {episodes.length !== null && (
                <>
                    {episodes.map((episode) => {
                        return <div>
                            <ul>
                                <li>Эпизод: <b>{episode.episode}</b></li>
                                <li>Название эпизода: <b>{episode.name}</b></li>
                                <li>Дата выхода эпизода в эфир: <b>{episode.air_date}</b></li>
                                <li>Список персонажей, которые были замечены в
                                    эпизоде: <b>{episode.characters.length}</b></li>
                            </ul>
                            <hr/>
                        </div>
                    })}
                </>
            )}
        </div>
    )
}