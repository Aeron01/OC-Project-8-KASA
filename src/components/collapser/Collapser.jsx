import React, { useState} from 'react';
import { faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DrawChevron({down}) {
    return (
        <FontAwesomeIcon
        icon={down? faAngleDown : faAngleUp}
        />
    )
} 

function Collapse(props){
    const [ openTab, setOpenTab ] = useState(false);

    function openTabHandler(){
        setOpenTab((current)=> !current);
    };

    return (
        <>
            <div onClick={openTabHandler} className='collapse_header'>
                <h2 className='collapse_header_title'>{props.title}</h2>
                <i className='collapse_header_icon'><DrawChevron down={openTab} /></i>
            </div>
            
            {openTab &&
                <div className='collapse_content'>{props.content}</div>
            }

        </>
    )
}

export default Collapse;