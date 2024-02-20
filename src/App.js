import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './services/AuthContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AppPage from './pages/AppPage';
import Register from './pages/Register';
import Login from './pages/Login';

import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <header className="App-header">
                    <Header />
                </header>

                <main className="App-main">
                    <Routes>
                        <Route path="/" element={<div className="Main"><Home /></div>} />
                        <Route path="/inscription" element={<div className="Main"><Register /></div>} />
                        <Route path="/connexion" element={<div className="Main"><Login /></div>} />
                        <Route path="/app" element={<div className="Main"><PrivateRoute element={<AppPage />} /></div>} />
                    </Routes>
                </main>

                <footer className="App-footer">
                    <Footer />
                </footer>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;