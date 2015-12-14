<!DOCTYPE html>
<html>
  <head>

    <title>Magic Mirror!</title>

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>

    <link rel="stylesheet" href="CSS/MirrorStyle.css">

    <?php
      $db = mysql_connect("localhost","root", "eecs481");
      $db_select = mysql_select_db("magic_mirror", $db);
      $result = mysql_query("SELECT * FROM tasks", $db);
      while ($row = mysql_fetch_array($result)) {
        $emparray[] = $row;
      }
      mysql_close($db);
    ?>

    <script src="Javascript/Confetti.js"></script>

    <script type="text/javascript">var tasks = <?php echo json_encode($emparray); ?>;</script>

    <script src="Javascript/Tasks.js"></script>

    <script src="Javascript/Conditions.js"></script>

    <script src="Javascript/Forecast.js"></script>

    <script src="Javascript/Date.js"></script>

    <script src="Javascript/Timer.js"></script>

    <script src="Javascript/Instructions.js"></script>

  </head>

  <body>

    <canvas height='1' id='confetti' width='1'></canvas>

    <div id="instructions">Press Space Bar to Begin Tasks</div>

    <div id="congratulations"></div>
    <div id="alldone">ALL DONE!</div>

    <div style="float:right;">  
      <div id="weatherLocation" ></div>
      <img id="weatherIcon" style="display: inline"></img><div id="weatherToday" style="display: inline" ></div>  
      <div class="forecast" id="forecast1"></div> 
      <div class="forecast" id="forecast2"></div>
      <div class="forecast" id="forecast3"></div>
      <div class="forecast" id="forecast4"></div>
      <div class="forecast" id="forecast5"></div>
      <div class="forecast" id="forecast6"></div>
      <div class='radialtimer' id='timer'></div>
    </div>

    <div style="float:left;">
      <div id="date"></div>
      <div id="time"></div>
      <div id="taskName">TASK</div>
    </div>

  </body>
</html>