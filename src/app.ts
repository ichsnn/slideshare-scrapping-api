import express from "express";
import cors from "cors";
import morgan from "morgan";

import { error } from "./error";
import routes from "./routes";

const app = express();

const whitelist = ['https://ichsnn.github.io', 'http://localhost:5500', 'http://127.0.0.1:5500']

const corsOptions = {
  origin: function (origin: any, callback: any) {
    console.log(origin)
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    }
    else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

const port = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(routes);
app.use(error);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});