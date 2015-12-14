<!DOCTYPE HTML>
<html>
  <head>
    
  </head>

  <body>
  <?php
    $db = mysql_connect("localhost","root");
    $db_select = mysql_select_db("magic_mirror");
    $result = mysql_query("SELECT * FROM tasks");
    echo "<table>";
    echo "<tr><th>Task Name</th><th>Task Duration (sec)</th></tr>";

    while ($row = mysql_fetch_array($result)) {
      $name = $row['task_name'];
      $duration = $row['task_duration'];
      echo "<tr><td style='width: 200px;'>".$name."</td><td style = 'width: 200px;'>".$duration."</td></tr>";
    }

    echo "</table>";
    $task_name = $task_duration = "";
    mysql_close($db);
    ?>

    <h2>Add a New Task</h2>
    <form method="post" action="">
      Task Name: <input type="text" name="task_name" value="<?php echo $task_name;?>">
      Task Duration (sec): <input type="number" name="task_duration" value="<?php echo $task_duration;?>">
      <input type="submit" name="submit" value="Submit">
    </form>

    <?php
      $taskname = $_POST['task_name'];
      $taskduration = $_POST['task_duration'];

      $db = mysql_connect("localhost","root");
      $db_select = mysql_select_db("magic_mirror");

    ?>

  </body>
</html>