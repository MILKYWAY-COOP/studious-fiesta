import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBqLKybjw_Dnhh5YwMcFRDMNBHdFUfcjXw',
  authDomain: 'goddy-bf35e.firebaseapp.com',
  projectId: 'goddy-bf35e',
  storageBucket: 'goddy-bf35e.appspot.com',
  messagingSenderId: '584875464224',
  appId: '1:584875464224:web:0beb18699b0091c3444e45',
  measurementId: 'G-QLS79ZQR5Y'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
