
import { AuthAPI } from "../api/AuthAPI";
import { Routes } from "../app/Constants";
import { router } from "../app/Router";
import { signInData, signUpData } from "../type";

export class AuthService {
  private readonly api: AuthAPI;

  constructor() {
    this.api = new AuthAPI();
  }
  
  async signIn(data: signInData) {
    try {
      await this.api.signInRequest(data);
      await this.getUser();
      router.go(Routes.messenger);
    } catch (e) {
      alert(e.reason);
    }
  }

  async signUp(data: signUpData) {
    try {
      await this.api.signUpRequest(data);
      await this.getUser();
      router.go(Routes.messenger);
    } catch (e) {
      alert(e.reason);
    }
  }

  async getUser() {
    try {
      const user = await this.api.getUser();
      window.store.set({user: user});
      return user;
    } catch (e) {
      console.log(e.reason)
    }
  }

  async logout() {
    try {
      await this.api.logoutRequest();
      window.store.set({user: null, chats: []});
      router.go(Routes.auth);
    } catch (e) {
      alert(e.reason);
    }
  }
  
}

export const authService = new AuthService();
