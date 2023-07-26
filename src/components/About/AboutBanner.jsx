import React from 'react';
import Banner from '../Layout/Banner';
import bannerAbout from '../../styles/assets/bannerAbout-kasa.png'

function AboutBanner(){
    return (
        <Banner
            title="À propos"
            src={bannerAbout}
        />
    )
}

export default AboutBanner;