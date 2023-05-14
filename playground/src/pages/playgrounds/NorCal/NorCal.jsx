import React from 'react';
import '../../playgrounds/playgrounds.css';
import memeData from '../../../memes/memes';

const NorCal = () => {
    return (
    <div className='playground-page'>
        <h1>Northern California's Top Memes:</h1>
        <div className='meme-list'>
            {
                // memeData.norcalMemes.map((meme => {
                //     <img src={meme}></img>
                // }))
                
                memeData.norcalMemes.map(el => {
                    return <p>{el}</p>
                })
            }

        </div>
    </div>
    );
    
};

export default NorCal;