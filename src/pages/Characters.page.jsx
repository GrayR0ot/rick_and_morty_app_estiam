import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {errorNotification, successNotification} from "../helpers/notification.helper";
import {config} from "../config";
import Characters from "../components/Characters/CharacterList.component";
import {uniq} from "lodash";
import {GlobalContext} from "../components/Layout/Layout.component";

const CharactersPage = () => {

    const {handleLoadingChange} = useContext(GlobalContext)

    const [characters, setCharacters] = useState([])
    const [status, setStatus] = useState([])
    const [genders, setGenders] = useState([])
    const [species, setSpecies] = useState([])


    useEffect(() => {
        handleLoadingChange(true)
        axios.get(config.API_URL + '/character', {
            headers: {
                'Content-type': 'application/json'
            }
        }).then((res) => {
            if(res?.data?.info?.count) {
                successNotification(`Loaded ${res.data.info.count} characters from our API!`)

                setCharacters(res.data.results)
                setStatus(uniq(res.data.results.map((character) => character.status.toLowerCase())))
                setGenders(uniq(res.data.results.map((character) => character.gender.toLowerCase())))
                setSpecies(uniq(res.data.results.map((character) => character.species.toLowerCase())))
            } else errorNotification("Unable to find any character on our API!")
        }).catch((fail) => errorNotification(fail.toString()))
            .finally(() => handleLoadingChange(false))
    }, [])
    return (
        <Characters characters={characters} status={status} genders={genders} species={species}/>
    )
}

export default CharactersPage
