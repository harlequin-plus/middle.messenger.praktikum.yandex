
import { ChatAPI } from "../api/ChatAPI";
import { IChatUser } from "../type";

export class ChatService {
  private readonly api: ChatAPI;

  constructor() {
    this.api = new ChatAPI();
  }

  async getChats() {
    const chats = await this.api.getChats();
    window.store.set({chats: chats});
  }

  async createChat(title: string) {
    try {
      await this.api.createChat(title);
      await this.getChats();
    } catch (e) {
      alert(e.reason)
    }
  }

  async getToken(idChat: number) {
    try {
      return await this.api.getToken(idChat);
    } catch (e) {
      alert(e.reason)
    }
  }

  async addUsersToChat(data: { users: number[]; chatId: number }) {
    try {
      await this.api.addUserToChat(data);
      await this.getUsersByChat(data.chatId, {} as IChatUser)
      alert("Пользователь добавлен в чат");
      window.store.set({searchUsers: 0});
    } catch (e) {
      alert(e.reason)
    }
  }

  async removeUsersFromChat(data: { users: number[]; chatId: number }) {
    try {
      await this.api.removeUserFromChat(data);
      await this.getUsersByChat(data.chatId, {} as IChatUser)
      await this.getChats();
    } catch (e) {
      alert(e.reason)
    }
  }


  async getUsersByChat(id: number, data: IChatUser) {
    try {
      const usersByChat = await this.api.getUsersByChat(id, data);
      window.store.set({usersByChat: usersByChat, countUsersByChat: usersByChat.length});
    } catch (e) {
      alert(e.reason);
    }
  }
  

}

export const chatService = new ChatService();
