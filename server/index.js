const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bambooblog",
});

db.connect(function (err) {
  if (err) {
    console.error("cannot connect to database", err);
  } else {
    console.log("connect successful");
  }
});

app.get("/", (req, res) => {
  return res.json("Hello world");
});

app.post("/", async (req, res) => {
  //let dataFromClient = [req.body.username, req.body.email, req.body.password];
  let { username, email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  let userData = {
    username: username,
    email: email,
    password: hashPassword,
  };
  const sql = "INSERT INTO users(username, email, password) VALUES (?, ?, ?)";
  db.query(sql, [username, email, hashPassword], (err, result) => {
    if (err) {
      res.status(500).send("เกิดข้อผิดพลาดในการ Insert ข้อมูล");
      console.error("เกิดข้อผิดพลาดในการ Insert ข้อมูล: ", err);
      return;
    }
    res.status(200).send("ข้อมูลถูก Insert ลงในฐานข้อมูลแล้ว");
    console.log("Insert data complete");
  });
});
