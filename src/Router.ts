import { Request, Response, Router } from 'express';
import { traineeRouter, userRouter } from './controllers';
const router = Router();

router.use('/trainee', traineeRouter);
router.use('/user', userRouter);

export default router;
