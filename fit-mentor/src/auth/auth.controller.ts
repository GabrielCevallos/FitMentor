import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequest, TokenResponse } from './dto/register-request.dto';
import { Public } from 'src/config/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  
  @Public()
  @Post('login')
  @HttpCode(200)
  async signIn(@Body() loginRequest: LoginRequest): Promise<TokenResponse> {
    const token = (await this.authService.signIn(loginRequest)).accessToken;
    return ({
      accessToken: token,
      refreshToken: token
    });
  }

  
}
