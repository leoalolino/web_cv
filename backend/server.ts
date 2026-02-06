import express from "express";
import cors from "cors"; // 1. Import it

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // This is the default Vite port
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json()); // Essential for reading text payloads
