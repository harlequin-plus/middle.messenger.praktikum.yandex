
import { UserAPI } from "../api/UserAPI";
import { Routes } from "../app/Constants";
import { router } from "../app/Router";
import { IUserChangePassword, IUserProfileData } from "../type";

export class UserService {
  private readonly api: UserAPI;

  constructor() {
    this.api = new UserAPI();
  }

  async updateProfile(data: IUserProfileData) {
    try {
      const updatedData = await this.api.updateProfile(data);
      window.store.set({user: updatedData});
      router.go(Routes.settings)
    } catch (e) {
      alert(e.reason);
    }
  }

  async updatePassword(data: IUserChangePassword) {
    try {
      await this.api.updatePassword(data);
      router.go(Routes.settings)
    } catch (e) {
      alert(e.reason);
    }
  }

  async updateAvatar(data: any) {
    try {
      await this.api.updateAvatar(data);
      router.go(Routes.settings)
    } catch (e) {
      alert(e.reason);
    }
  }

  async searchUser(login: string) {
    try {
      const users = await this.api.searchUser(login);
      window.store.set({searchUsers: users});
    } catch (e) {
      alert(e.reason)
    }
  }

}

export const userService = new UserService();
