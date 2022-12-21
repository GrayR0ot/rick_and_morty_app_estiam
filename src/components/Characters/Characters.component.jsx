import PropTypes from 'prop-types';
import './character.css'
import CharacterCard from "./Character/CharacterCard.component";
import SearchBarComponent from "../Search/SearchBar.component";
import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../Layout/Layout.component";
import {errorNotification} from "../../helpers/notification.helper";

const Characters = (props) => {

    const {characters, status} = props
    const {search} = useContext(GlobalContext)

    const [filter, setFilter] = useState({
        status: []
    })

    const handleStatusFilter = (e) => {
        const state = e.target.getAttribute('data-status')
        const newStatus = filter.status.includes(state) ? [...filter.status.filter(x => x !== state)] : [...filter.status, state]
        setFilter({
            ...filter,
            status: newStatus
        })
    }

    const filtered = () => {
        const results = characters.filter(character => character.name.toLowerCase().includes(search.toLocaleString()))
            .filter((character) => !filter.status.length || filter.status.includes(character.status.toLowerCase()))
        if (!results.length) {
            errorNotification('Unable to find any result with text `' + search + '`')
            return []
        }
        console.log(results)
        return results
    }

    useEffect(() => {
    }, [])

    return (
        characters.length && status.length ?
            <div>
                <SearchBarComponent/>

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

                <div className="card-list">
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
    status: PropTypes.arrayOf(PropTypes.string)
}

export default Characters
