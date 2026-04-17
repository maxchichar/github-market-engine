import express from "express";
import { getGitHubScore } from "../engine/githubScore.js";
import { generateCandles } from "../engine/candleGenerator.js";

const router = express.Router();

router.get("/:user", async (req, res) => {
  const user = req.params.user;

  const activity = await getGitHubScore(user);
  const candles = generateCandles(activity.score);

  res.json({
    user,
    activity,
    candles
  });
});

export default router;