/* eslint-disable import/prefer-default-export */
import tpl from "./chat.hbs";
import Block from "../../app/Block";
import SidebarBlock from "../../components/sidebar";
import ChatListBlock from "../../components/chatList";
import SearchInput from "../../components/search-input";
import ActionButton from "../../components/action-button";
import assets from "../../helpers/assets";
import "./chat.scss";
import { chatService } from "../../services/ChatService";
import FormInput from "../../components/form-input";
import { StoreEvents } from "../../app/Store";
import { messageService } from "../../services/MessageService";
import { userService } from "../../services/UserService";
import userList from "../../components/user-list";
import UsersInChatBlock from "../../components/usersInChat";

const { iconAssets, iconSend, iconAdd, iconChatInfo, photo, balloon } = assets;
export class ChatPage extends Block {
  constructor() {
    super("div");
  }

  init() {
    chatService.getChats();
    this.children.sidebar = new SidebarBlock();
    this.children.chatList = new ChatListBlock();
    this.children.searchInput = new SearchInput();
    this.children.addChatButton = new ActionButton({
      id: "add_chat",
      type: "button",
      title: "Создать чат",
      iconSrc: iconAdd,
      events: {
        click: () => this.makeNewChat(),
      }
    });
    this.children.chatNameInput = new FormInput({
      name: 'new_chat_name',
      type: 'text',
      title: 'Создать новый чат',
      errorText: ``,
      showError: false,
      value: '',
      events: {
        change: () => {},
      },
    });
    this.children.addUserButton = new ActionButton({
      id: "add_user",
      type: "button",
      title: "Добавить пользователя",
      iconSrc: iconAdd,
      events: {
        click: () => this.searchUsers(),
      }
    });
    this.children.userLoginInput = new FormInput({
      name: 'user_login',
      type: 'text',
      title: 'Введите логин пользователя',
      errorText: ``,
      showError: false,
      value: '',
      events: {
        change: () => {},
      },
    });
    this.children.addAssetButton = new ActionButton({
      id: "add_asset",
      type: "button",
      title: "Добавить файл или фото",
      iconSrc: iconAssets,
    });
    this.children.sendMessageButton = new ActionButton({
      id: "send_message",
      type: "submit",
      title: "Отправить сообщение",
      iconSrc: iconSend,
      events: {
        click: () => this.sendMessage(),
      },
    });
    this.children.chatInfoButton = new ActionButton({
      id: "chat_info",
      type: "button",
      title: "Настройка диалога",
      iconSrc: iconChatInfo,
    });

    this.children.userList = new userList();
    this.children.usersInChat = new UsersInChatBlock();

    window.store.on(StoreEvents.Updated, () => {
      this.setProps({
        isOpenDialogChat: window.store.getState().isOpenDialogChat,
        user: window.store.getState().user,
      });
    });
  }
  async makeNewChat() {
    const chatName  = document.querySelector('[name="new_chat_name"]');
    chatService.createChat(chatName!.value)
    chatName!.value = '';
  }

  async searchUsers() {
    const userLogin  = document.querySelector('[name="user_login"]');
    userService.searchUser(userLogin!.value)
  }

  sendMessage() {
    let message = document.querySelector('[name="message"]')!.value;
    message = message.trim();
    if (message.length > 0) {
      messageService.sendMessage(message);
    }
  }

  render() {
    return this.compile(tpl, {
      isChatSelected: window.store.getState().isOpenDialogChat,
      photo,
      balloon,
      user: window.store.getState().user,
      messages: window.store.getState().messages,
    });
  }
}
