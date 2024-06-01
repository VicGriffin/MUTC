import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import hero_img from "./assets/hero.jpeg"
// import herot_img from "./assets/herot.jpeg"

const Hero = () => {
    return(
        <div className="hero">
            <div className="hero-left">

            <div className="ad">
            <div></div>
            <span>  </span>
            </div>
            <div className='hero-text'>
                <span className='stroke-text'> welcome </span><span>mutech club</span>
                <div>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae libero quae assumenda laborum tempora quas! Cupiditate aut fugit accusamus odit consequuntur amet veniam, ducimus cum natus blanditiis aspernatur, fuga vitae.</span>
            </div>
            </div>
            
            <div className="figures">
            <div>
                    <span>+12</span>
                    <span>Experts </span>
                </div><div>
                    <span>+150</span>
                    <span>members</span>
                </div><div>
                    <span>+5</span>
                    <span>programs</span>
                </div>
            </div>
            </div>
            
            <div className="hero-right">
                <button className='btn'>join us</button>

                <div className="visualiser">
                    <img src={hero_img} alt='' className='hero_image'/>
                    {/* <img src={herot_img} alt=''className='hero_image'/> */}
                </div>
            </div>
            
        </div>
    )
}



export default Hero;