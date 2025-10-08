import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { AuthService } from "./auth/auth.service";

@Injectable()
export class BootstrapService implements OnApplicationBootstrap {
  constructor(private readonly authService: AuthService) { }

  async onApplicationBootstrap(): Promise<void> {
      const user = {
        email: 'admin.jgraso@email.com',
        password: 'administrator123'
      }
      await this.authService.register(user);
  }
}