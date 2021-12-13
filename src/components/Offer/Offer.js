import React from 'react';
import './Offer.css';

const Offer = () => {
    return (
        <div className='offer' id='offer'>
            <div className='offer-title'>
                <h1>A BIG <span>OFFER</span> FOR</h1>
                <br />
                <h1 className='this-summer'>THIS SUMMER</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <button>JOIN US</button>
            </div>
        </div>
    );
};

export default Offer;