"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var questions = [{
        title: "How to login?",
        content: "How do I log in?",
        answerCount: 2
    }];
var port = process.env.port || 1337;
var app = express();
app.listen(port);
app.use(express.static('public'));
console.log("Listining on port " + port);
app.get("/questions", function (_req, res) {
    res.json(questions);
});
//# sourceMappingURL=server.js.map