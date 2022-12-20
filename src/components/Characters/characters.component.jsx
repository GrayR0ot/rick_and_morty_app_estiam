import PropTypes from'prop-types';
import './character.css'
import CharacterCard from "./Character/CharacterCard.component";

const Characters = (props) => {

    const {characters} = props

    return (
        <div className="card-list">
            {characters.map((character, index) => {
                return (
                    <CharacterCard key={index} character={character}/>
                )
            })}
        </div>
    )
}

Characters.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.shape({
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
    }))
}

export default Characters
