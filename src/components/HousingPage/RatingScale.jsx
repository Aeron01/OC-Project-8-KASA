import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-regular-svg-icons';

const checkStar = <FontAwesomeIcon icon={faStar} />
const uncheckStar = <FontAwesomeIcon icon={faStar} />

function RatingScale(props) {

    const scaleValue = props.scaleValue
    const range = [1, 2, 3, 4, 5]

    return (
        <div className="housing_page_header_hoster_ratings">
            {range.map((rangeElem) =>
            scaleValue >= rangeElem ? <span key={rangeElem.toString()} className="housing_page_header_hoster_ratings_star">{checkStar}</span>
            : <span key={rangeElem.toString()} className="housing_page_header_hoster_ratings_star_grey">{uncheckStar}</span>
            )}
        </div>
    )
}

export default RatingScale;