import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB7fA2LsOUb9APHLia7e_XJv6ZmP23oIVg",
    authDomain: "mit-data-a70e1.firebaseapp.com",
    databaseURL: "https://mit-data-a70e1-default-rtdb.firebaseio.com",
    projectId: "mit-data-a70e1",
    storageBucket: "mit-data-a70e1.appspot.com",
    messagingSenderId: "960315785997",
    appId: "1:960315785997:web:a89b863736b1382ae52644",
    measurementId: "G-BSXHLNC9YN"
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
