import PropTypes from 'prop-types';
import CharacterCard from "../CharacterCard/CharacterCard.component";
import SearchBar from "../../Search/SearchBar.component";
import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../../Layout/Layout.component";
import {errorNotification} from "../../../helpers/notification.helper";
import "./characterlist.css"
import CategoryFilter from "../../CategoryFilter/CategoryFilter.component";

const initialFilter = {
    status: [],
    genders: [],
    species: []
}

const CharacterList = (props) => {

    const {characters, status, genders, species} = props
    const {search} = useContext(GlobalContext)

    const [filter, setFilter] = useState(initialFilter)

    const handleChangeFilter = (e, name) => {
        const state = e.target.value
        const newStatus = filter[name].includes(state) ? [...filter[name].filter(x => x !== state)] : [...filter[name], state]
        setFilter({
            ...filter,
            [name]: newStatus
        })
    }

    const filtered = () => {
        const results = characters.filter(character => character.name.toLowerCase().includes(search.toLocaleString()))
            ?.filter((character) => !filter.status.length || filter.status.includes(character.status.toLowerCase()))
            ?.filter((character) => !filter.genders.length || filter.genders.includes(character.gender.toLowerCase()))
            ?.filter((character) => !filter.species.length || filter.species.includes(character.species.toLowerCase()))
        if (!results.length) {
            errorNotification('Unable to find any result with text `' + search + '`')
            return []
        }
        return results
    }

    useEffect(() => {
    }, [])

    return (
        characters.length && status.length ?
            <div>
                <div className="search-bar-and-filter">
                    <SearchBar/>
                    <CategoryFilter name="Status" categories={status} handleChangeFilter={handleChangeFilter}/>
                    <CategoryFilter name="Genders" categories={genders} handleChangeFilter={handleChangeFilter}/>
                    <CategoryFilter name="Species" categories={species} handleChangeFilter={handleChangeFilter}/>
                </div>

                <div className="card-grid">
                    {filtered().map((character) => {
                        return (
                            <CharacterCard key={character.id} character={character}/>
                        )
                    })}
                </div>
            </div>
            :
            <></>
    )
}

CharacterList.propTypes = {
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
    })),
    status: PropTypes.arrayOf(PropTypes.string).isRequired,
    genders: PropTypes.arrayOf(PropTypes.string).isRequired,
    species: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default CharacterList
