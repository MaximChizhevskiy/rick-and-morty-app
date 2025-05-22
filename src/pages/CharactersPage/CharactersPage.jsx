import s from './CharacterPage.module.css'
import {useEffect, useState} from "react";
import axios from "axios";

export const CharactersPage = () => {
    const [characters, setCharacter] = useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character').then((res) => {
            setCharacter(res.data.results)
        })
    }, [])

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
        </div>
    )
}