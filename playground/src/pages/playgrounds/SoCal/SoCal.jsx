import React from 'react';
import '../playgrounds.css';
import memeData from '../../../memes/memes';

const SoCal = () => {
    return (
        <div className='playground-page'>
            <h1>Southern California's Top Memes:</h1>
            <div className='meme-list'>
            {
                // memeData.norcalMemes.map((meme => {
                //     <img src={meme}></img>
                // }))
                
                memeData.socalMemes.map(el => {
                    return <p>{el}</p>
                })
            }
        </div>
        </div>
        );
};

export default SoCal;