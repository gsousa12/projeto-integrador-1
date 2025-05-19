import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { BcryptAdapter } from 'src/common/adapters/bcrypt.adapter';

@Injectable()
export class AuthHelper {
  constructor(private readonly bcryptAdapter: BcryptAdapter) {}

  async comparePassword(password: string, userPassword: string): Promise<boolean> {
    return await this.bcryptAdapter.compare(password, userPassword);
  }

  async implementsCookies(access_token: string, res: Response) {
    res.cookie('access_token', access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'development' ? false : true,
      sameSite: 'strict',
      maxAge: Number(process.env.JWT_MAX_AGE),
    });
  }

  async clearCookies(res: Response) {
    res.clearCookie('access_token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'development' ? false : true,
      sameSite: 'strict',
    });
  }
}
