import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCbrFW8PXBAPDkxwRtuHykwoJajHA8LAmk',
  authDomain: 'zenmoney-e1303.firebaseapp.com',
  projectId: 'zenmoney-e1303',
  storageBucket: 'zenmoney-e1303.appspot.com',
  messagingSenderId: '957102500576',
  appId: '1:957102500576:web:a9037aab4b6f2298fafe85',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectAuth, projectFirestore };
