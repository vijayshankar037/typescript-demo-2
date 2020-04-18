import * as express from 'express';
//import * as _ from "lodash";
import * as path from "path";
import { Question } from '../@types/Question'

const questions: Question[] =[{
  title: "How to login?",
  content: "How do I log in?",
  answerCount: 2
},
{
  title: "How to learn css",
  content: "How do I learn css?",
  answerCount: 2
},
{
  title: "How to learn python3",
  content: "How do I learn python3?",
  answerCount: 2
}]
const port: string | number = process.env.port || 1337
const app = express();

app.listen(port);
app.use(express.static('public'))
console.log("Listining on port "+ port);

app.get("/questions", (_req, res)=>{
  res.json(questions);
});

app.get('/main.js',(_req, res) =>{
  res.sendFile(path.resolve(__dirname,"..","client","client.js"))
});

app.get("/new", (req, res) => {
  const question: Question = req;//.query;
  
  questions.push(question);

  res.json({
    questions,
    status: "OK"
  });
});