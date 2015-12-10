var Locked = false;

$(window).keypress(function (e){
  if (!Locked && (e.keyCode == 0 || e.keyCode == 32)){
    Locked = true;
    completeTasks()
  }
})

function congratulateInTask(){
  var messages = ["GOOD JOB!", "GREAT WORK!", "YOU ROCK!", "YOU ROCK!"];
  document.getElementById('congratulations').innerHTML = messages[Math.floor((Math.random() * (messages.length - 1)))];

  $(".radialtimer").fadeToggle();
  $("#taskName").fadeToggle();
  $("#congratulations").delay(1000).fadeToggle();
  $("#confetti").delay(1000).fadeToggle();
}

function congratulateOutTask(){
  $(".radialtimer").delay(1000).fadeToggle();
  $("#taskName").delay(1000).fadeToggle();
  $("#congratulations").fadeToggle();
  $("#confetti").fadeToggle();
}

function setTaskDelay(time, name){
  setTimeout(function(){
    var Timer = new radialTimer();
    Timer.init("timer", time);
  }, 1000);
  document.getElementById("taskName").innerHTML = name;  
}

function setTask(time, name , delay){
  setTimeout(function(){ 
      setTaskDelay(time, name)
  }, delay * 1000);
}

function completeTasks(){
  var totalDelay = 0;
    
  //Initial Task
  setTask(parseInt(tasks[0].task_duration), tasks[0].task_name, totalDelay);

  setTimeout(function() {
    $("#instructions").fadeToggle();
    $("#time").fadeToggle();
    $("#date").fadeToggle();
    $("#weatherLocation").fadeToggle();
    $("#weatherIcon").fadeToggle();
    $("#weatherToday").fadeToggle();
    $(".forecast").fadeToggle();
    $(".radialtimer").delay(1000).fadeToggle();
    $("#taskName").delay(1000).fadeToggle();
  }, totalDelay*1000);

  totalDelay = totalDelay + 1;

  totalDelay = totalDelay + parseInt(tasks[0].task_duration) + 2;
  setTimeout(function(){congratulateInTask()}, totalDelay*1000);
  totalDelay = totalDelay + 6;
  setTimeout(function(){congratulateOutTask()}, totalDelay*1000);

  //Intermediate Tasks
  for( i = 1; i<tasks.length - 1; ++i){
    setTask(parseInt(tasks[i].task_duration), tasks[i].task_name, totalDelay)
    totalDelay = totalDelay + parseInt(tasks[i].task_duration) + 2;
    setTimeout(function(){congratulateInTask()}, totalDelay*1000);
    totalDelay = totalDelay + 6;
    setTimeout(function(){congratulateOutTask()}, totalDelay*1000);
  }

  //Final Task
  setTask(parseInt(tasks[tasks.length - 1].task_duration), tasks[tasks.length - 1].task_name, totalDelay)
  totalDelay = totalDelay + parseInt(tasks[i].task_duration) + 2;
  setTimeout(function(){congratulateInTask()}, totalDelay*1000);
  totalDelay = totalDelay + 6;
    
  setTimeout(function() {
    $("#congratulations").fadeToggle();
    $("#alldone").delay(1000).fadeToggle();
  }, totalDelay*1000);
  totalDelay = totalDelay + 4;

  setTimeout(function() {
    $("#alldone").fadeToggle();
    $("#confetti").fadeToggle();
    $("#instructions").delay(1000).fadeToggle();
    $("#time").delay(1000).fadeToggle();
    $("#date").delay(1000).fadeToggle();
    $("#weatherLocation").delay(1000).fadeToggle();
    $("#weatherIcon").delay(1000).fadeToggle();
    $("#weatherToday").delay(1000).fadeToggle();
    $(".forecast").delay(1000).fadeToggle();
  }, totalDelay*1000);

  setTimeout(function(){Locked = false;}, (totalDelay + 5)*1000);
}