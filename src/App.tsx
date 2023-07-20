import React, {ChangeEvent, useEffect, useState} from 'react';
import {IPhoto, useApi} from "./hooks/useApi";
import {BrowserRouter as Router, BrowserRouter, Route, Routes} from "react-router-dom";

import {debounce} from "./utils/funcs";

import './App.scss';
import WebRoutes from "./routes/WebRoutes";

const App = () => {
    return (
        <div className="App">
            <WebRoutes />
        </div>
    );
}

export default App;
