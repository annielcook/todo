var profile = require("./profile.js");
var users = process.argv.slice(2);//["chalkers", "joykesten2"];

users.forEach(profile.get);


