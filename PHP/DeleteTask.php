<?php
	$db = mysqli_connect("localhost","root","eecs481","magic_mirror");
	$id = $_POST['itemid'];
	$query = "DELETE FROM tasks WHERE id = "
	$query .= $id;
	mysqli_query($db, $query);
?>