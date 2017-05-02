var path = require('path');
var fs = require("fs");
fs.writeFile(path.join(__dirname, '..', 'keys/keys.ts'),"export var MapKey = '" + process.env.GMAP_KEY + "';",  function(err) {
   if (err) {
      return console.error(err);
   }});