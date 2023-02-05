import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Links } from './components/Links'
import { Preview } from './components/Preview'
import { Projects } from './components/Projects'
import { Title } from './components/Title'
import { Work } from './components/Work'

function App() {

  return (
    <div className='font-mono  scroll-smooth'>
      {/* HEADER */}
      <Header></Header>

      {/* MAIN CONTAINER */}
      <main className="mx-auto max-w-xl my-6">

        {/* PREVIEW */}
        <Preview></Preview>

        {/* MINE TITLE */}
        <Title></Title>

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
