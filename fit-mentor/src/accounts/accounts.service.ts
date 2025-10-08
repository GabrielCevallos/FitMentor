import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './account.entity';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';
import { ChangePasswordRequest, RegisterRequest } from 'src/auth/dto/register-request.dto';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>
  ) { }

  async create(registerRequest: RegisterRequest): Promise<void> {
    const account = this.accountsRepository.create({
      ...registerRequest,
      password: await argon2.hash(registerRequest.password),
    });
    await this.accountsRepository.save(account);
  }

  async findByEmail(email: string): Promise<Account> {
    const account = await this.accountsRepository.findOneBy({ email });
    if (!account) {
      throw new NotFoundException('Account was not found!');
    }
    return account;
  }

  async changePassword(id: string, changePasswordRequest: ChangePasswordRequest): Promise<void> {
    const accountSaved = await this.accountsRepository.findOneBy({ id });
    if (!accountSaved) throw new UnauthorizedException('Uhauthorized');
    const ok = await argon2.verify(accountSaved.password, changePasswordRequest.currentPassword);
    if (!ok) throw new UnauthorizedException('Unauthorized');
  }

}
