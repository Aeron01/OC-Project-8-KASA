import React from "react";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function RatingScale({scaleValue}) {

    return (
        <div className="ratings">
            {[1, 2, 3, 4, 5].map(r => <span key={r} className={"ratings_stars"+(scaleValue < r ? "_grey" : "" )}>
                <FontAwesomeIcon icon={faStar} />
                </span> )}
        </div>
    )
}

export default RatingScale;