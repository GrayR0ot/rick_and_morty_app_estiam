import {GlobalContext} from "../Layout.component";
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
            <div className={`logo ${theme}`}>Rick & Morty</div>
            <nav>
                <Link to="/characters"><a className={theme}>Characters</a></Link>
                <Link to="/episodes"><a className={theme}>Episodes</a></Link>
                <Link to="/locations"><a className={theme}>Locations</a></Link>
            </nav>
            <button onClick={handleThemeChange} className={`dark-light-toggle ${theme}`}>
                {capitalize(theme)} Mode
            </button>
        </header>
    )
}

export default Header
