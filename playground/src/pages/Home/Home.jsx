import React from 'react'
import './Home.css';


const Home = () => {
    return (
    <div className='home-page'>
        <div className='top-box'>
            <h1 className='header'>Welcome to The Meme Playground!</h1>
            <div className='links-to-playgrounds'>
                <a className='pl-link' href='/norcal'>NorCal</a>
                <a className='pl-link' href='/socal'>SoCal</a>
                <a className='pl-link'href='/oos'>Out of State</a>
                <a className='pl-link'href='/international'>International</a>
            </div>
        </div>
    </div>
    );
};

export default Home;