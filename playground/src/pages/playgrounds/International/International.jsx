import React from 'react';
import '../playgrounds.css';
import memeData from '../../../memes/memes';

const International = () => {

    return (
        <div className='playground-page'>
            <h1>International Students' Top Memes:</h1>
            <div className='meme-list'>
            {
                memeData.internationalMemes.map((meme => {
                    return <img src={meme}></img>
                }))
                
                // memeData.internationalMemes.map(el => {
                //     return <p>{el}</p>
                // })
            }
        </div>
        </div>
        );
    };

export default International;