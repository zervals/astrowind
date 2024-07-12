import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBIEn3hMNm2GC24YYImkfA93flmPV1JfHo',
  authDomain: 'website-22d07.firebaseapp.com',
  projectId: 'website-22d07',
  storageBucket: 'website-22d07.appspot.com',
  messagingSenderId: '239309287004',
  appId: '1:239309287004:web:0299335495932bf1358099',
  measurementId: 'G-KLP94TXY10',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
