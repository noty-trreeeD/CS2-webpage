import React from 'react';
import './styles/App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Cases } from "./pages/Cases";
import { Main } from "./pages/Main";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import {CaseIdPage} from "./pages/CaseIDPage";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route exact path="/cases" element={<Cases />} />
                <Route exact path="/cases/:id" element={<CaseIdPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;
