<!DOCTYPE html>
<html>
  <head>
  	<?php
      $db = mysql_connect("localhost","root");
      $db_select = mysql_select_db("magic_mirror", $db);
      $result = mysql_query("SELECT * FROM tasks", $db);
      while ($row = mysql_fetch_array($result)) {
        $emparray[] = $row;
      }
      mysql_close($db);
    ?>

    <script type="text/javascript">var tasks = <?php echo json_encode($emparray); ?>;</script>

    <script>
    	for (var i = 0; i < tasks.length; i++)
    	{

    	}
    </script>
  </head>

  <body>
  	<table border="1">
  		<tr>
  			<th>Task Name</th><th>Task Duration</th>
  		</tr>
  		<tr>

  </body>
</html>
