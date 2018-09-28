window.onload = function() {
$('#start').on('click', timeLeft.start)
};
var intervalId;


var clockRunning = false;
var wins = 0;
var losses = 0;

const interrogative = function() {
    $('#questions').text("What caliber bullet does an AK-47 fire?")
    $('#Answer1').html("5.56x45 mm")
    $('#Answer2').text("7.62x39 mm")
    $('#Answer3').text("308 cal")
    $('#Answer4').text("5.45x39 mm")
    $('#Answer2').on('click', (wins + 1))
}
var questions = [q1, q2, q3]
for (var i = 0; i < questions.length; i++) {

}



const timeLeft = {

 time: 30,


 reset: function() {

   timeLeft.time = 30;



   $("#timer").text("00:30");


 },
 start: function() {


   if (!clockRunning) {
     intervalId = setInterval(timeLeft.count, 1000);
     clockRunning = true;
     interrogative();
   }
 },
 stop: function() {


   clearInterval(intervalId);
   clockRunning = false;
 },

 count: function() {


   timeLeft.time--;


   var converted = timeLeft.timeConverter(timeLeft.time);
   console.log(converted);


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
