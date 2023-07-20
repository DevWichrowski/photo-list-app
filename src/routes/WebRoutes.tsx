import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import PhotoDetail from "../pages/PhotoDetail/PhotoDetail";
import NotFound from "../pages/NotFound/NotFound";

const WebRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/photos/:id" element={<PhotoDetail />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default WebRoutes;
