
const firebaseConfig = {
      apiKey: "AIzaSyDehA8sGXAiH_YFXuIn_avZv60_197eHVQ",
      authDomain: "let-s-chat-fac81.firebaseapp.com",
      databaseURL: "https://let-s-chat-fac81-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-fac81",
      storageBucket: "let-s-chat-fac81.appspot.com",
      messagingSenderId: "278242589370",
      appId: "1:278242589370:web:e3ba21afaf1dd05b692083",
      measurementId: "G-DHDQ07JPXJ"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
