import "dotenv/config";
import express, { application } from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudnary.js";

//app config

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

//middlewares
app.use(express.json());
app.use(cors());

//api end points

app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(port, () => console.log(`\nserver is running on ${port}`));
