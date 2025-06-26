import { Pet } from '@prisma/client';
import { CreatePetRequestDto } from 'src/modules/pet/core/application/dtos/request/create-pet.request.dto';

export interface IPetRepository {
  create(request: CreatePetRequestDto): Promise<Pet>;
}
