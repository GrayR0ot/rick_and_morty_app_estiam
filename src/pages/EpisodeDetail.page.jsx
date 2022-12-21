import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {config} from "../config";
import {errorNotification, successNotification} from "../helpers/notification.helper";
import {GlobalContext} from "../components/Layout/Layout.component";
import CharacterList from "../components/Character/CharacterList/CharacterList.component";
import EpisodeCharacters from "../components/Episode/EpisodeCharacters/EpisodeCharacters.component";

const EpisodeDetail = (props) => {

    let {id} = useParams();
    const {handleLoadingChange} = useContext(GlobalContext)
    const [episode, setEpisodes] = useState()

    useEffect(() => {
        handleLoadingChange(true)
        axios.get(config.API_URL + '/episode/' + id, {
            headers: {
                'Content-type': 'application/json'
            }
        }).then((res) => {
            if (res?.data?.id) {
                successNotification(`Loaded episode '${res.data.name}'`)

                setEpisodes(res.data)
            } else errorNotification("Unable to find this episode on our API!")
        }).catch((fail) => errorNotification(fail.toString()))
            .finally(() => {
                handleLoadingChange(false)
            })
    }, [])

    return (
        episode?.name ?
            <EpisodeCharacters characterURLs={episode.characters}/>
            :
            ''
    )
}

export default EpisodeDetail
