import React from 'react';
import Error from '../layout/error/Error';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

function NoMatch() {
    return (
        <>
            <Header />
            <main>
                <Error />
            </main>
            <Footer />
        </>
    )
}

export default NoMatch;