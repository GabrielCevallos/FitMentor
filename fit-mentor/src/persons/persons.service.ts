import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './person.entity';
import { Repository } from 'typeorm';
import { PersonSave, PersonUpdate } from './dto/persons.dto';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private personsRepository: Repository<Person>
  ) { }

  async create(personSave: PersonSave): Promise<void> {
    const person = await this.personsRepository.create({ ...personSave, updatedAt: new Date() });
    await this.personsRepository.save(person);
  }

  // TEMPORAL next we will use paginations
  async findAll(): Promise<Person[]> {
    return await this.personsRepository.find();
  }

  async findById(id: string): Promise<Person> {
    const person = await this.personsRepository.findOneBy({ id });
    if (!person) {
      throw new NotFoundException('Person was not Found');
    }
    return person;
  }

  async merge(id: string, personUpdate: PersonUpdate): Promise<void> {
    const person = await this.personsRepository.findOneBy({ id });
    if (!person) {
      throw new NotFoundException('Person was not Found');
    }
    await this.personsRepository.save({
      ...PersonSave,
      ...personUpdate,
      updatedAt: new Date(),
    });
  }

  async remove(id: string): Promise<void> {
    await this.personsRepository.delete({ id });
  }
  
}
