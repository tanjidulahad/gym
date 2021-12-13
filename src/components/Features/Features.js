import React from 'react';
import './Features.css';
const Features = () => {
    return (
        <div className="feature-section" id="feature">
            <h2 className='feature-title'>Features</h2>
            <div className='container'>
                <div className="row">
                    <div className="col-md-3">
                        <div className="feature-icon">
                            <i class="fas fa-dumbbell"></i>
                        </div>
                        <div className="feature-detail">
                            <h3>WeightLifting</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, repellendus!</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature-icon">
                            <i class="fas fa-running"></i>
                        </div>
                        <div className="feature-detail">
                            <h3>Specefic Muscle</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, repellendus!</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature-icon">
                            <i class="fas fa-biking"></i>
                        </div>
                        <div className="feature-detail">
                            <h3>Flex Your Muscle</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, repellendus!</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature-icon">
                            <i class="fas fa-heartbeat"></i>
                        </div>
                        <div className="feature-detail">
                            <h3>Cardio Exercise</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, repellendus!</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Features;