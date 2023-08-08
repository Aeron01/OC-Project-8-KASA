import React from "react";
import { faStar } from '@fortawesome/free-regular-svg-icons';


function RatingScale(props) {

    const scaleValue = props.scaleValue
    const range = [1, 2, 3, 4, 5]

    return (
        <div className="housing_page_header_hoster_ratings">
            {range.map((rangeElem) =>
            scaleValue >= rangeElem ? <span key={rangeElem.toString()} className="housing_page_header_hoster_ratings_star">{faStar}</span>
            : <span key={rangeElem.toString()} className="housing_page_header_hoster_ratings_star_grey">{faStar}</span>
            )}
        </div>
    )
}

export default RatingScale;