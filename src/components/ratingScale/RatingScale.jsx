import React from "react";
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function RatingScale({scaleValue}) {

    return (
        <div className="ratings">
            {[1, 2, 3, 4, 5].map(r => <span key={r} className={"ratings_stars"+(scaleValue < r ? "ratings_stars_gray" : "" )}>
                <FontAwesomeIcon icon={faStar} />
                </span> )}
        </div>
    )
}

export default RatingScale;