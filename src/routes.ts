import { Router, Request, Response } from 'express';
import { CreateMessageController } from './controllers/CreateMessageController';
import { ListMessageController } from './controllers/ListMessageController';
import { DeleteMessageController } from './controllers/DeleteMessageController';

const router = Router();

const createMessageController = new CreateMessageController();
const listMessageController = new ListMessageController();
const deleteMessageController = new DeleteMessageController();

router.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Bem vindo a API Dio Shopping' });
});

router.delete('/message/:id', deleteMessageController.handle);
router.get('/message', listMessageController.hanle);
router.post('/message', createMessageController.handle);

export { router };
