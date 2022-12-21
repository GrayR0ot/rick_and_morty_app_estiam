import './App.css';
import {Route, Routes, Navigate} from "react-router-dom"
import {Toaster} from "react-hot-toast";
import {Fragment, lazy, Suspense, useEffect} from "react";
import Layout from "./components/Layout/layout.component";
import {successNotification} from "./helpers/notification.helper";

const CharactersPage = lazy(() => import("./pages/characters.page"));
const EpisodesPage = lazy(() => import("./pages/episodes.page"));
const LocationsPage = lazy(() => import("./pages/locations.page"));

function App() {

    useEffect(() => {
        successNotification('Welcome to my app!')
    }, [])

    return (
        <Fragment>
            <Toaster/>
            <Layout>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Routes>
                        <Route path="/characters" element={<CharactersPage/>}/>
                        <Route path="/episodes" element={<EpisodesPage/>}/>
                        <Route path="/locations" element={<LocationsPage/>}/>
                        <Route path="/*" element={<Navigate to="/characters" replace/>}/>
                    </Routes>
                </Suspense>
            </Layout>
        </Fragment>
    );
}

export default App;
