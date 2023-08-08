import React from 'react';
import Header from '../layout/Header';
import HousingPage from '../layout/housingPage/HousingPage'
import Footer from '../layout/Footer';

function Housing() {
    return (
        <>
            <Header />
            <main>
                <HousingPage />
            </main>
            <Footer />
        </>
    )
}

export default Housing;