var timeT;

function runTimer(){

var initialOffset = '440';
var i = 1
var interval = setInterval(function() {
    $('.circle_animation').css('stroke-dashoffset', initialOffset-(i*(initialOffset/timeT)));
    $('h2').text(i);
    if (i == timeT+1) {

        $('h2').text(0);
        $('.circle_animation').css('stroke-dashoffset', initialOffset);
        clearInterval(interval);
    }
    i++;  
}, 1000);
}


function congratulateInTask(){


  $(".item").fadeToggle();
  $("#taskName").fadeToggle();
  //$("#timer").fadeToggle();
  $("#congratulations").delay(1000).fadeToggle();
  //$("#confetti").fadeToggle(2000);
}

function congratulateOutTask(){

  $(".item").delay(1000).fadeToggle();
  $("#taskName").delay(1000).fadeToggle();
  //$("#timer").delay(1000).fadeToggle();
  $("#congratulations").fadeToggle();
  //$("#confetti").fadeToggle();
}


function timerReset(){
  
    document.getElementById("taskName").innerHTML = "TASK";
    //document.getElementById("timer").innerHTML = "TIME";
  
  
}


function setTaskDelay(time, name){
  timeT = time;
  setTimeout(function(){runTimer();}, 1000);
  //document.getElementById("timer").innerHTML = time;
  document.getElementById("taskName").innerHTML = name;
  
  
}

function setTask(time, name , delay){
  
  setTimeout(
    function(){ 
      setTaskDelay(time, name)
            }, 
        delay * 1000);
}

function completeTasks(){
  
    var totalDelay = 0;
    var tasks = [];
    tasks.push({ name: 'Brush Your Teeth!', time:5 });
    tasks.push({ name: 'Comb Your Hair!', time:7 });
    tasks.push({ name: 'Wash Your Face!', time:6 });
    
    //Initial Task
    setTask(tasks[0].time, tasks[0].name, totalDelay);

    setTimeout(function() {
      $("#time").fadeToggle();
      $("#date").fadeToggle();
      $("#weatherLocation").fadeToggle();
      $("#weatherIcon").fadeToggle();
      $("#weatherToday").fadeToggle();
      $(".forecast").fadeToggle();
      $("#testButton").fadeToggle();
      $(".item").delay(1000).fadeToggle(); 
      $("#taskName").delay(1000).fadeToggle();
    }, totalDelay*1000);

    totalDelay = totalDelay + 1;

    totalDelay = totalDelay + tasks[0].time + 2;
    setTimeout(function(){congratulateInTask()}, totalDelay*1000);
    totalDelay = totalDelay + 4;
    setTimeout(function(){congratulateOutTask()}, totalDelay*1000);

    //Intermediate Tasks
    for( i = 1; i<tasks.length - 1; ++i){
      setTask(tasks[i].time, tasks[i].name, totalDelay)
      totalDelay = totalDelay + tasks[i].time + 2;
      setTimeout(function(){congratulateInTask()}, totalDelay*1000);
      totalDelay = totalDelay + 4;
      setTimeout(function(){congratulateOutTask()}, totalDelay*1000);
    }

    //Final Task
    setTask(tasks[tasks.length - 1].time, tasks[tasks.length - 1].name, totalDelay)
    totalDelay = totalDelay + tasks[i].time + 2;
    setTimeout(function(){congratulateInTask()}, totalDelay*1000);
    totalDelay = totalDelay + 4;
    
    setTimeout(function() {
      $("#congratulations").fadeToggle();
      $("#alldone").delay(1000).fadeToggle();
     }, totalDelay*1000);
    totalDelay = totalDelay + 4;

    setTimeout(function() {
      $("#alldone").fadeToggle();
      $("#time").delay(1000).fadeToggle();
      $("#date").delay(1000).fadeToggle();
      $("#weatherLocation").delay(1000).fadeToggle();
      $("#weatherIcon").delay(1000).fadeToggle();
      $("#weatherToday").delay(1000).fadeToggle();
      $(".forecast").delay(1000).fadeToggle();
      $("#testButton").delay(1000).fadeToggle();
      state = 0;
    }, totalDelay*1000);
}