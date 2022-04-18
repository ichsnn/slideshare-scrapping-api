import express from "express";
import cors from "cors";
import morgan from "morgan";

import { error } from "./error";
import routes from "./routes";

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(routes);
app.use(error);

app.listen(3000, () => {
  console.log('Server running on port 3000')
});