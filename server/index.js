import logging from "./middlewares/logging.js";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import blogData from "./utils/blogData.js";

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(logging);

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

app.get("/", (req, res) => {
  return res.json("Hello JC Article");
});

app.get("/myblog", (req, res) => {
  res.json({
    data: blogData,
  });
});
