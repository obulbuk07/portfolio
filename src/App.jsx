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
        
        <Navbar />
        
        <Home/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Background/>
        <p className="text-center text-gray-400 text-xs py-8">@2026 Oleksandr Bulbuk - All rights reserver</p>
   </>
  )
}

export default App
