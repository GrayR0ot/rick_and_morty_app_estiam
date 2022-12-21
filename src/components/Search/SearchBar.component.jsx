import {GlobalContext} from "../Layout/Layout.component";
import {useContext} from "react";

const SearchBarComponent = () => {

    const {search, handleSearchChange} = useContext(GlobalContext)

    return (<div className="search">
        <input value={search} onChange={(e) => handleSearchChange(e.target.value)} placeholder="Search your content here!"/>
    </div>)
}

export default SearchBarComponent
