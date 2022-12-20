import './App.css';
import {Route, Routes, Navigate} from "react-router-dom"
import CharactersPage from "./pages/characters.page";
import EpisodesPage from "./pages/episodes.page";
import LocationsPage from "./pages/locations.page";
import {Toaster} from "react-hot-toast";
import {Fragment, useEffect} from "react";
import Layout from "./components/Layout/layout.component";
import {successNotification} from "./helpers/notification.helper";

function App() {

    useEffect(() => {
        successNotification('Welcome to my app!')
    }, [])

    return (
        <Fragment>
            <Toaster/>
            <Layout>
                <Routes>
                    <Route path="/characters" element={<CharactersPage/>}/>
                    <Route path="/episodes" element={<EpisodesPage/>}/>
                    <Route path="/locations" element={<LocationsPage/>}/>
                    <Route path="/*" element={<Navigate to="/characters" replace/>}/>
                </Routes>
            </Layout>
        </Fragment>
    );
}

export default App;
