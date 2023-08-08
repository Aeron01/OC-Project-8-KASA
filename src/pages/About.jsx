import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Banner from '../components/banner/Banner';
import AboutContent from '../layout/about/About';

function About() {
    return(
        <>
            <Header />
            <main>
                <Banner
                    title= ""
                    src='./assets/bannerAbout-kasa.png'
                    altText="bannière À propos"
                />
                <AboutContent />
            </main>
            <Footer />
        </>
    )
}

export default About;