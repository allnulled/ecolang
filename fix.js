const fs = require("fs");
const filename = `${__dirname}/src/ecolang.js`;
const filename2 = `${__dirname}/lib/ecolang.parser.js`;
const filecontents = fs.readFileSync(filename).toString();
const filecontentsfixed = filecontents.replace(/root."([^\"]+)"/g, "window[\"$1\"]");
fs.writeFileSync(filename, filecontentsfixed, "utf8");
fs.writeFileSync(filename2, filecontentsfixed, "utf8");