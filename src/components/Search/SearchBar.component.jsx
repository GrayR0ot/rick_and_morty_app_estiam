import {GlobalContext} from "../Layout/Layout.component";
import {useContext} from "react";
import "./searchbar.css"

const SearchBar = () => {

    const {search, handleSearchChange} = useContext(GlobalContext)

    return (
        <div className="search-bar">
            <input value={search} onChange={(e) => handleSearchChange(e.target.value)}
                   placeholder="Search by name..."/>
        </div>)
}

export default SearchBar
