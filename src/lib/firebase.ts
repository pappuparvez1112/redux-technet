// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDrGWimeSDLagdQUVcPr9W76pf1PDb9m2o',
  authDomain: 'tech-net-8625e.firebaseapp.com',
  projectId: 'tech-net-8625e',
  storageBucket: 'tech-net-8625e.appspot.com',
  messagingSenderId: '625345636060',
  appId: '1:625345636060:web:0b502c1825215aaa2bf619',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
