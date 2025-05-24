import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from './interfaces/user-service.interface';
import { UserHelper } from '../helpers/user.helper';
import { USER_REPOSITORY } from 'src/common/tokens/repositories.tokens';
import { UserRepository } from 'src/modules/user/infrastructure/repository/user.repository';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: UserRepository,
    private readonly userHelper: UserHelper,
  ) {}
}
