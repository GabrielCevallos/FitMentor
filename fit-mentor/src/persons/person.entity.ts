import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Gender } from "./enum/gender.enum";

@Entity()
export class Person {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  birthDate: Date;

  @Column()
  phoneNumber: string;

  @Column()
  updatedAt: Date;

  @Column({ type: 'enum', enum: Gender })
  gender: Gender
}