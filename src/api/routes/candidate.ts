import { Request, Response, Router } from 'express';
import * as controller from '../controllers/candidate';
import { CandidateDTO, UpdateCandidateDTO } from '../dto/candidate';

const candidateRouter = Router();

candidateRouter.get('/', async (req: Request, res: Response) => {
  const results = await controller.getAll();

  return res.status(200).send(results);
});

candidateRouter.get('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const result = await controller.getById(id);

  return res.status(200).send(result);
});

candidateRouter.put('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const payload: UpdateCandidateDTO = req.body;

  const result = await controller.update(id, payload);

  return res.status(200).send(result);
});

candidateRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const result = await controller.deleteById(id);

  return res.status(200).send({
    success: result
  });
});

candidateRouter.post('/', async (req: Request, res: Response) => {
  const payload: CandidateDTO = req.body;

  const result = await controller.create(payload);

  return res.status(200).send(result);
});

export default candidateRouter;