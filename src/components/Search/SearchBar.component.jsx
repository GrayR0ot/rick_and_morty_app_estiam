import {GlobalContext} from "../Layout/Layout.component";
import {useContext} from "react";
import "./searchbar.css"

const SearchBarComponent = () => {

    const {search, handleSearchChange} = useContext(GlobalContext)

    return (
        <div className="search-container">
            <input className="search-input" value={search} onChange={(e) => handleSearchChange(e.target.value)}
                   placeholder="Search by name..."/>
        </div>)
}

export default SearchBarComponent
