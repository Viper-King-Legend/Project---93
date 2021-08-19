var firebaseConfig = {
      apiKey: "AIzaSyDGyGB6KDZWBwoGcB7EE4L1W_0gnT9RbS4",
      authDomain: "kwitter-project-54bb5.firebaseapp.com",
      databaseURL: "https://kwitter-project-54bb5-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-54bb5",
      storageBucket: "kwitter-project-54bb5.appspot.com",
      messagingSenderId: "487719461647",
      appId: "1:487719461647:web:0d9fddded07d52e4f8947a",
      measurementId: "G-R98BSXBNLR"
    };
    firebase.initializeApp(firebaseConfig);

    userName = localStorage.getItem("Username");
    document.getElementById("user_name").innerHTML = "Welcome "+userName;

    function addRoom(){

      roomName = document.getElementById("roomName").value;
      firebase.database().ref("/").child(roomName).update({

            purpose: "Project"

      });

      localStorage.setItem("roomName",roomName);
      window.location = "kwitter_page.html";

    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       console.log(Room_names);
       row = "<div class='room_name'id="+Room_names+"onclick='redirect(this.id)'>#"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML+=row;

      });});}
getData();
