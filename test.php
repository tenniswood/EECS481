<html>
<head>
<script>
function reqListener () {
	console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.onload = function() {
	JSON = this.responseText;
	/*for (var i = 0, len = JSON.length; i < len; i = i + 2) {
		var taskname = JSON[i];
		var taskduration = JSON[i + 1]
	}*/
	alert(JSON);
};

oReq.open("get", "Javascript/PHP/getData.php", true);

oReq.send();
</script>
</head>
<body>
</body>
</html>