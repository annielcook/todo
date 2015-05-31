var path = process.argv[2];
var fs = require('fs');
var contents = fs.readFileSync(path).toString();
var arr_contents = contents.split('\n');
var num = arr_contents.length;
console.log(num -1);