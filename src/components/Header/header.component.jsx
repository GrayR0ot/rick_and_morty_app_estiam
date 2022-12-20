import {ThemeContext} from "../Layout/layout.component";
import {useContext, useEffect} from "react";
import {capitalize} from "lodash"
import './header.css'

const Header = () => {

    const {theme, handleThemeChange} = useContext(ThemeContext)

    useEffect(() => {
        console.log(theme)
    }, [theme])

    return (
        <header className={theme}>
            <div className="logo">Rick & Morty</div>
            <nav>
                <a href="#">Page1</a>
                <a href="#">Page2</a>
                <a href="#">Page3</a>
            </nav>
            <button onClick={handleThemeChange} className="dark-light-toggle">
                {capitalize(theme)} Mode
            </button>
        </header>
    )
}

export default Header
