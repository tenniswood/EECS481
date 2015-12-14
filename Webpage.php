<!DOCTYPE HTML>
<html>
  <head>

    <title>Magic Mirror!</title>

    <link rel="stylesheet" href="CSS/WebpageStyle.css">

  </head>

  <body>

    <h1>Magic Mirror Companion</h1>

    <iframe name="hiddenFrame" class="hide"></iframe>

  <?php
    $db = mysqli_connect("localhost","root","eecs481","magic_mirror");
    $result = mysqli_query($db, "SELECT * FROM tasks");
    echo "<table border='1'><tr><td style='width: 200px; font-weight: bold;'>Task Name</td><td style='width: 200px; font-weight: bold;'>Task Duration (sec)</td><td style='width: 100px; font-weight: bold;'>Delete Task?</td></tr>";

    while ($row = mysqli_fetch_array($result)) {
      //$name = $row['task_name'];
      //$duration = $row['task_duration'];
      echo "<tr>";
      echo "<td style='width: 200px;'>".$row['task_name']."</td>";
      echo "<td style = 'width: 200px;'>".$row['task_duration']."</td>";
      echo "<td style='width: 100px;'><form method='post' action='PHP/DeleteTask.php' target='hiddenFrame'><input type='submit' 'name='deleteItem' value='".$row['id']."'></form></td>";
      echo "</tr>";
    }

    echo "</table>";
    $task_name = $task_duration = "";
    mysqli_close($db);
    ?>
    <br><br><br>
    <h2>Add a New Task</h2>
    <form method="post" action="PHP/FormHandle.php" target="hiddenFrame" onsubmit="setTimeout('parent.location.reload()',200); return true;">
      Task Name: <input type="text" name="taskname"> <br><br>
      Task Duration (sec): <input type="number" name="taskduration"> <br><br>
      <input type="submit" name="submit" value="Submit">
    </form>
  </body>
</html>