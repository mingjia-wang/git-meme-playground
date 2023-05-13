import React from 'react';
import '../../playgrounds/playgrounds.css';
import pic1 from '../../../memes/norcal.png';
import pic2 from '../../../memes/socal.png';
import pic3 from '../../../memes/international.png';

const NorCal = () => {
    return (
    <div className='playground-page'>
        <h1>Northern California's Top Memes:</h1>
        <div className='meme-list'>
            <img src={pic1}></img>
            <img src={pic2}></img>
            <img src={pic3}></img>
        </div>
    </div>
    );
    
};

export default NorCal;