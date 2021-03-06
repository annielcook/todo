
function printMessage(username, badgeCount, points){
	var message = username + " has " + badgeCount + " total badge(s) and + " + points + " points in JavaScript";
	console.log(message);
}
var http = require("http");

function printError(error){
	console.error(error.message);
};

function get(username){
	var request = http.get("http://teamtreehouse.com/" + username+ ".json", function(response){
		var body = "";
		response.on('data', function(chunk){
			body += chunk;
		});
		response.on('end', function(){
			if(response.statusCode === 200){
				try{
					var profile = JSON.parse(body);
					console.log(body);
					printMessage(username, profile.badges.length, profile.points.JavaScript);
				} catch(error){
					printError(error);
				}
			} else{
				printError({message: "There was an error getting profile for "+ username+ ". (" + http.STATUS_CODES[response.statusCode] + ")"});
			}
		});
	});

	request.on("error", printError);
}

module.exports.get = get;


