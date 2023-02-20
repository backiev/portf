import './App.css'
import { useState } from 'react';
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Links } from './components/Links'
import { Preview } from './components/Preview'
import { Projects } from './components/Projects'
import { Title } from './components/Title'
import { Work } from './components/Work'

function App() {

  const [theme, setTheme] = useState(0);
  const currentThemes = [
    {id: 0, backgroundColor: "#242424", textColor: "white", borderColor: "white"}, 
    {id: 1, backgroundColor: "#fff", textColor: "black", borderColor: "black"}, 
    {id: 2, backgroundColor: "#343c60", textColor: "white", borderColor: "white"}
  ];
  // backgroundColor: "#242424" - 0 - Dark Theme
  // backgroundColor: "#eef" - 1 - White Theme
  // background-color: #343c60; - 2 - Cat Theme
  return (
    <div className='font-mono scroll-smooth transition-all ' style={{
      backgroundColor: currentThemes[theme].backgroundColor,
      color: currentThemes[theme].textColor}}>

      {/* HEADER */}
      <Header setTheme={setTheme} theme={theme} currentTheme={currentThemes[theme]}></Header>

      {/* MAIN CONTAINER */}
      <main className="mx-auto max-w-xl my-6 transition-all">

        {/* PREVIEW */}
        {theme === 2 ? <Preview></Preview> : ""}
        

        {/* MINE TITLE */}
        <Title currentTheme={currentThemes[theme]} ></Title>

        {/* Work block */}
        <Work></Work>

        {/* Projects block */}
        <Projects></Projects>

        {/* Links */}
        <Links></Links>

      </main>

      {/* FOOTER */}
      <Footer></Footer>
    </div>
  )
}

export default App
