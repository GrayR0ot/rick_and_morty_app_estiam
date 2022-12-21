import PropTypes from 'prop-types';
import SearchBar from "../../Search/SearchBar.component";
import {useContext, useEffect} from "react";
import {GlobalContext} from "../../Layout/Layout.component";
import EpisodeCard from "../EpisodeCard/EpisodeCard.component";
import {errorNotification} from "../../../helpers/notification.helper";

const initialFilter = {
    status: [],
    genders: [],
    species: []
}

const EpisodeList = (props) => {

    const {episodes} = props
    const {search} = useContext(GlobalContext)

    const filtered = () => {
        const results = episodes.filter(episode => episode.name.toLowerCase().includes(search.toLocaleString()))
        if (!results.length) {
            errorNotification('Unable to find any result with text `' + search + '`')
            return []
        }
        return results
    }

    useEffect(() => {
    }, [])

    return (
        episodes.length ?
            <div>
                <div className="search-bar-and-filter">
                    <SearchBar/>
                </div>

                <div className="card-grid">
                    {filtered().map((episode) => {
                        return <EpisodeCard key={episode.id} episode={episode}/>
                    })}
                </div>
            </div>
            :
            <></>
    )
}

EpisodeList.propTypes = {
    episodes: PropTypes.arrayOf(PropTypes.shape({
        air_date: PropTypes.string.isRequired,
        characters: PropTypes.array.isRequired,
        created: PropTypes.string.isRequired,
        episode: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }))
}

export default EpisodeList
