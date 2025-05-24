import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { validationMessages } from 'src/common/utils/validation-message';

export class RegisterRequestDto {
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  name: string;

  @IsEmail({}, { message: 'E-mail inválido.' })
  email: string;

  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  @Length(6, 20, { message: validationMessages.Length })
  password: string;
}
