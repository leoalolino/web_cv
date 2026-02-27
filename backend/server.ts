import express from "express";
import cors from "cors";
import { api } from "./routes/api";
const app = express();
const PORT = 3000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(api);

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "API is working!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
