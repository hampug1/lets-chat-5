var firebaseConfig = {
  apiKey: "AIzaSyD3HPVSzDs0WUBbEG-tbG-J9AUO4moFoRc",
    authDomain: "lets-chat-web-app-91271.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-91271-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-91271",
    storageBucket: "lets-chat-web-app-91271.appspot.com",
    messagingSenderId: "31281579056",
    appId: "1:31281579056:web:9486989d40197ab25c19f5"
  };
  
  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



