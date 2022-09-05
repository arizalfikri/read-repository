const cors = require("cors");
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const axios = require("axios");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let access_token = "";

app.get("/callback", async (req, res) => {
  try {
    let response = await axios.post(
      `https://github.com/login/oauth/access_token?client_id=${process.env.client_id}&client_secret=${process.env.client_secret}&code=${req.query.code}`
    );
    let tmp = response.data.split("&");
    let result = tmp[0].split("=");
    access_token = result[1];
    res.redirect("http://localhost:3001/sing-in");
  } catch (error) {
    console.log(error);
  }
});

app.get("/access_token", (req, res) => {
  res.status(200).json({
    access_token,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
