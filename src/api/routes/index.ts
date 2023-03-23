import { Router } from 'express';
import candidateRouter from './candidate';

const router = Router();

router.use('/candidate', candidateRouter);

export default router;