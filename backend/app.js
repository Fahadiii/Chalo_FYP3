const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const appRoutes = require("./routes/appRoutes");

//Define the port
const port = process.env.PORT || 5000;

//Allow CORS
app.use(cors());

//Initialize Body Parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(appRoutes);

app.listen(port, () => {
  console.log("Server Started on port ", port);
});
