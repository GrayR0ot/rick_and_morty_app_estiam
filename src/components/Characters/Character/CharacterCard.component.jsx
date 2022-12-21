import PropTypes from "prop-types";
import {useContext, useState} from "react";
import {GlobalContext} from "../../Layout/Layout.component";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt, faFire} from "@fortawesome/free-solid-svg-icons";
import "./charactercard.css"

const CharacterCard = (props) => {

    const {theme} = useContext(GlobalContext)
    const [character, setCharacter] = useState(props.character)

    return (
        <Link to={`/characters/${character.id}`} style={{textDecoration: "none"}}>
            <div className={`card ${theme}`}>
                <div className="card-header">
                    <div className="card-status">{character.status}</div>
                </div>
                <img src={character.image} alt="card image"/>
                <div className={`card-name ${theme}`}>{character.name}</div>
                <div className="card-footer">
                    <div className={`card-species`}><FontAwesomeIcon icon={faFire}/> {character.species}</div>
                    <div className={`card-location`}><FontAwesomeIcon icon={faMapMarkerAlt}/> {character.location.name}
                    </div>
                </div>
            </div>
        </Link>
    )

}

CharacterCard.propTypes = {
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

export default CharacterCard
