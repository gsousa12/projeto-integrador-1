import { BadRequestException, Injectable } from '@nestjs/common';
import { IAuthRepository } from '../interfaces/auth-repository.interface';
import { User } from '@prisma/client';
import { PrismaService } from 'src/common/modules/prisma/service/prisma.service';

@Injectable()
export class AuthRepository implements IAuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findUserByEmail(email: string): Promise<User | null> {
    const user = this.prisma.user.findUnique({
      where: { email },
    });
    return user;
  }

  async createUser(userData: Partial<User>): Promise<User> {
    const { name, email, password } = userData;

    // Validação simples para garantir que os campos obrigatórios estejam presentes
    if (!name || !email || !password) {
      throw new BadRequestException('Campos obrigatórios ausentes');
    }

    // Verifica se o usuário já existe
    const existingUser = await this.findUserByEmail(email);
    if (existingUser) {
      throw new BadRequestException('Email informado já está cadastrado');
    }

    // Cria o novo usuário
    const user = this.prisma.user.create({
      data: {
        name,
        email,
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null, // Define o campo deletedAt como null por padrão
        isActive: true, // Define o usuário como ativo por padrão
      },
    });
    return user;
  }
}
