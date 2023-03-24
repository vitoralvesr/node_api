import { NextFunction, Request, Response, Router } from 'express';
import { errorHandler } from '../../errors/handler';
import candidateRouter from './candidate';

const router = Router();

router.use('/candidate', candidateRouter);
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler.handleError(err, res);
});

export default router;