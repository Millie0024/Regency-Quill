import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { generateHandler } from "./api/generate";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.post("/api/generate", generateHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🖋️ Regency Quill server running on port ${PORT}`);
});
