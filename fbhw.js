// Initialize Firebase
      var config = {
        apiKey: "AIzaSyDbIhi3cGnUPlsKtAvA45Ep9zv1sI1nGnU",
        authDomain: "fir-homework-68d46.firebaseapp.com",
        databaseURL: "https://fir-homework-68d46.firebaseio.com",
        projectId: "fir-homework-68d46",
        storageBucket: "fir-homework-68d46.appspot.com",
        messagingSenderId: "317750393838"
      };
      firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();


     
        // Capture Button Click
        $("#add-user").on("click", function(event) {
          event.preventDefault();
    
          // Capture User Inputs and store into variables
          var name = $("#name-input").val().trim();
          var dest = $("#dest-input").val().trim();
          var firstTrain = $("#firstTrain-input").val().trim();
          var tFrequency = $("#freq-input").val().trim();
          var nextTrain = 0;
          tMinutesTillTrain = 3;



          
          // Console log each of the user inputs to confirm we are receiving them
          console.log(name);
          console.log(dest);
          console.log(firstTrain);
          console.log(tFrequency);
          console.log(tMinutesTillTrain);
      
           // Creates local "temporary" object for holding employee data
    var newTrain = {
        name: name,
        destination: dest,
        next: nextTrain,
        frequency: tFrequency,
        until: tMinutesTillTrain
  };

  // Uploads employee data to the database
  database.ref().push(newTrain);

  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#name-input").val("");
  $("#dest-input").val("");
  $("#firstTrain-input").val("");
  $("#freq-input").val("");

        //   database.ref().set({
        //     name: name,
        //     destination: dest,
        //     firstTrain: firstTrain,
        //     frequency: freq
        //   })

          return false
        });

//---------------------------------function to pull info from firebase and add it to the  table----------------------------------------------------
        database.ref().on("child_added", function(childSnapshot) {
            console.log(childSnapshot.val());
          
            // Store everything into a variable.

            var name = childSnapshot.val().name;
            var dest = childSnapshot.val().destination;
            var firstTrain = childSnapshot.val().firstTrain;
            var freq = childSnapshot.val().frequency;
            var tMinutesTillTrain = childSnapshot.val().until;
            var nextTrain = childSnapshot.val().next; 
            // train Info
            console.log(name);
            console.log(dest);
            console.log(firstTrain);
            console.log(freq);
            console.log(nextTrain);
            console.log(tMinutesTillTrain);




  // Create the new row
  var newRow = $("<tr>").append(
    $("<td class='tblName'>").text(name),
    $("<td class='tblDest'>").text(dest),
    $("<td class='tblFreq'>").text(freq),
    $("<td class='tblArrival'>").text(nextTrain),
    $("<td class='tblAway'>").text(tMinutesTillTrain)
  );

  // Append the new row to the table
  $("#schedule-table > tbody").append(newRow);
});

//---------------------------------Train Math----------------------------------------------------

