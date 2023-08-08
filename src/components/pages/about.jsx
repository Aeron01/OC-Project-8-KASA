import React from 'react';
import Header from '../layout/header';
import Footer from '../layout/footer';
import Banner from '../banner/banner';

function About() {
    return(
        <>
            <Header />
            <Banner
            title= "Chez vous, partout et ailleurs"
            src='../../../public/assets/bannerHome-kasa.png'
            />
            <Footer />
        </>
    )
}

export default About;