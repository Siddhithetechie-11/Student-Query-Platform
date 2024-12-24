import React from 'react'
import './About.css'
import create_img from '../About/Create.png'
import post_img from '../About/post.png';
import find_img from '../About/find.png';

const About = () => {
    return (
        <div>
            <div className="bannar">
                <h1>SOLUTIONS OF ALL THE PROBLEMS</h1>
            </div>
            <div className="working-nav">
                <h1>How It Works</h1>
            </div>
            <div className="process">
                <div className="create">
                    <img src={create_img} alt="" />
                    <p>Create An Account</p>
                </div>
                <div className="create">
                    <img src={post_img} alt="" />
                    <p>Post Your Question</p>
                </div>
                <div className="create">
                    <img src={find_img} alt="" />
                    <p>Find Your Solution</p>
                </div>
            </div>
        </div>
    )
}

export default About