import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

mysql.createPool({
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT!,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
});

app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
}); 
