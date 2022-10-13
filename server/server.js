import express from "express";
import { config } from "dotenv";

const app = express();
config();

const PORT = process.env.PORT || 8080;

app.get("/", (req,res) => {
    res.send("Hello World! from Api");
})

app.listen(PORT, ()=> {
    console.log(`Server started on http://localhost:${PORT}`);
})