import {createContext, Fragment, useState} from "react";
import Header from "../Header/Header.component";
import Loader from "../Loader/Loader.component";


export const GlobalContext = createContext()
const {Provider} = GlobalContext

const Layout = ({children}) => {

    const [theme, setTheme] = useState('dark')
    const [search, setSearch] = useState('')
    const handleThemeChange = () => setTheme(theme === 'dark' ? 'light' : 'dark')
    const handleSearchChange = (search) => setSearch(search)

    return (
        <Provider value={{theme, handleThemeChange, search, handleSearchChange}}>
            <Header/>
            <div className={`background ${theme}`}>
                {children}
            </div>
        </Provider>
    )
}

export default Layout
