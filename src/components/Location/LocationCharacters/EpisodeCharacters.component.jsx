import PropTypes from 'prop-types';
import {useContext, useEffect, useState} from "react";
import { redirect } from "react-router-dom";
import CharacterCard from "../../Character/CharacterCard/CharacterCard.component";
import {GlobalContext} from "../../Layout/Layout.component";
import axios from "axios";
import {errorNotification} from "../../../helpers/notification.helper";

const LocationCharacters = (props) => {

    const {handleLoadingChange} = useContext(GlobalContext)
    const {characterURLs} = props
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const tempCharacters = []
        for (const characterURL of characterURLs) {
            handleLoadingChange(true)
            axios.get(characterURL, {
                headers: {
                    'Content-type': 'application/json'
                }
            }).then((res) => {
                if (res?.data?.id) {
                    tempCharacters.push(res.data)
                } else errorNotification("Unable to find this character on our API!")
            }).catch((fail) => errorNotification(fail.toString()))
                .finally(() => {
                    if (tempCharacters.length === characterURLs.length) {
                        handleLoadingChange(false)
                        setCharacters(tempCharacters)
                    }
                })
        }
    }, [characterURLs])

    return (
        characters.length ?
            <div>
                <div className="card-grid">
                    {characters.map((character) => {
                        return (
                            <CharacterCard key={character.id} character={character}/>
                        )
                    })}
                </div>
            </div>
            :
            <></>
    )
}

LocationCharacters.propTypes = {
    characterURLs: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default LocationCharacters
