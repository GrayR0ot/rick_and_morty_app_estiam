import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFire, faMapMarkerAlt, faMars, faHeart} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import {GlobalContext} from "../../Layout/Layout.component";
import PropTypes from "prop-types";
import "./characterdetail.css"

const CharacterDetail = (props) => {

    const {theme} = useContext(GlobalContext)
    const {character} = props

    return (
        <div className={`character-container ${theme}`}>
            <img src={character.image} alt="character-container image"/>
            <div className={`character-container-name ${theme}`}>{character.name}</div>
            <div className="character-container-footer">
                <div className={`character-container-other`}><FontAwesomeIcon icon={faHeart}/> {character.status}</div>
                <div className={`character-container-other`}><FontAwesomeIcon icon={faMars}/> {character.gender}</div>
                <div className={`character-container-other`}><FontAwesomeIcon icon={faFire}/> {character.species}</div>
                <div className={`character-container-location`}><FontAwesomeIcon
                    icon={faMapMarkerAlt}/> {character.location.name}
                </div>
            </div>
        </div>
    )
}

CharacterDetail.propTypes = {
    character: PropTypes.shape({
        created: PropTypes.string.isRequired,
        episode: PropTypes.arrayOf(PropTypes.string).isRequired,
        gender: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        location: PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        }).isRequired,
        name: PropTypes.string.isRequired,
        origin: PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        }).isRequired,
        species: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    })
}

export default CharacterDetail
