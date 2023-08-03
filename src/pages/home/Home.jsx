import React from 'react';
import Profile from '../../assets/lionel.jpeg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import "./home.css";
import { gsap } from "gsap";

const Home = () => {

    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
      };
      const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, 1.5, { backgroundColor: "#e77614",ease: "bounce.out", scale: 1.1});
      };
    return (
        <section className="home section grid">
            <img src={Profile} alt="" className="home__img" onMouseEnter={onEnter} onMouseLeave={onLeave} />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>Hi, I'm Lionel Alangeh.</span> Full-Stack Web Developer
                    </h1>

                    <p className="home__description">
                        I'm a Turkey based software engineer & full-stack web developer focused on creating, crafting and writing clean and user-friendly experiences with my code.
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