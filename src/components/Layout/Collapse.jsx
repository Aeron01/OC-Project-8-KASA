import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons';

const angleUp = <FontAwesomeIcon icon={faAngleUp} />;
const angleDown = <FontAwesomeIcon icon={faAngleDown} />;

function Collapse(props){
    const [ openTab, setOpenTab ] = useState(false);

    function openTabHandler(){
        setOpenTab((openTab)=> !openTab);
    };

    return (
        <>
            <div onClick={openTabHandler} className='collapse_header'>
                <h2 className='collapse_header_title'>{props.title}</h2>
                {!openTab ? <i className='collapse_header_icon'>{angleDown}</i> : <i className='collapse_header_icon'>{angleUp}</i>}
            </div>
            {openTab &&
                <div className='collapse_content'>{props.content}</div>
            }
        </>
    )
}

export default Collapse;