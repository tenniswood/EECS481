<?php
	$db = mysql_connect("localhost","root");
  	$db_select = mysql_select_db("magic_mirror", $db);
	$result = mysql_query("SELECT * FROM tasks", $db);
	while ($row = mysql_fetch_array($result)) {
		$arr = array('taskname' => $row[0], 'taskduration' => $row[1]);
		echo json_encode($arr, JSON_NUMERIC_CHECK);
	}
	mysql_close($db);
?>