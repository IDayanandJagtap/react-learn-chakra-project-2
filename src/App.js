import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ColorModeSwitcher from "./ColorModeSwitcher"
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
      <ColorModeSwitcher />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>

    </>
  )
}

export default App;
