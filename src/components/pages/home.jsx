import React from 'react';
import Header from '../layout/header';
import HomeBanner from '../banner/banner'
import DisplayCards from '../layout/home/displayCards'
import Footer from '../layout/footer';

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