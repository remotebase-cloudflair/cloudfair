const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./models");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(cookieParser())

// DATABASE CONNECTION
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

//Prefix all routes with api
app.get("/api", (req,res) => {
    res.send("Hello World! from Api");
})


app.listen(PORT, ()=> {
    console.log(`Server started on http://localhost:${PORT}/api`);
})