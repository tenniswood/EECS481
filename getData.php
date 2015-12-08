<?php
	$db = mysql_connect("localhost","root");
  	$db_select = mysql_select_db("magic_mirror", $db);
	$result = mysql_query("SELECT * FROM tasks", $db);
	while ($row = mysql_fetch_array($result)) {
		$emparray[] = $row;
	}
	mysql_close($db);
?>
<script type="text/javascript">
	var tasks = <?php echo json_encode($emparray); ?>;
	alert(tasks[0].task_name);
</script>