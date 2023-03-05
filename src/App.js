import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import RouterLayout from './components/RouterLayout.js'

import HomePage from './components/HomePage.js'
import AboutPage from './components/AboutPage.js'
import ContactPage from './components/ContactPage.js'
import NotFoundPage from './components/NotFoundPage.js'
import SignInPage from "./components/SignInPage.js";


import './App.scss'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RouterLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contacts" element={<ContactPage />} />
              <Route path="signIn" element={<SignInPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        
      </div>
    );
  }
}



export default App;
