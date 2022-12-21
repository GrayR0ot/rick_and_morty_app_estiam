import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {config} from "../config";
import {errorNotification, successNotification} from "../helpers/notification.helper";
import {GlobalContext} from "../components/Layout/Layout.component";

const CharacterDetailPage = (props) => {

    let {id} = useParams();
    const {loading, handleLoadingChange} = useContext(GlobalContext)
    const [character, setCharacter] = useState()

    useEffect(() => {
        handleLoadingChange(true)
        axios.get(config.API_URL + '/character/' + id, {
            headers: {
                'Content-type': 'application/json'
            }
        }).then((res) => {
            if (res?.data?.id) {
                successNotification(`Loaded character '${res.data.name}'`)

                setCharacter(res.data)
            } else errorNotification("Unable to find this character on our API!")
        }).catch((fail) => errorNotification(fail.toString()))
            .finally(() => handleLoadingChange(false))
    }, [])

    return (
        <div>
            {JSON.stringify(character)}
        </div>
    )

}

export default CharacterDetailPage
