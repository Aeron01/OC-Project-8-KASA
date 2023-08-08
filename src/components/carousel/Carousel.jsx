import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

function Carousel({img}){
    const [index, setIndex] = useState(0);
    
    function next(){
       setIndex(current => (current + 1) % img.length)    
    }

    function prev(){
        setIndex(current => (current - 1 + img.length) % img.length)
    }

    return (
        <div className='carousel'>
            <div className='carousel_container'>
                    <img className="carousel_container_img" src={img[index]} alt="banniere-page-logement" />
            </div>
            {img.length > 1 && <>
            <div className='carousel_cmd'>
                <i className='carousel_cmd_arrow' onClick={prev}><FontAwesomeIcon icon={faChevronLeft} /></i>
                <i className='carousel_cmd_arrow' onClick={next}><FontAwesomeIcon icon={faChevronRight} /></i>
            </div>
            <div className='carousel_idx'>
                {index + 1} / {img.length}
            </div>
            </>}
        </div>
    )
}

export default Carousel;