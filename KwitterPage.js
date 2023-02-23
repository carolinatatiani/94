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
firebase.initializeApp(firebaseConfig)
userName = localStorage.getItem("userName");
roomName = localStorage.getItem("roomName");

function send() {
    mensagem = document.getElementById('mensagem').value;
    firebase.database().ref(roomName).push({
        nome: userName,
        message: mensagem,
        like: 0
    });
    document.getElementById('mensagem').value=""
}

function getData() {
    firebase.database().ref("/" + roomName).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebaseMessageId = childKey;
                messageData = childData;

                //Início do código
                console.log(firebaseMessageId)
                console.log(messageData)
                nome = messageData['nome'];
                message = messageData['message'];
                like = messageData['like'];
                nomeh4 = '<h4>' + nome + '</h4>'
                messageh4 = '<h4 class="message_h4">' + message + '</h4>'
                likebutton = '<button class="btn btn-warning" id=' + firebaseMessageId + 'value=' + like + 'onclick="updatedlikes(this.id)">';
                span = '<span class="glyphicon glyphicon-thumbs-up">like: ' + like + '</span></button><hr>';
                row = nomeh4 + messageh4 + likebutton + span;
                document.getElementById('output').innerHTML += row
                //Fim do código
            }
        });
    });
}
getData();
function updatedlikes(messageid) {
    console.log('botão clicado '+messageid)
    buttonid = messageid
    likes = document.getElementById(buttonid).value
    updatedlikes = Number(likes) + 1
    firebase.database.ref(roomName).child(messageid).update({
        like: updatedlikes
    });
}
function logout(){
    localStorage.removeItem('roomName')
    localStorage.removeItem('userName')
    window.location('index.html')
}