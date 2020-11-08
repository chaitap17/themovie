import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyB5ieKb774dPH-1uJRAgkF11tU7RLPq0kw',
    authDomain: 'themovie1-68348.firebaseapp.com',
    databaseURL: 'https://themovie1-68348.firebaseio.com',
    projectId: 'themovie1-68348',
    storageBucket: 'themovie1-68348.appspot.com',
    messagingSenderId: '483877127740',
    appId: '1:483877127740:web:565324d970f0a4af062539',
    measurementId: 'G-66ERFYBK7V',
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
