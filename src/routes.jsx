import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Dashboard } from './pages/Dashboard';
import { Authenticate } from "./pages/Authenticate"
import { Catalog } from "./pages/Catalog";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Authenticate/>} path="/" exact />
                <Route element={<Dashboard/>} path="/dashboard"  />
                <Route element={<Catalog/>} path="/catalog"/> 
            </Routes>
        </BrowserRouter>
    )
}
