import {createContext, useState} from "react";
import Header from "../Header/header.component";


export const ThemeContext = createContext()
const {Provider} = ThemeContext

const Layout = ({children}) => {

    const [theme, setTheme] = useState('dark')
    const handleThemeChange = () => setTheme(theme === 'dark' ? 'light' : 'dark')

    return (
        <Provider value={{theme, handleThemeChange}}>
            <Header/>
            <div className={`background ${theme}`}>
                {children}
            </div>
        </Provider>
    )
}

export default Layout
