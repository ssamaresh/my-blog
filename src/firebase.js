import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
 // config object goes here
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

// Just for DEV
if(process.env.NODE_ENV === 'development') {
  window.firebase = firebase;
}

export default firebase;
