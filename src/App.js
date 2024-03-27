import './App.css';
import { useState } from 'react';
import './components/css/Header-Footer.css'
import Header from "./components//header/Header";
import './components/css/style.css'
import Banner from './components/index/Banner';
import './components/css/global.css'
import Home from './components/index/Home';
import HomeBook from './components/index/HomeBook';
import EasySearch from './components/index/EasySearch';
import Youtube from './components/index/Youtube';


function App() {
  const [mode, setMode] = useState('light'); //Wheather dark Mode is enable or not.

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.querySelector("body").setAttribute("data-theme", "dark")
      document.body.style.color = "white";
    } else {
      setMode('light')
      document.querySelector("body").setAttribute("data-theme", "light")
      document.body.style.color = "black";

    }
  }
  return (
    <>
    <Header mode={mode} toggleMode={toggleMode}/>
    <Banner />
    <Home/>
    <HomeBook/>
    <Youtube/>
    <EasySearch/>
    </>
  );
}

export default App;
