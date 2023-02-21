const firebaseConfig = {
  apiKey: "AIzaSyBAcdZ1hlUZRzdj7Qxca-9mr9Yldg4-GYE",
  authDomain: "aula93-7aeb0.firebaseapp.com",
  databaseURL: "https://aula93-7aeb0-default-rtdb.firebaseio.com",
  projectId: "aula93-7aeb0",
  storageBucket: "aula93-7aeb0.appspot.com",
  messagingSenderId: "832150375879",
  appId: "1:832150375879:web:e9a17cdaad596f2ce29de2"
};
firebase.initializeApp(firebaseConfig);



function addUser() {
  userName = document.getElementById("userName").value;

  firebase.database().ref("/").child(userName).update({
    purpose: "adicionar"
  });

  localStorage.setItem("userName", userName);

  window.location = "kwitterRoom.html";
}