import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query, UseGuards } from '@nestjs/common';
import { PetService } from '../../core/application/services/pet.service';
import { AuthGuard } from '@nestjs/passport';
import { CreatePetRequestDto } from '../../core/application/dtos/request/create-pet.request.dto';
import { createApiResponse } from 'src/common/utils/api-response';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/')
  @HttpCode(HttpStatus.OK)
  async createPet(@Body() request: CreatePetRequestDto) {
    const createdPet = await this.petService.createPet(request);
    return createApiResponse(createdPet);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getPetList(
    @Query('page') page?: number,
    @Query('name') name?: string,
    @Query('species') species?: string,
    @Query('breed') breed?: string,
    @Query('gender') gender?: string,
    @Query('age') age?: number,
    @Query('size') size?: string,
    @Query('vaccinated') vaccinated?: string,
    @Query('neutered') neutered?: string,
    @Query('city') city?: string,
    @Query('state') state?: string,
  ) {
    const limit = 30;
    const parsedPage = page ? Number(page) : 1;
    const parsedVaccinated = vaccinated !== undefined ? vaccinated === 'true' : undefined;
    const parsedNeutered = neutered !== undefined ? neutered === 'true' : undefined;
    const parsedAge = age !== undefined ? Number(age) : undefined;

    const filters = {
      name,
      species,
      breed,
      gender,
      age: parsedAge,
      size,
      vaccinated: parsedVaccinated,
      neutered: parsedNeutered,
      city,
      state,
    };

    const { petList, meta } = await this.petService.getPetList(parsedPage, limit, filters);
    return createApiResponse(petList, meta);
  }
}
