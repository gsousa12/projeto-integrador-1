import { Module } from '@nestjs/common';
import { UserController } from './http/controller/user.controller';
import { UserRepository } from './infrastructure/repository/user.repository';
import { UserService } from './core/application/services/user.service';
import { UserHelper } from './core/application/helpers/user.helper';
import { UserMapper } from './core/application/mappers/user.mapper';
import { USER_REPOSITORY } from 'src/common/tokens/repositories.tokens';
import { PrismaService } from 'src/common/modules/prisma/service/prisma.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    {
      provide: USER_REPOSITORY,
      useClass: UserRepository,
    },
    UserService,
    UserHelper,
    PrismaService,
    UserMapper,
  ],
  exports: [],
})
export class UserModule {}
