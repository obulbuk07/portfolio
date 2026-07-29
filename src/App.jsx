import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Background from "./components/Backgroung"
import Lanyard from './components/Lanyard'

function App() {

  return (
   <>
        <Lanyard position={[0, 0, 20]} lanyardWidth={0.4} gravity={[0, -40, 0]} />
        <Navbar />
        <Home/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Background/>
   </>
  )
}

export default App
