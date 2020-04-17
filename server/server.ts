import * as express from 'express';
import * as _ from "lodash";
import {Question} from '../@types/Question'

const questions : Question[] =[{
  title: "How to login?",
  content: "How do I log in?",
  answerCount: 2
}]
const port: string | number = process.env.port || 1337
const app = express();

app.listen(port);
app.use(express.static('public'))
console.log("Listining on port "+ port);

app.get("/questions", (_req, res)=>{
  res.json(questions);
})
