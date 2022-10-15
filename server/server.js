import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
// import {getGoogleURL} from "./util/getGoogleURL"

const app = express();
config();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(cookieParser())

//Prefix all routes with api
app.get("/api", (req,res) => {
    res.send("Hello World! from Api");
})

//Google Outh2 sessions
// app.get("/api/session", getGoogleURL)


app.listen(PORT, ()=> {
    console.log(`Server started on http://localhost:${PORT}/api`);
})