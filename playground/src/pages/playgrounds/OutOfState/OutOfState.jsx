import React from 'react';
import '../playgrounds.css';
import memeData from '../../../memes/memes';

const OutOfState = () => {
    return (
        <div className='playground-page'>
            <h1>Out of State Students' Top Memes:</h1>
            <div className='meme-list'>
            {
                // memeData.norcalMemes.map((meme => {
                //     <img src={meme}></img>
                // }))
                
                memeData.outOfStateMemes.map(el => {
                    return <p>{el}</p>
                })
            }
        </div>
        </div>
        );
};

export default OutOfState;