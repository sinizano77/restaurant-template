import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import appTheme from './theme';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/Home/HomePage';
import MenuPage from './pages/Menu/MenuPage';
import AboutPage from './pages/About/About';
import LocationsPage from './pages/Locations/Locations';
import ContactPage from './pages/Contact/ContactPage';

function App() {
  return (

    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            #default parent route
            <Route index element={<HomePage/>} />
            <Route path="Menu" element={<MenuPage/>} />
            <Route path="About" element={<AboutPage/>} />
            <Route path="Locations" element={<LocationsPage/>} />
            <Route path="Contact" element={<ContactPage/>} />
            #Undefined URLs return to Home
            <Route path="*" element={<HomePage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    /**<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>**/
  );
}

export default App;
