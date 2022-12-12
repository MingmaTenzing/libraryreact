import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import HighlightsContainer from './ui/HighlightContainer';


const Highlights = () => {
    return (
        <section id='highlights'>
            <div className='container'>
                <div className='row'>
                    <h2 className='section__title'>
                        Why Choose <span className='purple'> Library</span>
                    </h2>
                    <div className='highlight__wrapper'>
                       <HighlightsContainer iconname='bolt' title='Easy and Quick' description='Get access to the book you purchased online instantly'></HighlightsContainer>
                       <HighlightsContainer iconname='book-open' title='10,000+ Books' description='All your favorite books in one place'></HighlightsContainer>
                       <HighlightsContainer iconname='tags' title='Easy and Quick' description='Get your hands on popular books for as little as $10.'></HighlightsContainer>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Highlights