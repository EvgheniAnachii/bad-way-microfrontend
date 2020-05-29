import jwtDecode from 'jwt-decode'
import { AUTH_TOKEN_NAME } from './constants'

class AuthService {

  public setAuthToken(token: string) {
    localStorage.setItem(AUTH_TOKEN_NAME, token)
  }

  public getAuthToken(): string | null {
    const token = localStorage.getItem(AUTH_TOKEN_NAME)

    return token
  }

  public validateToken(): boolean {
    try {
      const token = this.getAuthToken()

      if (!token) {
        return false
      }

      // const { exp, unique_name } = jwtDecode(token)
      const user = jwtDecode(token)

      console.log(user)
      return true
      // if ((Date.now() / 1000) < exp) {
      //   return true
      // }

      // console.warn('JWT token expired.')
      // return false
    } catch (error) {
      console.error(`Error while decoding JWT token. (${error.message})`);

      return false
    }
  }

  public removeAuthToken(): void {
    localStorage.removeItem(AUTH_TOKEN_NAME)
  }
}

export const authService = new AuthService()