import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const arrowLeft = <FontAwesomeIcon icon={faAngleLeft} />;
const arrowRight = <FontAwesomeIcon icon={faAngleRight} />;

function Gallery(props){
    const [slideIdx, setSlideIdx] = useState(0);

    function imgSize() {
        const carouselImg = document.querySelector('.carousel_container img');
        if(!carouselImg){
            return(0);
        }
        return carouselImg.width;
    }

    function next(){
        if(slideIdx === props.img.length - 1) {
            setSlideIdx(0)
        } else {
            setSlideIdx(slideIdx + 1)
        }
    }

    function prev(){
        if(slideIdx === 0) {
            setSlideIdx(props.img.length - 1)
        } else {
            setSlideIdx(slideIdx - 1)
        }
    }

    return (
        <div className='carousel'>
            <div className='carousel_container' style={{transform: `translateX(-${slideIdx * imgSize()}px)`}}>
                {props.img.map((picture, i) =>
                    <img className="carousel_container_img" src="{picture}" alt="banniere-page-logement" key={i} />
                )}
            </div>
            {props.img.length > 1 && <>
            <div className='carousel_cmd'>
                <i className='carousel_cmd_arrow' onClick={prev}>{arrowLeft}</i>
                <i className='carousel_cmd_arrow' onClick={next}>{arrowRight}</i>
            </div>
            <div className='carousel_idx'>
                {slideIdx + 1} / {props.img.length}
            </div>
            </>}
        </div>
    )
}

export default Gallery;