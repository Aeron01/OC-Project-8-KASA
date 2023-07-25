import React from 'react';
import NoMatchContent from '../componets/NoMatch/NoMatchContent';
import Header from '../componets/Layout/Header';
import Footer from '../componets/Layout/Footer';

function NoMatch() {
    return (
        <>
            <Header />
            <NoMatchContent />
            <Footer />
        </>
    )
}

export default NoMatch;