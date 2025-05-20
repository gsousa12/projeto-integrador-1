import { Body, Controller, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { createApiResponse } from 'src/common/utils/api-response';
import { LoginRequestDto } from '../core/application/dtos/request/login.request.dto';
import { Request } from 'express';
import { Response } from 'express';
import { AuthService } from '../core/application/service/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() request: LoginRequestDto, @Res({ passthrough: true }) response: Response) {
    await this.authService.login(request, response);
    // return createApiResponse(null);

    return null;
  }
}
