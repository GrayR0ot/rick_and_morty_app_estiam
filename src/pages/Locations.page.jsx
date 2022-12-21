import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../components/Layout/Layout.component";
import axios from "axios";
import {config} from "../config";
import {errorNotification, successNotification} from "../helpers/notification.helper";
import LocationList from "../components/Location/LocationList/LocationList.component";

const LocationsPage = () => {

    const {handleLoadingChange} = useContext(GlobalContext)

    const [locations, setLocations] = useState([])


    useEffect(() => {
        handleLoadingChange(true)
        axios.get(config.API_URL + '/location', {
            headers: {
                'Content-type': 'application/json'
            }
        }).then((res) => {
            if(res?.data?.info?.count) {
                successNotification(`Loaded ${res.data.info.count} locations from our API!`)

                setLocations(res.data.results)
            } else errorNotification("Unable to find any location on our API!")
        }).catch((fail) => errorNotification(fail.toString()))
            .finally(() => handleLoadingChange(false))
    }, [config.API_URL])
    return (
        <LocationList locations={locations}/>
    )
}

export default LocationsPage
