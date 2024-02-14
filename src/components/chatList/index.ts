import tpl from './chatList.hbs';
import Block from '../../app/Block';
import assets from '../../helpers/assets';
import "./chatList.scss";
import { messages } from "../../mocks.json";
import { chatService } from '../../services/ChatService';
import {messageService} from '../../services/MessageService';
import { IChatUser } from '../../type';
import { StoreEvents } from '../../app/Store';




const { avatar } = assets;

class ChatListBlock extends Block {

  constructor() {
    super('div', {
      events: {
        click: (e) => {this.selectChat(e)}
      }
    });
  }
  init() {
    window.store.on(StoreEvents.Updated, () => {
      this.setProps({
        chats: window.store.getState().chats,
      });
    });
  }


  async selectChat(e) {  
    const chatId = e.target.closest('.dialog-js').dataset.chatId;
    const token = await chatService.getToken(chatId);
  
    if (token) {
      
      const userId = window.store.getState().user.id;
      messageService.connect({ userId, chatId, token: token.token });

      chatService.getUsersByChat(chatId, {} as IChatUser)

      window.store.set({isOpenDialogChat: true, currentChat: chatId})
    }

  }

  render() {
    return this.compile(tpl, {
      isChatSelected: true,
      messages,
      avatar,
      chats: window.store.getState().chats,
    });
    
  }
}

export default ChatListBlock;
