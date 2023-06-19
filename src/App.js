import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ColorModeSwitcher from "./ColorModeSwitcher"
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer'
import Videos from './components/Videos';

function App() {
  return (
    <>
    <BrowserRouter>
      <ColorModeSwitcher />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/videos' element={<Videos />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>

    </>
  )
}

export default App;
