import React from 'react';
import Profile from '../../assets/profile.jpeg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import "./home.css";
import { gsap } from "gsap";

const Home = () => {

    const onLeavePicture = ({ currentTarget }) => {
        gsap.to(currentTarget, { ease: "bounce.out", scale: 1 });
    };
    const onEnterPicture = ({ currentTarget }) => {
        gsap.to(currentTarget, { ease: "bounce.out", scale: 1.1 });
    };

    return (
        <section className="home section grid">
            <img src={Profile} alt="" className="home__img" onMouseEnter={onEnterPicture} onMouseLeave={onLeavePicture} />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>Hi, I'm Lionel Ngobesing.</span> Sr. Software Developer
                    </h1>

                    <p className="home__description">
                        I'm a Krakow/Poland-based backend developer currently working at Euroclear (for HCL Technologies), focused on creating, crafting and writing clean and user-friendly experiences with my code.
                        I am passionate about creating outstanding software and solutions, while giving my best to improve the lives of those around me and making their jobs easier.
                    </p>

                    <Link to='/about' className='button'>
                        More About Me {''}
                        <span className='button__icon'>
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>
            </div>

            <div className="color__block"></div>
        </section>
    )
}

export default Home