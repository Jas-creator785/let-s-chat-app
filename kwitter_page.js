const firebaseConfig = {
    apiKey: "AIzaSyC2_lXg28IzL814ghjCMZlz6fUgmNslEnY",
    authDomain: "kwitter-web-app-e9e4d.firebaseapp.com",
    databaseURL: "https://kwitter-web-app-e9e4d-default-rtdb.firebaseio.com",
    projectId: "kwitter-web-app-e9e4d",
    storageBucket: "kwitter-web-app-e9e4d.appspot.com",
    messagingSenderId: "230590392214",
    appId: "1:230590392214:web:d9215489ccc49902585fb7",
    measurementId: "G-19PNT017FR"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   user_name= localStorage.getItem("user_name_key");
room_name= localStorage.getItem("room_name_key");
document.getElementById("room_name").innerHTML=" Welcome in room "+ room_name;
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         getData();

         function logout(){
            localStorage.removeItem("room_name_key");
            localStorage.removeItem("user_name_key");
            window.location=("index.html");
        }

        function send(){
            msg= document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
            });
            document.getElementById("msg").value=" ";
        }