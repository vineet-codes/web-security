import { Router, Request, Response } from 'express';

const router = Router();

router.post('/register', (req: Request, res: Response) => {
  console.log(req.body);
  res.send('register routr');
});

export { router as registerUserRoute };
