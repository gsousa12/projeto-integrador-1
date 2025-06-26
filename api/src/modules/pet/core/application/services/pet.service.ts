import { Inject, Injectable } from '@nestjs/common';
import { PetHelper } from '../helpers/pet.helper';
import { PET_REPOSITORY } from 'src/common/tokens/repositories.tokens';
import { IPetService } from './interfaces/pet-service.interface';
import { PetRepository } from 'src/modules/pet/infrastructure/repository/pet.repository';
import { CreatePetRequestDto } from '../dtos/request/create-pet.request.dto';
import { Pet } from '@prisma/client';
import { PaginationMeta } from 'src/common/utils/api-response';

@Injectable()
export class PetService implements IPetService {
  constructor(
    @Inject(PET_REPOSITORY) private readonly petRepository: PetRepository,
    private readonly petHelper: PetHelper,
  ) {}

  async createPet(request: CreatePetRequestDto) {
    const createdPet = await this.petRepository.create(request);
    return createdPet;
  }

  async getPetList(
    page: number,
    limit: number,
    filters: {
      name?: string;
      species?: string;
      breed?: string;
      gender?: string;
      age?: number;
      size?: string;
      vaccinated?: boolean;
      neutered?: boolean;
      city?: string;
      state?: string;
    },
  ): Promise<{ petList: Pet[]; meta: PaginationMeta }> {
    return this.petRepository.getPetList(page, limit, filters);
  }
}
