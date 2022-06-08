import express, { Response } from "express";
//router Declarations
import diaryRouter from "./routes/diaries";
const app = express();

app.use(express.json());
const PORT = 3000;

app.get("/ping", (_, res: Response) => {
  console.log("ping");
  res.send("pongers");
});

app.use("/api/diaries", diaryRouter);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
