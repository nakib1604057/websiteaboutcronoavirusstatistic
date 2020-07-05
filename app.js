const express = require("express");
const request = require("request");
const dotenv = require("dotenv");
const path = require("path");

const app = express();
dotenv.config({ path: "./config.env" });
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("include"));
app.get("/", (req, res) => {
  request(
    "https://api.covid19api.com/dayone/country/Bangladesh",
    (err, response, body) => {
      if (err) {
        console.log("some error occure");
      }
      let datasets = JSON.parse(body);
      res.render("index", { datasets: datasets });
    }
  );
});
app.listen(process.env.PORT, () => {
  console.log("Server Start Successfully");
});
