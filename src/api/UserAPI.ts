
import { baseApiUrl } from "../app/Constants";
import { HTTPTransport } from "../app/HTTPTransport";
import { IUserProfileData, IUserChangePassword, IUserInfoData } from "../type";

enum endPoints {
	profileUpdate = '/user/profile',
	passwordUpdate = '/user/password',
	avatarUpdate = '/user/profile/avatar',
	userSearch = '/user/search',
}
export class UserAPI {
  protected request: HTTPTransport;

  constructor() {
    this.request = new HTTPTransport();
  }
  updateProfile(data: IUserProfileData): Promise<IUserProfileData> {
    return this.request.put(`${baseApiUrl}${endPoints.profileUpdate}`, { data });
  }
  updatePassword(data: IUserChangePassword): Promise<void> {
    return this.request.put(`${baseApiUrl}${endPoints.passwordUpdate}`, { data });
  }
  updateAvatar(data: FormData): Promise<IUserProfileData> {
    return this.request.put(`${baseApiUrl}${endPoints.avatarUpdate}`, {
      data,
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
  searchUser(login: string): Promise<IUserInfoData[]> {
    return this.request.post(`${baseApiUrl}${endPoints.userSearch}`, { data: { login } });
  }

}

export default new UserAPI();
