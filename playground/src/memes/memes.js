// ***** STEP #1 ******
// IMPORT MEME IMAGE FILES AT THE TOP OF THIS FILE
// AFTER PUTTING THEM IN THE MEME-IMAGES FOLDER.
// USE THE FOLLOWING FORMAT:
// 'import [give-meme-a-name] from ./meme-images/[actual-name-of-the-file];'

// import norcal memes here
import thisIsFine from './meme-images/this-is-fine.jpeg';
import jawDrop from './meme-images/jaw-drop.JPG';
import gru from "./meme-images/gru.jpg";
import kermit from "./meme-images/kermit.png";
import BirdTriesToEatCapy from './meme-images/BirdTriesToEatCapy.png';

// import socal memes here
import lateToWork from './meme-images/late_to_work.webp';
import socalWhenItRains from './meme-images/socal-meme-rain.png';
import sleepDeprived from './meme-images/sleep-deprived.jpg';
import workingAndCrying from './meme-images/workingAndCrying.jpg';
import gitworkshopmeme from './meme-images/gitworkshopmeme.png';
import gitWorkshopExpandingBrain from './meme-images/git-workshop-expanding-brain.png';
import loggers from './meme-images/loggers.png';

// import out of state memes here
import tired from './meme-images/tired.png'

// import international memes here
import butterfly from './meme-images/butterfly.jpeg'
import gustavo from './meme-images/the_meme.jpg'

// import rochelle meme here
import rochelle from './meme-images/rochelle.jpg'

// ***** STEP #2 ******
// Add your meme (using the name you gave it)
// to the appropriate array below.
// Remember to add a comma after the previous meme
// before adding your new one, since array elements
// must be separated by commas.
const memeData = {
  norcalMemes: [thisIsFine, gru],

    norcalMemes: [
        thisIsFine,
        jawDrop,
        gru,
        kermit,
        BirdTriesToEatCapy
    ],

    socalMemes: [
        lateToWork,
        socalWhenItRains,
        sleepDeprived,
        workingAndCrying,
        gitworkshopmeme,
        gitWorkshopExpandingBrain,
        loggers
    ],

    outOfStateMemes: [
        tired
    ],
    
    internationalMemes: [
        butterfly,
        gustavo
    ],
};

export default memeData
