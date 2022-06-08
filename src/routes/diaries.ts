import express, { Response } from "express";

const router = express.Router();

router.get("/", (_, res: Response) => {
  res.send("Fetching all diaries");
});

router.post("/", (_, res: Response) => {
  res.send("Creating a new diary");
});

export default router;
