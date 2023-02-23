const firebaseConfig = {
  apiKey: "AIzaSyACsP2QNiw7Pn-DLmp7t14mPABEXXJcLKw",
  authDomain: "rest-45930.firebaseapp.com",
  databaseURL: "https://rest-45930-default-rtdb.firebaseio.com",
  projectId: "rest-45930",
  storageBucket: "rest-45930.appspot.com",
  messagingSenderId: "189807751545",
  appId: "1:189807751545:web:20f669b61805dd63953fa8",
  measurementId: "G-9G8H2VWVEK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
  userName = document.getElementById("userName").value;

  firebase.database().ref("/").child(userName).update({
    purpose: "adicionar"
  });

  localStorage.setItem("userName", userName);

  window.location = "kwitterRoom.html";
}