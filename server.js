const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const MeetingRoute = require("./routes/meeting");

app.use("/", MeetingRoute);

mongoose
  .connect("mongodb://localhost:27017/meetings", { useNewUrlParser: true })
  .then(() => {
    app.listen(5000, () => {
      console.log("Server has started!");
    });
  })
  .catch((e) => console.log(e.message));

module.exports = app;
