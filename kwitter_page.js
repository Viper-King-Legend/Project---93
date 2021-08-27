var firebaseConfig = {
      apiKey: "AIzaSyByZsiWYBxRJzIwGA4c67aoPN9ZOo0wbLo",
      authDomain: "kwitter-classwork.firebaseapp.com",
      databaseURL: "https://kwitter-classwork-default-rtdb.firebaseio.com",
      projectId: "kwitter-classwork",
      storageBucket: "kwitter-classwork.appspot.com",
      messagingSenderId: "1022285732464",
      appId: "1:1022285732464:web:7d182d5d1faf9b88c9f2b5",
      measurementId: "G-VNSEPV6L7Y"
    };
    firebase.initializeApp(firebaseConfig);

    UserName = localStorage.getItem("Username");
    room_name = localStorage.getItem("roomName");

    function send(){

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({

            names: UserName,
            message: msg,
            like: 0

      });

      document.getElementById("msg").value = "";

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);

User_Name = message_data['names'];
Message = message_data['message'];
Likes = message_data['like'];

Name_with_tag = "<h4>" + User_Name + "<img src = 'tick.png' class = 'user_tick'> </h4>";
Message_with_tag = "<h4 class = 'message_h4'>" + Message + "</h4>";
Like_button = "<button class = 'btn btn-warning' id = " + firebase_message_id + " value = " + Likes + " onclick = 'updateLike(this.id)'>";
Span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like: " + Likes + "</span> </button> <hr>";
row = Name_with_tag + Message_with_tag + Like_button + Span_with_tag;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room_name).child(message_id).update({
		like : updated_likes  
	 });

}

function logout() {
localStorage.removeItem("UserName");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}