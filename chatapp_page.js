//YOUR FIREBASE LINKS
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

    user_name = localStorage.getItem("user_name");
    user_name = localStorage.getItem("user_name");
    
    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0

          })
    };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         name = message_data['name'];
         messag = message_data['message'];
         like = like_data['like'];
         name_with_tag = "<h4>"+name+"<img class = 'user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class = 'message_h4'>"+ message+"</h4>";
         like_button = "<button class = 'btn btn-info' id ="+firebase_message_id+"  value = "+like+" onlick = 'updateLike(this.id)'>" 
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like :"+ like+"</span></button><hr>";
        row = name_with_tag + message_with_tag + like_button + span_with_tag;
        document.getElementById("output").innerHTML += row;
//Start code

//End code
      } });  }); }
getData();

function updateLike(message_id)
{
button_id = message_id ;
likes = document.getElementById(button_id).value;
update_likes =Number(likes)+1;

firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes
});
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}