import { getCustomRepository } from 'typeorm';
import { MessagesRepository } from '../repository/MessagesRepository';

class DeleteMessageService {
  async execute(id: string) {
    const messageRepository = getCustomRepository(MessagesRepository);

    const deletedMessage = await messageRepository.delete({ id });

    return deletedMessage;
  }
}

export { DeleteMessageService };
