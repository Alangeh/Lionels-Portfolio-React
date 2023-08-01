import React from 'react';
import Profile from '../../assets/lionel.jpeg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
    return (
        <section className="home section grid">
            <img src={Profile} alt="" className="home__img" />

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
        </section>
    )
}

export default Home