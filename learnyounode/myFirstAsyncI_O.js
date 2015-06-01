var path = process.argv[2];
var fs = require('fs');
var contents = fs.readFile(path, 'utf8', function(err, data){
	if (err) throw err;
	console.log(data.toString().split('\n').length - 1);
});
