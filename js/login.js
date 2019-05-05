(function() {

  //Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyAEZTkDS1zvcyzmOHgZc8qzfa-qHxgjONg",
    authDomain: "finer-financing.firebaseapp.com",
    databaseURL: "https://finer-financing.firebaseio.com",
    projectId: "finer-financing",
    storageBucket: "finer-financing.appspot.com",
    messagingSenderId: "134736343683",
    appId: "1:134736343683:web:5a34233b065a77e5"
  };
  firebase.initializeApp(firebaseConfig);

  //Get Elements
  const txtEmail = document.getElementById('txtEmail')
  const txtPassword = document.getElementById('txtPassword')
  const btnLogin = document.getElementById('btnLogin')
  const btnSignUp = document.getElementById('btnSignUp')
  const btnLogout = document.getElementById('btnLogout')
  const test = document.getElementById('testbutton')

  //Add Login Event
  btnLogin.addEventListener('click', e => {
    //Get Email and Pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign In
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  //Add Signup Event
  btnSignUp.addEventListener('click', e => {
    //Get Email and Pass
    const email = txtEmail.value; //TODO: CHECK IF IT IS REAL EMAIL
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign Up
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  //Add Logout Event
  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });
  //Add Realtime Listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      btnLogout.style.visibility = 'visible';
    } else {
      console.log('not logged in');
      btnLogout.style.visibility = 'hidden';
    }
  })
}());
