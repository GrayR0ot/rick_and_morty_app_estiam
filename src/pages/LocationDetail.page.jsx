import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {config} from "../config";
import {errorNotification, successNotification} from "../helpers/notification.helper";
import {GlobalContext} from "../components/Layout/Layout.component";
import LocationCharacters from "../components/Location/LocationCharacters/EpisodeCharacters.component";

const EpisodeDetail = (props) => {

    let {id} = useParams();
    const navigate = useNavigate();
    const {handleLoadingChange} = useContext(GlobalContext)
    const [location, setLocation] = useState()

    useEffect(() => {
        handleLoadingChange(true)
        axios.get(config.API_URL + '/location/' + id, {
            headers: {
                'Content-type': 'application/json'
            }
        }).then((res) => {
            if (res?.data?.id) {
                if(res.data.residents.length) {
                    successNotification(`Loaded location '${res.data.name}'`)
                    setLocation(res.data)
                } else {
                    errorNotification("This location does not contains any character!")
                    return navigate(-1)
                }
            } else {
                errorNotification("Unable to find this location on our API!")
                return navigate(-1)
            }
        }).catch((fail) => errorNotification(fail.toString()))
            .finally(() => {
                handleLoadingChange(false)
            })
    }, [])

    return (
        location?.name ?
            <LocationCharacters characterURLs={location.residents}/>
            :
            ''
    )
}

export default EpisodeDetail
