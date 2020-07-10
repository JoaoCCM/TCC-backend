var convert = require("xml-js");
var fs = require("fs");

var xml = fs.readFileSync(__dirname + "/teste01.xml");

// var xml =
//     '<?xml version="1.0" encoding="UTF-8"?>' +
//     '<note importance="high" logged="true">' +
//     "    <title>Happy</title>" +
//     "    <todo>Work</todo>" +
//     "    <todo>Play &</todo>" +
//     "</note>";

var result2 = convert.xml2json(
    xml,
    // .replace(/[\n\r]/g, "\\n")
    // .replace(/&/g, "&amp;")
    // .replace(/-/g, "&#45;"),
    {
        compact: false,
        spaces: 4,
    }
);
console.log(result2);
