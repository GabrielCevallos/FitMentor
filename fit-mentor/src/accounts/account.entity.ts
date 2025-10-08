import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;
  
}