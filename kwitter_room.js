const firebaseConfig = {
  apiKey: "AIzaSyCnGQ0488U4B47OGNdE3CvaIRSC4_LJ1Xo",
  authDomain: "project-93-22b1e.firebaseapp.com",
  databaseURL: "https://project-93-22b1e-default-rtdb.firebaseio.com",
  projectId: "project-93-22b1e",
  storageBucket: "project-93-22b1e.appspot.com",
  messagingSenderId: "1015250738309",
  appId: "1:1015250738309:web:3b676a1a597b1d39995dec",
  measurementId: "G-NXGJBYBBNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function room_name(){
  document.getElementById("room").Value;
  firebase.database().ref("/").child.room.update({
noodles:"spicy"
  })
}

uname=localStorage.getItem("user_name_key");
document.getElementById("uname").innerHTML=uname;

function add_room(){
  room_name=document.getElementById("room_name").value;
        localStorage.setItem("room_name_key");
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding_room_name"
        });
        window.location=("kwitter_page.html");
  }

  function logout(){
    localStorage.removeItem("room_name_key");
    localStorage.removeItem("user_name_key");
    window.location=("index.html");
}

function getData()
 {
       firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id='"+Room_names+"'onclick='redirect_to_room(this.id)'>"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirect_to_room(name){
      localStorage.setItem("room_name_key",name);
      window.location="kwitter_page.html";
}