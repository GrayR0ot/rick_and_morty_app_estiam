import {GlobalContext} from "../Layout/Layout.component";
import {useContext, useEffect} from "react";
import {capitalize} from "lodash"
import './header.css'
import {Link} from "react-router-dom";

const Header = () => {

    const {theme, handleThemeChange} = useContext(GlobalContext)

    useEffect(() => {
    }, [theme])

    return (
        <header className={theme}>
            <div className="logo">Rick & Morty</div>
            <nav>
                <Link to="/characters">Characters</Link>
                <Link to="/episodes">Episodes</Link>
                <Link to="/locations">Locations</Link>
            </nav>
            <button onClick={handleThemeChange} className="dark-light-toggle">
                {capitalize(theme)} Mode
            </button>
        </header>
    )
}

export default Header
