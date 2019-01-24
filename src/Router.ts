import { Request, Response, Router } from "express";
import traineeRouter from "./controllers";
const router = Router();

router.use("/trainee", traineeRouter);
router.use("/user", (req: Request, res: Response) => {
  console.log("inside user Router");
  res.send("Hello User");
});

export default router;
