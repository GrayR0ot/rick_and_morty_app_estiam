import PropTypes from 'prop-types';
import './character.css'
import CharacterCard from "./Character/CharacterCard.component";
import SearchBarComponent from "../Search/SearchBar.component";
import {useContext} from "react";
import {GlobalContext} from "../Layout/Layout.component";
import {errorNotification} from "../../helpers/notification.helper";

const Characters = (props) => {

    const {characters} = props
    const {search} = useContext(GlobalContext)

    const filtered = () => {
        const results = characters.filter(character => character.name.toLowerCase().includes(search.toLocaleString()))
        if(!results.length) {
            errorNotification('Unable to find any result with text `' + search + '`')
            return []
        }
        return results
    }

    return (
        <div>
            <SearchBarComponent/>
            <div className="card-list">
                {filtered().map((character, index) => {
                    return (
                        <CharacterCard key={index} character={character}/>
                    )
                })}
            </div>
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
