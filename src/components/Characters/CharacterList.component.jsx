import PropTypes from 'prop-types';
import CharacterCard from "./Character/CharacterCard.component";
import SearchBarComponent from "../Search/SearchBar.component";
import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../Layout/Layout.component";
import {errorNotification} from "../../helpers/notification.helper";

const initialFilter = {
    status: [],
    genders: [],
    species: []
}

const Characters = (props) => {

    const {characters, status, genders, species} = props
    const {search} = useContext(GlobalContext)

    const [filter, setFilter] = useState(initialFilter)

    const handleStatusFilter = (e) => {
        const state = e.target.getAttribute('data-status')
        const newStatus = filter.status.includes(state) ? [...filter.status.filter(x => x !== state)] : [...filter.status, state]
        setFilter({
            ...filter,
            status: newStatus
        })
    }

    const handleGenderFilter = (e) => {
        const state = e.target.getAttribute('data-gender')
        const newGenders = filter.genders.includes(state) ? [...filter.genders.filter(x => x !== state)] : [...filter.genders, state]
        setFilter({
            ...filter,
            genders: newGenders
        })
    }

    const handleSpeciesFilter = (e) => {
        const state = e.target.getAttribute('data-species')
        const newSpecies = filter.species.includes(state) ? [...filter.species.filter(x => x !== state)] : [...filter.species, state]
        setFilter({
            ...filter,
            species: newSpecies
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
                <SearchBarComponent/>

                <br/>
                <b>Status:</b>
                {
                    status.map((status, index) => {
                        return (
                            <div key={index}>
                                <input type="checkbox" onChange={handleStatusFilter}
                                       value={!filter.status || filter.status.includes(status)}
                                       data-status={status}/>
                                {status}
                            </div>
                        )
                    })
                }

                <br/>
                <b>Genders:</b>
                {
                    genders.map((gender, index) => {
                        return (
                            <div key={index}>
                                <input type="checkbox" onChange={handleGenderFilter}
                                       value={!filter.genders || filter.genders.includes(gender)}
                                       data-gender={gender}/>
                                {gender}
                            </div>
                        )
                    })
                }

                <br/>
                <b>Species:</b>
                {
                    species.map((species, index) => {
                        return (
                            <div key={index}>
                                <input type="checkbox" onChange={handleSpeciesFilter}
                                       value={!filter.species || filter.species.includes(species)}
                                       data-species={species}/>
                                {species}
                            </div>
                        )
                    })
                }

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
    })),
    status: PropTypes.arrayOf(PropTypes.string).isRequired,
    genders: PropTypes.arrayOf(PropTypes.string).isRequired,
    species: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Characters
