/* eslint-disable import/prefer-default-export */
import { TokenInterface } from '../redux/types';

interface authDataInterface {
  name?: string,
  email: string,
  password: string
}

async function login({ email, password }: authDataInterface): Promise<TokenInterface> {
  // TO-DO Login User
  const tokens: TokenInterface = {
    access: 'access_token',
    refresh: 'refresh_token'
  };
  return tokens;
}

async function register({ name, email, password }: authDataInterface): Promise<boolean> {
  // TO-DO Register User
  return true;
}

export const sessionServices = {
  login, register
};
