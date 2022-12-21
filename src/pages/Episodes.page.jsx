import {GlobalContext} from "../components/Layout/Layout.component";
import axios from "axios";
import {config} from "../config";
import {errorNotification, successNotification} from "../helpers/notification.helper";
import EpisodeList from "../components/Episode/EpisodeList/EpisodeList.component";
import {useContext, useEffect, useState} from "react";

const EpisodesPage = () => {

    const {handleLoadingChange} = useContext(GlobalContext)

    const [episodes, setEpisodes] = useState([])


    useEffect(() => {
        handleLoadingChange(true)
        axios.get(config.API_URL + '/episode', {
            headers: {
                'Content-type': 'application/json'
            }
        }).then((res) => {
            if(res?.data?.info?.count) {
                successNotification(`Loaded ${res.data.info.count} episode from our API!`)

                setEpisodes(res.data.results)
            } else errorNotification("Unable to find any episode on our API!")
        }).catch((fail) => errorNotification(fail.toString()))
            .finally(() => handleLoadingChange(false))
    }, [])
    return (
        <EpisodeList episodes={episodes}/>
    )

}

export default EpisodesPage
