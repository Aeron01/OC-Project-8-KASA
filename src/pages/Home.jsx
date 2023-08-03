import React from 'react';
import Header from '../components/Layout/Header';
import HomeBanner from '../components/Home/HomeBanner'
import DisplayCards from '../components/Layout/Home/DisplayCards'
import Footer from '../components/Layout/Footer';

function Home() {
    return (
        <>
            <Header />
            <HomeBanner />
            <DisplayCards />
            <Footer />
        </>
    )
}

export default Home;