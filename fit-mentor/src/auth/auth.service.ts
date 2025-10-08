import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountsService } from 'src/accounts/accounts.service';
import { LoginRequest, RegisterRequest } from './dto/register-request.dto';
import * as argon2 from 'argon2';
import { messages } from './constants';
import { JwtService } from '@nestjs/jwt';
import { log } from 'node:console';

@Injectable()
export class AuthService {
  constructor(
    private accountsService: AccountsService,
    private jwtService: JwtService
  ) { }

  async register(registerRequest: RegisterRequest): Promise<string> {
    await this.accountsService.create(registerRequest);
    return messages.registered;
  }

  async signIn(loginRequest: LoginRequest): Promise<{ accessToken: string }> {
    const account = await this.accountsService.findByEmail(loginRequest.email);
    if (!account) throw new UnauthorizedException(messages.invalidCredentials);
    const ok = await argon2.verify(account.password, loginRequest.password);
    if (!ok) throw new UnauthorizedException(messages.invalidCredentials);

    const payload = { sub: account.id, username: account.email };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    }
  }
}
