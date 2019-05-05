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
  const ageGroup1 = document.getElementById('ageGroup1');
  const ageGroup2 = document.getElementById('ageGroup2');
  const ageGroup3 = document.getElementById('ageGroup3');
  const ageGroup4 = document.getElementById('ageGroup4');
  const keyTask1 = document.getElementById('keyTask1');
  const keyTask2 = document.getElementById('keyTask2');
  const keyTask3 = document.getElementById('keyTask3');
  const keyTask4 = document.getElementById('keyTask4');
  const checkbox1 = document.getElementById('checkbox1');
  const checkbox2 = document.getElementById('checkbox2');
  const checkbox3 = document.getElementById('checkbox3');
  const checkbox4 = document.getElementById('checkbox4');
  //Get Database References
  const dbAgeGroup1 = firebase.database().ref().child('15-20');
  const dbAgeGroup2 = firebase.database().ref().child('18-25');
  const dbAgeGroup3 = firebase.database().ref().child('25-35');
  const dbAgeGroup4 = firebase.database().ref().child('35-45');
  const dbAllTasks = firebase.database().ref().child('mastertags');
  //Create variable to see user's age group
  var chosenAge = 0

  //Populate Inner HTMLs
  if chosenAge == 1 {
    keyTask1.innerHTML = dbAgeGroup1.child('budgeting').child('name').getValue();
    console.log('it worked');
  }
