import PropTypes from 'prop-types';
import SearchBar from "../../Search/SearchBar.component";
import {useContext, useEffect} from "react";
import {GlobalContext} from "../../Layout/Layout.component";
import LocationCard from "../LocationCard/LocationCard.component";
import {errorNotification} from "../../../helpers/notification.helper";

const LocationList = (props) => {

    const {locations} = props
    const {search} = useContext(GlobalContext)

    const filtered = () => {
        const results = locations.filter(location => location.name.toLowerCase().includes(search.toLocaleString()))
        if (!results.length) {
            errorNotification('Unable to find any result with text `' + search + '`')
            return []
        }
        return results
    }

    useEffect(() => {
    }, [])

    return (
        locations.length ?
            <div>
                <div className="search-bar-and-filter" style={{marginBottom: '2%'}}>
                    <SearchBar/>
                </div>

                <div className="card-grid">
                    {filtered().map((location) => {
                        return <LocationCard key={location.id} location={location}/>
                    })}
                </div>
            </div>
            :
            <></>
    )
}

LocationList.propTypes = {
    locations: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        dimension: PropTypes.string.isRequired,
        residents: PropTypes.arrayOf(PropTypes.string).isRequired,
        url: PropTypes.string.isRequired,
        created: PropTypes.string.isRequired
    }))
}

export default LocationList
