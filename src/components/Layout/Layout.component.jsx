import {createContext, useState} from "react";
import Header from "./Header/Header.component";
import Loader from "../Loader/Loader.component";
import "./layout.css"
import Footer from "./Footer/Footer.component";


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
            <div className={`background ${theme}`} style={{display: loading ? 'none' : 'block'}}>
                <Header/>
                <div className={`container ${theme}`}>
                    {children}
                </div>
                <Footer/>
            </div>
        </Provider>
    )
}

export default Layout
