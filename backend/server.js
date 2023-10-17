const express = require("express");
const form = require("./routers/form");

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));

app.use(express.static("../public"));
app.set("view engine", "ejs");

app.use("/", form);

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
