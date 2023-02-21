
const firebaseConfig = {
  apiKey: "AIzaSyBAcdZ1hlUZRzdj7Qxca-9mr9Yldg4-GYE",
  authDomain: "aula93-7aeb0.firebaseapp.com",
  databaseURL: "https://aula93-7aeb0-default-rtdb.firebaseio.com",
  projectId: "aula93-7aeb0",
  storageBucket: "aula93-7aeb0.appspot.com",
  messagingSenderId: "832150375879",
  appId: "1:832150375879:web:e9a17cdaad596f2ce29de2"
};
firebase.initializeApp(firebaseConfig)
userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom() {
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose: "adicionar nome de sala"
  });

  localStorage.setItem("roomName", roomName);

  window.location = "kwitterPage.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      roomNames = childKey;
      console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id=" + roomNames + " onclick='redirectToRoomName(this.id)' >#" + roomNames + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location = "kwitterPage.html";
}

function logout() {
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}

