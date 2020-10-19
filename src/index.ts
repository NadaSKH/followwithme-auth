import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.listen(3000,()=>console.log("SERVER IS UP AND RUNNING"));