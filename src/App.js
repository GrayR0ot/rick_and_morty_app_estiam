import './App.css';
import {Navigate, Route, Routes} from "react-router-dom"
import {Toaster} from "react-hot-toast";
import {lazy, Suspense, useEffect} from "react";
import Layout from "./components/Layout/Layout.component";
import {successNotification} from "./helpers/notification.helper";
import Loader from "./components/Loader/Loader.component";

const CharactersPage = lazy(() => import("./pages/Characters.page"));
const CharacterDetailPage = lazy(() => import("./pages/CharacterDetail.page"));
const EpisodesPage = lazy(() => import("./pages/Episodes.page"));
const EpisodeDetailPage = lazy(() => import("./pages/EpisodeDetail.page"));
const LocationsPage = lazy(() => import("./pages/Locations.page"));
const LocationDetailPage = lazy(() => import("./pages/LocationDetail.page"));

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
                    <Route path="/characters/:id" element={<CharacterDetailPage/>}/>
                    <Route path="/episodes" element={<EpisodesPage/>}/>
                    <Route path="/episodes/:id" element={<EpisodeDetailPage/>}/>
                    <Route path="/locations" element={<LocationsPage/>}/>
                    <Route path="/locations/:id" element={<LocationDetailPage/>}/>
                    <Route path="/*" element={<Navigate to="/characters" replace/>}/>
                </Routes>
            </Layout>
        </Suspense>
    );
}

export default App;
