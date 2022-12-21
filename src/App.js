import './App.css';
import {Navigate, Route, Routes} from "react-router-dom"
import {Toaster} from "react-hot-toast";
import {lazy, Suspense, useEffect} from "react";
import Layout from "./components/Layout/Layout.component";
import {successNotification} from "./helpers/notification.helper";
import Loader from "./components/Loader/Loader.component";

const CharactersPage = lazy(() => import("./pages/characters.page"));
const EpisodesPage = lazy(() => import("./pages/episodes.page"));
const LocationsPage = lazy(() => import("./pages/locations.page"));

function App() {

    useEffect(() => {
        successNotification('Welcome to my app!')
    }, [])

    return (
        <Suspense fallback={<Loader/>}>
            <Toaster/>
            <Layout>
                <Routes>
                    <Route path="/characters" element={<CharactersPage/>}/>
                    <Route path="/episodes" element={<EpisodesPage/>}/>
                    <Route path="/locations" element={<LocationsPage/>}/>
                    <Route path="/*" element={<Navigate to="/characters" replace/>}/>
                </Routes>
            </Layout>
        </Suspense>
    );
}

export default App;
