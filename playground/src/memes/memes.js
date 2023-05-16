// ***** STEP #1 ******
// IMPORT MEME IMAGE FILES AT THE TOP OF THIS FILE
// AFTER PUTTING THEM IN THE MEME-IMAGES FOLDER.
// USE THE FOLLOWING FORMAT: 
// 'import [give-meme-a-name] from ./meme-images/[actual-name-of-the-file];'

// import norcal memes here
import thisIsFine from './meme-images/this-is-fine.jpeg';
import gru from "./meme-images/gru.jpg";

// import socal memes here
import lateToWork from './meme-images/late_to_work.webp';

// import out of state memes here
import tired from './meme-images/tired.png';

// import international memes here
import butterfly from './meme-images/butterfly.jpeg';
import gustavo from './meme-images/the_meme.jpg'



// ***** STEP #2 ******
// Add your meme (using the name you gave it)
// to the appropriate array below.
// Remember to add a comma after the previous meme
// before adding your new one, since array elements
// must be separated by commas.
const memeData = {

    norcalMemes: [
        thisIsFine,
        gru,
    ],

    socalMemes: [
        lateToWork
    ],

    outOfStateMemes: [
        tired
    ],
    
    internationalMemes: [
        butterfly
    ],
};


export default memeData;