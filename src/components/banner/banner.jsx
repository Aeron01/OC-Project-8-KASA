import React from 'react';
import './banner.css'

function Banner(props) {
    return (
        <div className='banner'>
            <h1 className='banner_title'>{props.title}</h1>
            <img src={props.src} alt="banner-kasa" className='banner_img'/>
        </div>
    )
}

export default Banner;