import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Banner from '../components/Banner/Banner';

function About() {
    return(
        <>
            <Header />
            <Banner
            title= "Chez vous, partout et ailleurs"
            src='../../styles/assets/bannerHome-kasa.png'
            />
            <Footer />
        </>
    )
}

export default About;