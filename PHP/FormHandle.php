<?php
	$db = mysqli_connect("localhost","root","eecs481","magic_mirror");
	mysqli_query($db, "INSERT INTO tasks(task_name, task_duration) VALUES ('$_POST[taskname]', '$_POST[taskduration]')");
?>