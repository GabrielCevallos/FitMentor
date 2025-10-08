import * as dotenv from "dotenv";

dotenv.config();

export const messages = {
  registered: "Registered successfully!",
  invalidCredentials: 'Invalid credentials',
};

export const jwtConstants = {
  secret: process.env.JWT_SECRET_KEY,
};