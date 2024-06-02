import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./testimonials.css";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Jane blessing",
            text: "I had always been fascinated by the potential of cloud computing but didn't know where to start. After getting lessons from MUTC on Cloud Engineering I was able to understand basics of cloud infrastructure to advanced topics like serverless computing and cloud security. The instructors were  professionals who provided valuable insights and practical advice. After completing the lessons, I earned my MUTC Certified Solutions Architect certification and secured a job as a cloud engineer at a leading tech company while in school. Thank you MUTC!",
            image: "images/testimonials1.jpeg"
        },
        {
            name: "Alex Kimani",
            text: "I had always wanted to create my own mobile apps but had no idea where to start. The MUTC lessons provided a comprehensive introduction to both iOS and Android development. The course covered everything from UI/UX design principles to coding in Swift and Kotlin. The project-based approach was incredibly effective, allowing me to build and deploy several apps after acquiring the skills. The mentors were supportive and always available to help with any challenges I faced. Today, I have my own app on the App Store and am working as a mobile app developer for a tech startup.",
            image: "images/testimonials2.jpeg"
        },
        {
            name: "Emmah Kiarie",
            text: "Coming from a non-technical background, I was initially nervous about diving into web development. However, the Web Development lessons from MUTC exceeded my expectations.  The instructors were patient and provided clear, detailed explanations. The collaborative environment was a huge plus, as I could work on projects with my peers and learn from their perspectives. In the end, I had built a portfolio of projects that showcased my skills. I am now employed as a front-end developer, and I owe it all to the comprehensive and hands-on approach of this program.",
            image: "images/testimonials3.jpeg"
        }
    ];

    return (
        <div className="testimonials-container">
            <h2>TESTIMONIALS</h2>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={testimonial.image} alt={`${testimonial.name}'s image`} className="testimonial-image" />
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <h3 className="testimonial-name">{testimonial.name}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;
