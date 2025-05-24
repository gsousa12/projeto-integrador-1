import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from '../../core/application/services/user.service';
import { UserMapper } from '../../core/application/mappers/user.mapper';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { createApiResponse } from 'src/common/utils/api-response';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userMapper: UserMapper,
  ) {}

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() request: CreateUserRequestDto) {
    const user = await UserMapper.toMapperCreateUserRequest(request);
    const createdUser = await this.userService.create(user, customerId);
    const response = await UserMapper.toMapperCreateUserResponse(createdUser);

    return createApiResponse('Usuário criado com sucesso', response);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/get-user-info')
  @HttpCode(HttpStatus.OK)
  async getUserInfo(@Req() request: Request) {
    if (!request.user) {
      throw new BadRequestException('Usuário não encontrado.');
    }
    return createApiResponse(request.user!);
  }
}
