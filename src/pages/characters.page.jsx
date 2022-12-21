import {useEffect, useState} from "react";
import axios from "axios";
import {errorNotification, successNotification} from "../helpers/notification.helper";
import {config} from "../config";
import Characters from "../components/Characters/Characters.component";

const CharactersPage = () => {

    const [characters, setCharacters] = useState([])


    useEffect(() => {
        axios.get(config.API_URL + '/character', {
            headers: {
                'Content-type': 'application/json'
            }
        }).then((res) => {
            if(res?.data?.info?.count) {
                successNotification(`Loaded ${res.data.info.count} characters from our API!`)
                setCharacters(res.data.results)
            } else errorNotification("Unable to find any character on our API!")
        }).catch((fail) => errorNotification(fail.toString()))
    }, [])
    return (
        <Characters characters={characters}/>
    )
}

export default CharactersPage
