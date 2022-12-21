import {createContext, useState} from "react";
import Header from "../Header/Header.component";
import Loader from "../Loader/Loader.component";


export const GlobalContext = createContext()
const {Provider} = GlobalContext

const Layout = ({children}) => {

    const [theme, setTheme] = useState('dark')
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const handleThemeChange = () => setTheme(theme === 'dark' ? 'light' : 'dark')
    const handleSearchChange = (search) => setSearch(search)
    const handleLoadingChange = (loading) => setLoading(loading)

    return (
        <Provider value={{theme, handleThemeChange, search, handleSearchChange, loading, handleLoadingChange}}>
            <Loader loading={loading}/>
            <div style={{display: loading ? 'none' : 'block'}}>
                <Header/>
                <div className={`background ${theme}`}>
                    {children}
                </div>
            </div>
        </Provider>
    )
}

export default Layout
