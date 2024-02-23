
import { baseApiUrl } from "../app/Constants";
import { HTTPTransport } from "../app/HTTPTransport";
import { signInData, IUser, signUpData } from "../type";

enum endPoints {
  signUp = '/auth/signup',
  signIn = '/auth/signin',
  getUser = '/auth/user',
  logout = '/auth/logout',
}
export class AuthAPI {
  protected request: HTTPTransport;

  constructor() {
    this.request = new HTTPTransport();
  }

  signInRequest(data: signInData): Promise<void> {
    return this.request.post(`${baseApiUrl}${endPoints.signIn}`, { data });
  }
  signUpRequest(data: signUpData): Promise<void> {
    return this.request.post(`${baseApiUrl}${endPoints.signUp}`, { data });
  }
  logoutRequest(): Promise<void> {
    return this.request.post(`${baseApiUrl}${endPoints.logout}`, { });
  }
  getUser(): Promise<IUser> {
    return this.request.get(`${baseApiUrl}${endPoints.getUser}`, { });
  }
}

export default new AuthAPI();
