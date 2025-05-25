import s from './CharacterPage.module.css'
import {useEffect, useState} from "react";
import axios from "axios";

export const CharactersPage = () => {
    const [characters, setCharacters] = useState([])

    const [info, setInfo] = useState({
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    })

    const fetchData = (url) => {
      axios.get(url).then((res) => {
          setCharacters(res.data.results)
          setInfo(res.data.info)
      })
    }

    useEffect(() => {
      fetchData('https://rickandmortyapi.com/api/character')
    }, [])

    const nextPageHandler = () => {
        fetchData(info.next)
    }

    const previousPageHandler = () => {
        fetchData(info.prev)
    }

    return (
        <div className={'pageContainer'}>
            <h1 className={"pageTitle"}>CharacterPage</h1>
            <div className={s.characters}>
                {characters.length && (
                    characters.map((character) => {
                        return (
                            <div key={character.id} className={s.character}>
                                <div className={s.characterLink}>{character.name}</div>
                                <img src={character.image} alt={`${character.name} avatar`}/>
                            </div>
                        )
                    })
                )}
            </div>
            <div className={s.buttonContainer}>
                <button className="linkButton" onClick={previousPageHandler} disabled={info.prev === null}>
                    Назад
                </button>
                <button className="linkButton" onClick={nextPageHandler} disabled={!info.next === null}>
                    Вперед
                </button>
            </div>
        </div>
    )
}