//Using Conditions
jQuery(document).ready(function($) {

  (function startWeather(){

  $.ajax({
  url : "http://api.wunderground.com/api/116c67dcd28ab54f/geolookup/conditions/q/MI/Ann_arbor.json",
  dataType : "jsonp",
  success : function(parsed_json) {

  var dayTemp = parsed_json['current_observation']['temp_f'];
  var dayIcon = parsed_json['current_observation']['icon_url'];
  var dayLoc = parsed_json['current_observation']['display_location']['full'];
  document.getElementById("weatherLocation").innerHTML = dayLoc;
  document.getElementById("weatherToday").innerHTML = dayTemp + '&deg';
  document.getElementById("weatherIcon").src = dayIcon;
  }
  });
  
  
  var t = setTimeout(startWeather, 360000);
  })()
  
});