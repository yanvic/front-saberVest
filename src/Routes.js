import {BrowserRouter, Route, Routes,} from "react-router-dom";

import SearchPage from "./views/search/Search";
import Home from "./views/home/Home";
import UniversityPage from "./views/university/Search";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/university/:name" element={<SearchPage/>} />
                <Route path="/university" element={<UniversityPage/>} />
            </Routes>
        </BrowserRouter>

    );
}

export default AppRoutes;