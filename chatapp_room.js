var firebaseConfig = {
      apiKey: "AIzaSyAUUsqtxVyjTUdLCFyI0MO15xB9YLaymrU",
      authDomain: "kwitter-8029c.firebaseapp.com",
      databaseURL: "https://kwitter-8029c-default-rtdb.firebaseio.com",
      projectId: "kwitter-8029c",
      storageBucket: "kwitter-8029c.appspot.com",
      messagingSenderId: "289065526006",
      appId: "1:289065526006:web:d5108745704e302018c2d7",
      measurementId: "G-KT6LL2JC4P"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics(); 
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" +user_name+"!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child("room_name").update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location ="chatapp_page.html";

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
row = "<div class = 'room_name' id = "+ Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById(output).innerHTML+=row;

      
     
      });});}
getData();

function redirectToRoomName(name)
{
      localStorage.setItem("room_name",name);
      window.location = "chatapp_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}
function login()
{
      localStorage.addItem("user_name");
}

