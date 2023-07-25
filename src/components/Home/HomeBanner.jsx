import React from 'react';
import Banner from '../Layout/Banner'
import homeBanner from '../../styles/assets/bannerHome-kasa.png'

function HomeBanner(){
    return (
        <Banner
        title= "Chez vous, partout et ailleurs"
        src={homeBanner}
        />
    )
}

export default HomeBanner;