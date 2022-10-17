var firebaseConfig = {
      apiKey: "AIzaSyDgTUUybToVtWO1VKnV65rclJcaW9FjOLs",
      authDomain: "kwitter-938cd.firebaseapp.com",
      databaseURL: "https://kwitter-938cd-default-rtdb.firebaseio.com",
      projectId: "kwitter-938cd",
      storageBucket: "kwitter-938cd.appspot.com",
      messagingSenderId: "472127853547",
      appId: "1:472127853547:web:edb36e4f6e963ae52f7fae",
      measurementId: "G-BG9CD9DQ3Q"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + ":"; 
function addRoom() {

   room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
}) ;
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomname(this.id)' #"+Room_names+"</div> <hr>"
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) { console.log(name); 
      localStorage.setItem("room_name", name); 
      window.location = "kwitter_page.html"; }

      function logout() {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html";

      }