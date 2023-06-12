// Fire base config

const firebaseConfig = {
  apiKey: "AIzaSyAU5-3LSFh960OGH6zChqZ_owZ_WDZfHHU",
  authDomain: "authentication-9cb83.firebaseapp.com",
  projectId: "authentication-9cb83",
  storageBucket: "authentication-9cb83.appspot.com",
  messagingSenderId: "278208704013",
  appId: "1:278208704013:web:5cfcb4310c9ec38f6fef44",
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//Signup Function
let signUpButton = document.getElementById("signup");

signUpButton.addEventListener("click",(e) =>{
  e.preventDefault();
  console.log ("signup click");

  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");

  auth
  .createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) =>{
    location.reload();
    // signed in
    var user = userCredential.user;
    console.log("user, user.mail");
    
  })

  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("error code", errorCode);
    console.log("error message", errorMessage);

  })
});





//Signin Function
let signInButton = document.getElementById("signin");

  signInButton.addEventListner("click",(e) =>{
    e.preventDefault();
    console.log ("signin click");
  
    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");
  
    auth
    .signinWithEmailAndPassword(email.value, password.value)
    .then((userCredential) =>{
      location.reload();
      // signed in
  
      var user = userCredential.user;
      console.log("user, user.mail");
      window.location = "home.html";
    })
  
    .catch((error) => {
      var errorCode = error.Code;
      var errorMessage = error.message;
      console.log("error code", errorCode);
      console.log("error message", errorMessage);
  
    });
  });

  





//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

//Lifecycle hooks
auth.onAuthstateChanged(function(users){
  if (users) { 
    var email = user.email;
    var user =document.getElementById("users");
    users.appendChild(text);
    console.log(users);
   } else {
   }
});