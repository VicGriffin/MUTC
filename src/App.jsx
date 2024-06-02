// import { useState } from 'react'
import './App.css'
import Header from './components/header/Header.jsx';
// import Footer from "./components/footer/Footer.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home.jsx"
import Leadership from "./pages/leadership/Leadership.jsx"
import Tracks from "./pages/tracks/Tracks.jsx"
import Events from "./pages/events/Events.jsx"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/leadership" element={<Leadership/>} />
      <Route path="/tracks" element={<Tracks/>} />
      <Route path="/events" element={<Events/>} />
    </Routes>
      
      {/* <Footer/> */}
    </BrowserRouter>
    </>
  )
}

export default App
