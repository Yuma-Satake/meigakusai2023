// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDO62i3eEhRC5kj_UFMEroD-AQlH1-uT6k',
  authDomain: 'meigakusai2023.firebaseapp.com',
  projectId: 'meigakusai2023',
  storageBucket: 'meigakusai2023.appspot.com',
  messagingSenderId: '334877287249',
  appId: '1:334877287249:web:4f4bdfcc17ba6260902970',
  measurementId: 'G-R32HCRJSJR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
