import * as express from 'express';
import * as _ from "lodash";

const port: string | number = process.env.port || 1337
const app = express();

app.listen(port);
app.use(express.static('public'))
console.log("Listining on port "+ port);
console.log("Listing value");
