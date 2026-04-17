import express from "express";
import cors from "cors";
import candlesRoute from "./routes/candles.js";

const app = express();
app.use(cors());

app.use("/candles", candlesRoute);

// ROOT ROUTE (FIX)
app.get("/", (req, res) => {
  res.json({
    status: "GitHub Market Engine is running",
    endpoints: {
      candles: "/candles/:user"
    }
  });
});

app.listen(3000, () => {
  console.log("⚡ Market Engine running on http://localhost:3000");
});