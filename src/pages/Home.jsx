import React from 'react';
import Header from '../layout/Header';
import HomeBanner from '../components/banner/Banner'
import DisplayCards from '../layout/home/DisplayCards'
import Footer from '../layout/Footer';

function Home() {
    return (
        <>
            <Header />
            <main>
                <HomeBanner
                    title="Chez vous, partout et ailleurs"
                    src="./assets/bannerHome-kasa.png"
                    altText="Bannière du site"
                 />
                <DisplayCards />
            </main>
            <Footer />
        </>
    )
}

export default Home;