import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { PersonsController } from './persons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './person.entity';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([Person])],
  providers: [
    PersonsService,
    /* {
      provide: APP_GUARD,
      useClass: AuthGuard
    } */
  ],
  controllers: [PersonsController]
})
export class PersonsModule {}
