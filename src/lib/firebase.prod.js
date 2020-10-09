import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDDcQYYVl7mr2n3pThLSwhV0KM3hzMqY5w',
  authDomain: 'netflix-clone-b5502.firebaseapp.com',
  databaseURL: 'https://netflix-clone-b5502.firebaseio.com',
  projectId: 'netflix-clone-b5502',
  storageBucket: 'netflix-clone-b5502.appspot.com',
  messagingSenderId: '565958031364',
  appId: '1:565958031364:web:c0465e7ea9c7d543c1dd51',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
