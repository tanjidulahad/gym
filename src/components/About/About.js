import React from 'react';
import aboutimg from '../../images/about.png';
import './About.css';
const About = () => {
    return (
        <div className="about-section" id="about">
            <div className='container'>
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-img">
                            <img className='img-fluid' src={aboutimg} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-details">
                            <div className="about-text">
                            <h2>LEARN MORE ABOUT US</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi alias laudantium eveniet consequatur ipsam officia eaque! Dolorum, incidunt doloribus pariatur vero delectus quaerat laborum eum soluta illo. Natus, aliquid numquam. Nulla, reiciendis?</p>
                            <button>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;