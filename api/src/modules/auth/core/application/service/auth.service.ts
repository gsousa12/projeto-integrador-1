import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AUTH_REPOSITORY } from 'src/common/tokens/repositories.tokens';
import { IAuthService } from '../interfaces/auth-service.interface';
import { LoginRequestDto } from '../dtos/request/login.request.dto';
import { RegisterRequestDto } from '../dtos/request/register.request.dto';
import { Response } from 'express';
import { User } from '@prisma/client';
import { AuthRepository } from 'src/modules/auth/infrastructure/repositories/auth.repository';
import { AuthHelper } from '../helpers/auth.helper';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(AUTH_REPOSITORY) private readonly authRepository: AuthRepository,
    private readonly authHelper: AuthHelper,
    private readonly jwtService: JwtService,
  ) {}

  async login(request: LoginRequestDto, response: Response): Promise<void> {
    const user = await this.validateUser(request.email, request.password);

    const payload = {
      userId: user.id,
      name: user.name,
      email: user.email,
      isActive: user.isActive,
    };
    const access_token = this.jwtService.sign(payload);
    this.authHelper.implementsCookies(access_token, response);
  }

  async register(request: RegisterRequestDto, response: Response): Promise<void> {
    const existingUser = await this.authRepository.findUserByEmail(request.email);
    if (existingUser) {
      throw new BadRequestException('Este e-mail já está em uso.');
    }

    const hashedPassword = await this.authHelper.encryptPassword(request.password);

    const newUser = await this.authRepository.createUser({
      name: request.name,
      email: request.email,
      password: hashedPassword,
    });

    const payload = {
      userId: newUser.id,
      name: newUser.name,
      email: newUser.email,
      isActive: newUser.isActive,
    };

    const access_token = this.jwtService.sign(payload);
    this.authHelper.implementsCookies(access_token, response);
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.authRepository.findUserByEmail(email);
    if (!user) {
      throw new NotFoundException('Não existe nenhum usuário registrado com esse email.');
    }
    const isValidPassword = await this.authHelper.comparePassword(password, user.password);
    if (!isValidPassword) {
      throw new BadRequestException('Senha incorreta.');
    }
    return user;
  }
}
