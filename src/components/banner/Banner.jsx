import React from 'react';
import './index.css'

function Banner(props) {
    return (
        <div className='banner'>
            <h1 className='banner_title'>{props.title}</h1>
            <img src={props.src} alt={props.altText} className='banner_img'/>
        </div>
    )
}

export default Banner;