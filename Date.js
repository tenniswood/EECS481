var months = ["January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

jQuery(document).ready(function($) {

(function startTime() {
    var today = new Date();
  var year = today.getFullYear();
  var date = today.getDate();
  var day = today.getDay();
  var month = today.getMonth();
  var meridiem;
  
    var hour = today.getHours();
  if(hour < 12){meridiem = "a.m."}
  else{meridiem = "p.m."}
  
  hour = hour%12;
  if(hour == 0){hour = 12;}

    var minute = today.getMinutes();
    var s = today.getSeconds();
    minute = checkTime(minute);
    s = checkTime(s);
  

  document.getElementById('date').innerHTML =
    days[day] + ", " + months[month] + " " + date + ", " + year;
  
    document.getElementById('time').innerHTML =
    hour + ":" + minute + " " + meridiem;
  
    var t = setTimeout(startTime, 1000);    
})()


});


function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}