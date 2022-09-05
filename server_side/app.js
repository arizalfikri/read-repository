const cors = require("cors");
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const axios = require("axios");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/github_signup", async (req, res) => {
  try {
    let response = await axios.get(
      `https://github.com/login/oauth/authorize?client_id=${process.env.client_id}`
    );
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
