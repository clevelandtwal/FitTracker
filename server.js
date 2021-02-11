const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const URL = process.env.MONGODB_URI || "mongodb://localhost/workout"


mongoose.connect(URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})

const fitnessRoutes = require("./routes/fitnessRoutes")
const htmlRoutes = require("./routes/htmlRoutes")
app.use(fitnessRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});