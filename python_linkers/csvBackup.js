let {PythonShell} = require('python-shell')
var path = require("path")

function get_account_name(){
	var accountName = document.getElementById("account_name").value
	//document.getElementById("account_name").value = ""; // set back to NULL
	
	var options = {
		scriptPath: path.join(__dirname, '/./'),
		args: [accountName],
	}
	//console.log(options)
	let handwriting = new PythonShell("csvBackup.py", options);
	handwriting.on('message', function(message) {
		swal(message); // alerting system from python
	})
}
