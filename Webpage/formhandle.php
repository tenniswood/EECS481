<!DOCTYPE HTML>
<html>
  <head>
    
  </head>

  <body>

  	<?php
		$taskname = $_POST['task_name'];
		$taskduration = $_POST['task_duration'];

		$db = mysql_connect("localhost","root");
		$db_select = mysql_select_db("magic_mirror", $db);
		mysql_query("INSERT INTO tasks(task_name, task_duration) VALUES (".$taskname.", ".$taskduration.")", $db);
	?>

  </body>
</html>