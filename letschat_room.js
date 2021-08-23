var firebaseConfig = {
    apiKey: "AIzaSyCc6avifCN1K-I5WtHPKydhlbihTolNyKI",
    authDomain: "lets-chat-2f375.firebaseapp.com",
    databaseURL: "https://lets-chat-2f375-default-rtdb.firebaseio.com",
    projectId: "lets-chat-2f375",
    storageBucket: "lets-chat-2f375.appspot.com",
    messagingSenderId: "303212452362",
    appId: "1:303212452362:web:2466b5658780f5ea78ddf3",
    measurementId: "G-KZ40LVNL7W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="letschat_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row;
    });});}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "letschat_page.html";
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="letschat.html";  
}