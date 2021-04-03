import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    switch (user && user.admin) {
      case user === undefined:
        throw new Error('User not found');
        break;
      case user.admin === false:
        throw new Error('You are not admin, you cant do this operation');
        break;
      default:
        break;
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
