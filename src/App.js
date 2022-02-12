import './App.css';
import React from 'react';
import Container from '@mui/material/Container';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage';

const App = function () {
    return (
        <div className="appWrapper">
            <Router>
                <Container maxWidth="lg">
                    <Header />
                    <MainPage />
                </Container>
            </Router>
        </div>
    );
};

export default App;
