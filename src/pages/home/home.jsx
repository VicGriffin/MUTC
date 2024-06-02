import React from "react"
import "./home.css"
import Hero from "./Hero.jsx"
import About from "../../components/about/About.jsx"
import Testimonials from "../../components/testimonials/Testimonials.jsx"

const Home = () => {
    return(
        <>
        <Hero/>
        <About/>
        <Testimonials/>
        </>
    )
}



export default Home;