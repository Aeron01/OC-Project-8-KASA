import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import AboutBanner from '../components/About/AboutBanner'
import AboutContent from '../components/About/AboutContent'

function About() {
    return(
        <>
            <Header />
            <AboutBanner />
            <AboutContent />
            <Footer />
        </>
    )
}

export default About;