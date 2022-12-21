import PropTypes from "prop-types";
import {useContext} from "react";
import {GlobalContext} from "../../Layout/Layout.component";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faPeopleGroup} from "@fortawesome/free-solid-svg-icons";
import "./episodecard.css"

const EpisodeCard = (props) => {

    const {theme} = useContext(GlobalContext)
    const {episode} = props

    return (
        <div className={`card ${theme}`}>
            <Link to={`/episode/${episode.id}`} style={{textDecoration: "none"}}>
                <div className="card-header">
                    <div className="card-status">{episode.episode}</div>
                </div>
                <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="card image"/>
                <div className={`card-name ${theme}`}>{episode.name}</div>
                <div className="card-footer">
                    <div className={`card-date`}><FontAwesomeIcon icon={faCalendar}/> {episode.air_date}</div>
                    <div className={`card-species`}><FontAwesomeIcon icon={faPeopleGroup}/> {episode.characters.length} characters</div>
                </div>
            </Link>
        </div>
    )

}

EpisodeCard.propTypes = {
    episode: PropTypes.shape({
        air_date: PropTypes.string.isRequired,
        characters: PropTypes.array.isRequired,
        created: PropTypes.string.isRequired,
        episode: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    })
}

export default EpisodeCard
