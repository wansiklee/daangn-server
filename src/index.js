import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

const PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("홈");
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}!`);
});
