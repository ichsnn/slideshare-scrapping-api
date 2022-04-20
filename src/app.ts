import express from "express";
import cors from "cors";
import morgan from "morgan";

import { error } from "./error";
import routes from "./routes";

const app = express();

const port = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(cors());
app.use(routes);
app.use(error);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});