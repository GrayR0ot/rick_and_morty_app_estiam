import PropTypes from "prop-types";
import {useContext, useState} from "react";
import {GlobalContext} from "../../Layout/Layout.component";
import {Link} from "react-router-dom";

const CharacterCard = (props) => {

    const {theme} = useContext(GlobalContext)
    const [character, setCharacter] = useState(props.character)

    return (
        <div className={`card card-${theme}`}>
            <img src={character.image} alt="card image"/>
            <Link to={`/characters/${character.id}`}>
                <div className={`card-title card-title-${theme}`}>{character.name}</div>
            </Link>
            <div className={`status indicator ${character.status.toLowerCase() === 'alive' ? 'online' : 'offline'}`}/>
            <div className={`card-category card-category-${theme}`}>{character.species} - {character.location.name}</div>
        </div>
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
