import './App.css';
import React,{useState,useEffect} from 'react';
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer.js'

function App() {

  const [theme,setTheme]=useState("light");

  useEffect(()=>{
    const saved=localStorage.getItem("theme") || "light";
    setTheme(saved);
  },[]);

  useEffect(()=>{
    document.body.className=theme;
    localStorage.setItem('theme',theme);
  },[theme]);

  const toggleTheme=()=>{
    setTheme(prev=>(prev==='light'?'dark':'light'));
  }

  return (
    <div className="App">
      <Nav 
      toggleTheme={toggleTheme}
      theme={theme}
      setTheme={setTheme}   
       />
      <Home />
      <Footer
      theme={theme}
      setTheme={setTheme} />
    </div>
  );
}

export default App;
