
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBZ_AsiygMpv7jL0DZEMIoT9pT2kVHBTlE",
    authDomain: "form-d5779.firebaseapp.com",
    projectId: "form-d5779",
    storageBucket: "form-d5779.appspot.com",
    messagingSenderId: "1073356034901",
    appId: "1:1073356034901:web:6676f0e3a9effce1af95dc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

function signUp(){

    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed In");
  }

function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message)); 
    document.getElementById("signIn").onclick=function(){
      location.href="login.html"}
  }

function signOut(){
    auth.signOut();
    alert("Signed Out"); 
  }  

auth.onAuthStateChanged(function(user)
{
    if(user){
      var email = user.email;
      alert("Active User " + email);
      //Take user to a different or home page //is signed in
    }else{
      alert("No Active User");
      //no user is signed in
    }
});

auth.onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
  } else{
    console.log('not logged in');
  }
});