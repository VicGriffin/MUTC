import "./about.css"
import { Link } from "react-router-dom"
import about_img from "../about/assets/about.jpeg"

const About = () =>{
    return(
        <section className="aboutme">

            <div className="heading">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, corporis! Cupiditate, ipsa sed dolor cumque quidem impedit, in nobis sit, totam consectetur dignissimos omnis. Itaque laborum quos magni nulla animi.</p>
            </div>
                <section className="about">
                    <div className="class-image">
                        
                <img src={about_img} alt="" />
                    </div>
                    <div className="about-content">
                        <h2>grow in tech grow in life</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, blanditiis accusamus cupiditate quidem iste dolor, necessitatibus repudiandae facere consequatur magni perferendis tempore quam nemo impedit qui dolores! Debitis, ipsum deleniti.</p>
                    </div>
                </section>
                
            
        </section>

    )
}
export default About;
