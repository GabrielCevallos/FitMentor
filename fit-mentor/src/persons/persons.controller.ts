import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PersonSave, PersonUpdate, UserDetails } from './dto/persons.dto';
import { PersonsService } from './persons.service';
import { Person } from './person.entity';

@Controller('persons')
export class PersonsController {
  constructor(private personsService: PersonsService) { }
  @Post()
  async createPerson(@Body() personSave: PersonSave): Promise<void> {
    await this.personsService.create(personSave);
  }

  @Get()
  async findAllPersons(): Promise<Person[]> {
    return await this.personsService.findAll();
  }

  @Get(':id')
  async findPerson(@Param('id') id: string): Promise<Person> {
    return await this.personsService.findById(id);
  }

  @Put(':id')
  async updatePerson(@Param('id') id: string, @Body() personUpdate: PersonUpdate): Promise<void> {
    await this.personsService.merge(id, personUpdate);
  }

  @Delete(':id')
  async deletePerson(@Param('id') id: string) {
    await this.personsService.remove(id);
  }

}
