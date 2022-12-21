import PropTypes from "prop-types";
import {useContext} from "react";
import {GlobalContext} from "../../Layout/Layout.component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import "./locationcard.css"

const LocationCard = (props) => {

    const {theme} = useContext(GlobalContext)
    const {location} = props

    return (
        <div className={`card ${theme}`}>
            <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="card image"/>
            <div className={`card-name ${theme}`}>{location.name}</div>
            <div className="card-footer">
                <div className={`card-dimension`}><FontAwesomeIcon icon={faCalendar}/> {location.dimension}</div>
                <div className={`card-type`}><FontAwesomeIcon icon={faCalendar}/> {location.type}</div>
            </div>
        </div>
    )

}

LocationCard.propTypes = {
    location: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        dimension: PropTypes.string.isRequired,
        residents: PropTypes.arrayOf(PropTypes.string).isRequired,
        url: PropTypes.string.isRequired,
        created: PropTypes.string.isRequired
    })
}

export default LocationCard
