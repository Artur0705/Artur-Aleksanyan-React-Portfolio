const express = require("express");
const router = require("express").Router();
require("dotenv").config();
const cors = require("cors");
const path = require('path');

const { sendEmail } = require("./SendEmail");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

const PORT = process.env.PORT || 8080;

router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  sendEmail(email, message, name);
  res.json("Email has been sent succesfully");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
