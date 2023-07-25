import React from 'react';
import NoMatchContent from '../components/NoMatch/NoMatchContent';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

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