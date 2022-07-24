import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';

import Home from './Home';
import './index.css';
import Faculties from './Faculties';
import FacultyDetail from './FacultyDetail';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/faculties" element={<Faculties />}></Route>
            <Route path="/faculty/:id" element={<FacultyDetail />}></Route>
        </Route>
    </Routes>
    </BrowserRouter> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

