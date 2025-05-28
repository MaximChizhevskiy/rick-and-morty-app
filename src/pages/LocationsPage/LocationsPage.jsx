import {useEffect, useState} from "react";
import axios from "axios";

export const LocationsPage = () => {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location')
            .then((res) => {
                setLocations(res.data.results)
            })
            .catch((error) => {
                console.log(error.response.data.error)
            })
    }, [])

    return (
        <div className={'pageContainer'}>
            <h1 className={'pageTitle'}>LocationsPage</h1>
            {locations.length && (
                <>
                    {locations.map(location => {
                        return <div>
                            <ul>
                                <li>Название локации: <b>{location.name}</b></li>
                                <li>Тип локации: <b>{location.type}</b></li>
                                <li>Измерение, в котором находится местоположение: <b>{location.dimension}</b></li>
                                <li>Количество персонажей, которых видели в данной
                                    локации: <b>{location.residents.length}</b>
                                </li>

                            </ul>
                            <hr/>
                        </div>
                    })}
                </>

            )}

        </div>
    )
}