import React from 'react';
import Header from '../componets/Layout/Header';
import HomeBanner from '../componets/Home/HomeBanner'
//import DisplayCards from '../componets/Home/DisplayCards'
import Footer from '../componets/Layout/Footer';

function Home() {
    return (
        <>
            <Header />
            <HomeBanner />
            {/*<DisplayCards />*/}
            <Footer />
        </>
    )
}

export default Home;