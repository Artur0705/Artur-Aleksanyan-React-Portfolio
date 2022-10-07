const express = require("express");
const router = require("express").Router();
require("dotenv").config();
const cors = require("cors");
const { sendEmail } = require("./SendEmail");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const PORT = process.env.PORT || 8080;

router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  sendEmail(email, message, name);
  res.json("Email has been sent succesfully");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
