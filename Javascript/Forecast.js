var i;

//Using Forecast
jQuery(document).ready(function($) {

  (function startForecast() {

  $.ajax({
  url : "http://api.wunderground.com/api/116c67dcd28ab54f/geolookup/forecast10day/q/MI/Ann_Arbor.json",
  dataType : "jsonp",
  success : function(parsed_json) {

  //Today
  /*
  var dayHigh = parsed_json['forecast']['simpleforecast']['forecastday'][0]['high']['fahrenheit']
  var dayLow = parsed_json['forecast']['simpleforecast']['forecastday'][0]['low']['fahrenheit']
  document.getElementById("weatherTodayHiLo").innerHTML = dayLow + ':' + dayHigh;
  */
  //Day 1
  var dayDay = parsed_json['forecast']['simpleforecast']['forecastday'][1]['date']['weekday_short']
  var dayHigh = parsed_json['forecast']['simpleforecast']['forecastday'][1]['high']['fahrenheit']
  var dayLow = parsed_json['forecast']['simpleforecast']['forecastday'][1]['low']['fahrenheit']
  document.getElementById("forecast1").innerHTML = dayDay + ":    " + '&nbsp' + dayLow + '&deg' + "  " + '&nbsp' + dayHigh + '&deg';

  //Day 2
  var dayDay = parsed_json['forecast']['simpleforecast']['forecastday'][2]['date']['weekday_short']
  var dayHigh = parsed_json['forecast']['simpleforecast']['forecastday'][2]['high']['fahrenheit']
  var dayLow = parsed_json['forecast']['simpleforecast']['forecastday'][2]['low']['fahrenheit']
  document.getElementById("forecast2").innerHTML = dayDay + ":    " + '&nbsp' + dayLow + '&deg' + "  " + '&nbsp' + dayHigh + '&deg';

  //Day 3
  var dayDay = parsed_json['forecast']['simpleforecast']['forecastday'][3]['date']['weekday_short']
  var dayHigh = parsed_json['forecast']['simpleforecast']['forecastday'][3]['high']['fahrenheit']
  var dayLow = parsed_json['forecast']['simpleforecast']['forecastday'][3]['low']['fahrenheit']
  document.getElementById("forecast3").innerHTML = dayDay + ":    " + '&nbsp' + dayLow + '&deg' + "  " + '&nbsp' + dayHigh + '&deg';

  //Day 4
  var dayDay = parsed_json['forecast']['simpleforecast']['forecastday'][4]['date']['weekday_short']
  var dayHigh = parsed_json['forecast']['simpleforecast']['forecastday'][4]['high']['fahrenheit']
  var dayLow = parsed_json['forecast']['simpleforecast']['forecastday'][4]['low']['fahrenheit']
  document.getElementById("forecast4").innerHTML = dayDay + ":    " + '&nbsp' + dayLow + '&deg' + "  " + '&nbsp' + dayHigh + '&deg';

  //Day 5
  var dayDay = parsed_json['forecast']['simpleforecast']['forecastday'][5]['date']['weekday_short']
  var dayHigh = parsed_json['forecast']['simpleforecast']['forecastday'][5]['high']['fahrenheit']
  var dayLow = parsed_json['forecast']['simpleforecast']['forecastday'][5]['low']['fahrenheit']
  document.getElementById("forecast5").innerHTML = dayDay + ":    " + '&nbsp' + dayLow + '&deg' + "  " + '&nbsp' + dayHigh + '&deg';

  //Day 6
  var dayDay = parsed_json['forecast']['simpleforecast']['forecastday'][6]['date']['weekday_short']
  var dayHigh = parsed_json['forecast']['simpleforecast']['forecastday'][6]['high']['fahrenheit']
  var dayLow = parsed_json['forecast']['simpleforecast']['forecastday'][6]['low']['fahrenheit']
  document.getElementById("forecast6").innerHTML = dayDay + ":    " + '&nbsp' + dayLow + '&deg' + "  " + '&nbsp' + dayHigh + '&deg';
  }
  });
  
  
   var t = setTimeout(startForecast, 360000); 
  })();
  
});