import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const HighlightsContainer = ({iconname, title, description}) => {
    return (
        <div className='highlight'>
        <div className='highlight__img'>
            <FontAwesomeIcon icon= {iconname}></FontAwesomeIcon>
        </div>
        <h3 className="highlight__subtitle">{title}</h3>
        <p className="highlight__para">{description}</p>
    </div>

    )
}

export default HighlightsContainer