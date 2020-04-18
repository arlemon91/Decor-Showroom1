const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const decorRouter = require("./routes/index");

const app = express();
const apiPort = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error: "));

app.get("/api/getDecor", (req, res) => {
  let list = ["item1", "item2", "item3"];
  res.json(list);
  console.log("sent some list");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});
app.use("/api", decorRouter);

app.listen(apiPort, () => {
  console.log(`Server listening on PORT ${apiPort}`);
});
