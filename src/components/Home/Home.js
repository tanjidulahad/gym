import React from 'react';
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';
import Features from '../Features/Features';
import Header from '../Header/Header';
import Offer from '../Offer/Offer';
import BackToTop from '../shared/BackToTop/BackToTop';
import Navbar from '../shared/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Features/>
            <Offer/>
            <About/>
            <ContactUs/>
            <BackToTop/>
        </div>
    );
};

export default Home;