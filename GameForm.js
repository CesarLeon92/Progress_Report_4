


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDnTZv9Rj-jykO6cNVMV4G0KIoeXDV3Yrw",
    authDomain: "loginform-a3bfc.firebaseapp.com",
    projectId: "loginform-a3bfc",
    storageBucket: "loginform-a3bfc.appspot.com",
    messagingSenderId: "105058579537",
    appId: "1:105058579537:web:5cd48faba5db5ae2513470",
    measurementId: "G-PZQMZR0VNH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();

  function signUp(){
		
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed Up");
}

// I got help from https://www.w3schools.com/howto/howto_css_login_form.asp