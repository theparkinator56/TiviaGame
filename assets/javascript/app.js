window.onload = function() {
$('#start').on('click', timeLeft.start)
};
var intervalId;


var clockRunning = false;
var wins = 0;
var losses = 0;


interrogative1 = function() {
    $('#questions').text("What caliber bullet does an AK-47 fire?");
    $('#Answer1').text("5.56x45 mm");
    $('#Answer2').text("7.62x39 mm");
    $('#Answer3').text("308 cal");
    $('#Answer4').text("5.45x39 mm");
    $('#Answer2').on('click', (wins + 1), interrogative2);
    $('#Answer1', '#Answer3', '#Answer4').on('click', interrogative2, (losses + 1))
};
interrogative2 = function() {
    $('#questions').text("What caliber does an M249 SAW fire?");
    $('#Answer1').text("5.56x45 mm");
    $('#Answer2').text("7.62x39 mm");
    $('#Answer3').text("308 cal");
    $('#Answer4').text("5.45x39 mm");
    $('#Answer1').on('click', (wins + 1), interrogative3);
    $('#Answer2', '#Answer3', '#Answer4').on('click', interrogative3, (losses + 1))
};
interrogative3 = function() {
    $('#questions').text("What caliber does a SCAR-H fire?");
    $('#Answer1').text("5.56x45 mm");
    $('#Answer2').text("7.62x39 mm");
    $('#Answer3').text("308 cal");
    $('#Answer4').text("5.45x39 mm");
    $('#Answer3').on('click', (wins + 1));
    $('#Answer1', '#Answer2', '#Answer4').on('click', (losses + 1))
};



var timeLeft = {

 time: 30,
 start: function() {
     timeLeft.time = 30;
     
   if (!clockRunning) {
     intervalId = setInterval(timeLeft.count, 1000);
     clockRunning = true;
     interrogative1();
     wins = 0
     losses = 0
   }
 },
 stop: function() {


   clearInterval(intervalId);
   clockRunning = false;
 },

 count: function() {


   timeLeft.time--;


   var converted = timeLeft.timeConverter(timeLeft.time);



   $("#timer").html("<h3>Time Left: </h3>" + converted);
 },
 timeConverter: function(t) {

   var minutes = Math.floor(t / 60);
   var seconds = t - (minutes * 60);

   if (seconds < 10) {
     seconds = "0" + seconds;
   }

   if (minutes === 0) {
     minutes = "00";
   }
   else if (minutes < 10) {
     minutes = "0" + minutes;
   }

   return minutes + ":" + seconds;
 }
};
if (timeLeft.time=0) {
    console.log("times up");
    timeLeft.stop;
    alert("Times up! Questions correct: "+ wins + "Questions incorrect: " + losses)
    }
