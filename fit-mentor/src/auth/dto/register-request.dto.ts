export class RegisterRequest {
  email: string;
  password: string;
}

export class LoginRequest {
  email: string;
  password: string;
}

export class TokenResponse {
  accessToken: string;
  refreshToken: string;
}

export class ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}