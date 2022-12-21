import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {config} from "../config";
import {errorNotification, successNotification} from "../helpers/notification.helper";
import {GlobalContext} from "../components/Layout/Layout.component";
import EpisodeCharacters from "../components/Episode/EpisodeCharacters/EpisodeCharacters.component";

const EpisodeDetail = (props) => {

    let {id} = useParams();
    const navigate = useNavigate();
    const {handleLoadingChange} = useContext(GlobalContext)
    const [episode, setEpisode] = useState()

    useEffect(() => {
        handleLoadingChange(true)
        axios.get(config.API_URL + '/episode/' + id, {
            headers: {
                'Content-type': 'application/json'
            }
        }).then((res) => {
            if(res.data.characters.length) {
                successNotification(`Loaded episode '${res.data.name}'`)
                setEpisode(res.data)
            } else {
                errorNotification("Unable to find this episode on our API!")
                return navigate(-1)
            }
        }).catch((fail) => {
            errorNotification(fail.toString())
            return navigate(-1)
        })
            .finally(() => {
                handleLoadingChange(false)
            })
    }, [])

    return (
        episode?.name ?
            <EpisodeCharacters episode={episode} characterURLs={episode.characters}/>
            :
            ''
    )
}

export default EpisodeDetail
