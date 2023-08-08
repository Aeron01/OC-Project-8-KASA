import React from 'react';
import NoMatchContent from '../../components/noMatch/noMatchContent';
import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';

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