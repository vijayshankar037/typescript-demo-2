"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var port = process.env.port || 1337;
var app = express();
app.listen(port);
app.use(express.static('public'));
console.log("Listining on port " + port);
console.log("Listing value");
//# sourceMappingURL=server.js.map