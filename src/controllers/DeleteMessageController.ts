import { Request, Response } from 'express';
import { DeleteMessageService } from '../services/DeleteMessageService';

class DeleteMessageController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteMessageService = new DeleteMessageService();

    await deleteMessageService.execute(id);

    return response.sendStatus(200);
  }
}

export { DeleteMessageController };
