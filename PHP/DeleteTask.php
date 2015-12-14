<?php
	$db = mysqli_connect("localhost","root","eecs481","magic_mirror");
	mysqli_query($db, "DELETE FROM tasks WHERE id = '$_POST[i_d]'");
?>