<!DOCTYPE HTML>
<html>
  <head>

    <title>Magic Mirror!</title>
    <link rel="stylesheet" href="CSS/WebpageStyle.css">

  </head>

  <body>

    <h1>Magic Mirror Companion</h1> <br>
    <iframe name="hiddenFrame" class="hide"></iframe>

  <?php
    $db = mysqli_connect("localhost","root","eecs481","magic_mirror");
    $result = mysqli_query($db, "SELECT * FROM tasks");
    echo "<h2>Task List</h2>";
    echo "<table border='1'>
          <tr>
          <td style=\"width: 100px; font-weight: bold;\">Task ID</td>
          <td style=\"width: 200px; font-weight: bold;\">Task Name</td>
          <td style=\"width: 200px; font-weight: bold;\">Task Duration (sec)</td>
          </tr>";

    while ($row = mysqli_fetch_array($result)) {
      echo "<tr>
            <td style=\"width: 100px;\">".$row['id']."</td>
            <td style=\"width: 200px;\">".$row['task_name']."</td>
            <td style=\"width: 200px;\">".$row['task_duration']."</td>
            </tr>";
    }
    echo "</table>";
    mysqli_close($db);
    ?>

    <br><br><br>

    <h2>Add a New Task</h2>

    <form method="post" action="PHP/FormHandle.php" target="hiddenFrame" onsubmit="setTimeout('parent.location.reload()',200); return true;">
      Task Name: <input type="text" name="taskname"> <br><br>
      Task Duration (sec): <input type="number" name="taskduration"> <br><br>
      <input type="submit" name="submit" value="Add Task">
    </form>

    <br><br><br>

    <h2>Delete a Task</h2>

    <form method="post" action="PHP/DeleteTask.php" target="hiddenFrame" onsubmit="setTimeout('parent.location.reload()',200); return true;">
      Task ID: <input type="number" name="i_d"> <br><br>
      <input type="submit" name="submit2" value="Delete Task">
    </form>

  </body>
</html>