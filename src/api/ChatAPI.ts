
import { baseApiUrl } from "../app/Constants";
import { HTTPTransport } from "../app/HTTPTransport";
import { IUserProfileData, IUserChangePassword, IChatInfo, IChatUser } from "../type";

enum endPoints {
  chats = '/chats',
  tokenService = '/chats/token/',
  chatsUsers = '/chats/users'
}
export class ChatAPI {
  protected request: HTTPTransport;

  constructor() {
    this.request = new HTTPTransport();
  }
  getChats(): Promise<IChatInfo[]> {
    return this.request.get(`${baseApiUrl}${endPoints.chats}`, { });
  }

  createChat(title: string): Promise<void> {
    return this.request.post(`${baseApiUrl}${endPoints.chats}`, { data: { title } });
  }

  getToken(chatId: number): Promise<{ token: string }> {
    return this.request.post(`${baseApiUrl}${endPoints.tokenService}${chatId}`, {});
  }

  addUserToChat(data: { users: number[]; chatId: number }): Promise<void> {
    return this.request.put(`${baseApiUrl}${endPoints.chatsUsers}`, { data });
  }
  removeUserFromChat(data: { users: number[]; chatId: number }): Promise<void> {
    return this.request.delete(`${baseApiUrl}${endPoints.chatsUsers}`, { data });
  }

  getUsersByChat(id: number, data: IChatUser): Promise<IChatUser[]> {
    return this.request.get(`${baseApiUrl}${endPoints.chats}/${id}/users`, { data });
  }

}

export default new ChatAPI();
